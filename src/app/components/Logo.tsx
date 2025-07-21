import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Logo() {
  return (
    <Image
      src="/logo.svg"
      alt="netflix"
      width={90}
      height={90}
      className="cursor-pointer"
    />
  );
}
