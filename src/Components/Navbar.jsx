"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

function Navbar() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <>
      <li>
        <Link href="#">Browse Jobs</Link>
      </li>
      <li>
        <Link href="#">Company</Link>
      </li>
      <li>
        <Link href="#">Pricing</Link>
      </li>
    </>
  );

  return (
    <nav className="mx-auto w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>
            <Image
              src="/logo.png"
              width={154}
              height={44}
              alt="HireLoop Logo"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-4 md:flex border-r-2 pr-6">
            {links}
          </ul>
          <div className="flex items-center gap-10">
            {user ? (
              <h1 className="font-semibold text-xl text-[#5C53FE] cursor-pointer">{user?.name}</h1>
            ) : (
              <Link href="/sign-in">
                <h1
                  className={`text-[#5C53FE] font-semibold text-lg hidden md:block`}
                >
                  Sign In
                </h1>
              </Link>
            )}
            <Link href="#">
              <Button className={"bg-[#5C53FE] rounded-md"}>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{links}</ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
