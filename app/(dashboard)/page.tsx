import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: {
    selected: boolean;
  };
}

export default async function Home(props: Props) {
  return (
    <div className="h-full w-full bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col gap-3">
        <Link
          className={buttonVariants({
            size: "lg",
            className: "text-lg",
          })}
          href={{
            protocol: "http",
            pathname: "/",
            query: {
              selected: true,
            },
          }}
        >
          Empty Chat
        </Link>
        {JSON.stringify(props.searchParams)}
      </div>
    </div>
  );
}
