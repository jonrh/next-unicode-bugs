import React from "react";
import Image from "next/image";
import Link from "next/link";

const Index = () => (
  <>
    <p>An image should be displayed below:</p>
    <Image
      src="/01-тест.png"
      alt="Image with a non-latin src"
      width={113}
      height={48}
    />

    <p>Link: <Link href="/hæ">/hæ</Link></p>
    <p>a: <a href="/hæ">/hæ</a></p>
  </>
);

export default Index;