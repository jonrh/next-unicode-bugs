import React from "react";
import Image from "next/image";

const Index = () => (
  <>
    <p>An image should be displayed below:</p>
    <Image
      src="/01-тест.png"
      alt="Image with a non-latin src"
      width={113}
      height={48}
    />
  </>
);

export default Index;