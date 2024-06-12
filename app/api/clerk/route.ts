import { Webhook } from "svix";
import { headers } from "next/headers";
import { UserJSON, WebhookEvent } from "@clerk/nextjs/server";
import prisma from "@/lib/db";

export async function POST(req: Request) {
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET;

  if (!WEBHOOK_SECRET) {
    throw new Error(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local"
    );
  }

  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response("Error occurred -- no svix headers", {
      status: 400,
    });
  }

  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);

  let evt: WebhookEvent;

  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new Response("Error occured", {
      status: 400,
    });
  }

  const { id, ...attributes } = evt.data;
  console.log(attributes);
  const eventType = evt.type;

  switch (eventType) {
    case "user.created":
      const {
        id,
        image_url,
        username,
        email_addresses,
        first_name,
        last_name,
      }: UserJSON = evt.data;
      await prisma.user.create({
        data: {
          clerkId: id,
          firstName: first_name!,
          lastName: last_name!,
          imageUrl: image_url,
          userName: username!,
          email: email_addresses.find(
            (e: any) => e.id === evt.data.primary_email_address_id
          )!.email_address,
        },
      });
      return new Response("", { status: 201 });
    case "user.deleted":
      await prisma.user.delete({
        where: {
          clerkId: id!,
        },
      });
      return new Response("", { status: 200 });
  }

  return new Response("", { status: 200 });
}
