"use client";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserProfile from "./UserProfile";
import { useScroll } from "../hooks/useScroll";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`${
        isScrolled && "bg-black"
      } fixed top-0 z-50 flex w-full items-center justify-between transition-all px-4 py-4 lg:px-10 lg:py-6`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Logo />
        <NavLinks />
      </div>

      <UserProfile />
    </header>
  );
}
