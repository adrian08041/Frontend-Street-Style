"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  text: string;
};
export const ProductDescription = ({ text }: Props) => {
  const [opened, setOpened] = useState(true);

  return (
    <div className="bg-white border border-gray-200 px-7 md:px-12  mt-20">
      <div
        className={`flex justify-between py-7 items-center
           ${opened ? "border-b" : "border-0"}  border-gray-200`}
      >
        <div className="text-2xl">Informações do produto</div>
        <div
          onClick={() => setOpened(!opened)}
          className="size-14 border cursor-pointer border-gray-200 flex justify-center items-center rounded-sm"
        >
          <Image
            src={"/assets/ui/arrow-left-s-line.png"}
            alt=""
            width={24}
            height={24}
            className={`${opened ? "rotate-0" : "rotate-180"} transition-all`}
          />
        </div>
      </div>
      {opened && <div className="my-12 text-gray-500">{text}</div>}
    </div>
  );
};

