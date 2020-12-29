import React from "react";
import Image from "next/image";
import Link from "next/link";

const Index = () => (
  <>
    <p>An image with a non-latin src should be displayed below:</p>
    <Image
      src="/01-тест.png"
      alt="Image with a non-latin src"
      width={113}
      height={48}
    />

    <p>Non-latin routes:</p>
    <ul>
      <li><Link href="/тест">/тест</Link></li>
      <li><Link href="/hæ">/hæ</Link></li>
    </ul>
  </>
);

export default Index;