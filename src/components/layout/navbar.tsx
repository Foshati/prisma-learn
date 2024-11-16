import Link from "next/link";
import { ModeToggle } from "../modeToggle";

export const Navbar = () => {
  return (
    <div className="border-b px-4">
      <div className="flex  items-center justify-between mx-auto max-w-7xl h-16 ">
        <div>
          <Link className="text-md font-bold" href="/">
            Prisma-Learn
          </Link>
        </div>
        <div>
          <ul className="flex gap-5 ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/post">Post</Link>
            </li>
          </ul>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
