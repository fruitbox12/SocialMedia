import Image from "next/image";
import React from "react";

interface SiderbarRowProps {
  src?: string;
  Icon: React.FC<any>;
  title: string;
}

function SiderbarRow({ src, Icon, title }: SiderbarRowProps) {
  return (
    <div className="flex space-x-2 items-center p-4 hover:bg-gray-200 rounded-xl cursor-pointer">
      {src && (
        <Image
          className="rounded-full"
          src={src}
          width={30}
          height={30}
          layout="fixed"
        />
      )}
      {Icon && (
        <Icon className="h-8 w-8 md:h-6 md:w-6 2xl:h-8 2xl:w-8 text-blue-500" />
      )}
      <p className="hidden sm:inline-flex  md:text-sm 2xl:text-base font-medium">
        {title}
      </p>
    </div>
  );
}

export default SiderbarRow;
