import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Logo() {
  return (
    <nav>
      <ul className="hidden md:flex md:space-x-4">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </nav>
  );
}
