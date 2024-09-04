import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-[15%]">
      <Link href={'/dashboard'}><h2><Button>
        Get started</Button>
        </h2>
        </Link>
    </div>
  );
}
