import Image from "next/image";
import React from "react";

interface contactProps {
  src: string;
  name: string;
}

function Contacts({ src, name }: contactProps) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 rounded-xl cursor-pointer p-2 ">
      <Image
        className="rounded-full"
        objectFit="cover"
        src={src}
        width={50}
        height={50}
        layout="fixed"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  );
}

export default Contacts;
