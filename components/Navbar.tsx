import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Book, HomeIcon } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex items-center">
        <Link
          href="/"
          className="text-xl font-bold text-primary font-mono tracking-wider"
        >
          Books
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="flex items-center gap-2">
          <Link href="/books">
            <Book className="w-4 h-4" />
            <span className="hidden lg:inline">Books</span>
          </Link>
        </Button>
        <Button variant="ghost" className="flex items-center gap-2">
          <Link href="/">
            <HomeIcon className="w-4 h-4" />
            <span className="hidden lg:inline">Home</span>
          </Link>
        </Button>
      </div>
    </nav>
  );
}
