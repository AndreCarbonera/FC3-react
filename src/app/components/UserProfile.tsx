import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Logo() {
  return (
    <div className="flex items-center space-x-4">
      <p className="hidden lg:inline">Kids</p>

      <Link href="/account">
        <Image
          src="/profile.png"
          alt="profile"
          width={40}
          height={40}
          className="cursor-pointer rounded"
        />
      </Link>
    </div>
  );
}
