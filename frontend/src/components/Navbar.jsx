import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full h-16 md:h-20 flex items-center
    justify-between"
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center gap-4 
      text-2xl font-bold"
      >
        <Image src="logo.png" alt="Lama Logo" w={32} h={32} />
        <span>LamaLogo</span>
      </Link>
      {/* Menu mobile */}
      <div className="md:hidden">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "x" : "="}
        </div>
        {/* Mobile List */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 bg-[#a6a6ff]
        transition-all ease-in-out
          ${open ? "-right-0" : "-right-[100%]"}
          `}
        >
          <Link to="/" className="">
            Home
          </Link>
          <Link to="/" className="">
            Trending
          </Link>
          <Link to="/" className="">
            Most Popular
          </Link>
          <Link to="/" className="">
            About
          </Link>
          <Link to="/" className="">
            <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
              Login 👋{" "}
            </button>
          </Link>
        </div>
      </div>
      {/* Desktop menu */}
      <div className="hidden md:flex items-center xl:gap-12 md:gap-12 font-medium ">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="/" className="">
          Trending
        </Link>
        <Link to="/" className="">
          Most Popular
        </Link>
        <Link to="/" className="">
          About
        </Link>
            {/* Confiurando Link con Clerk */}
        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-700 text-white">
              Login 👋{" "}
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
