"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  images: string[];
};
export const ImageSlider = ({ images }: Props) => {
  const [selectImageIndex, setSelectImageIndex] = useState(0);
  const handleThumbnailClick = (index: number) => {
    setSelectImageIndex(index);
  };
  return (
    <div className="max-w-sm mx-auto md:mx-0">
      <div className=" border border-b-gray-300 bg-white p-14">
        <Image
          src={images[selectImageIndex]}
          alt=""
          width={380}
          height={380}
          className="max-w-full"
        />
      </div>
      <div className=" mt-8 grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer border p-2 bg-white
          ${
            index === selectImageIndex ? "border-blue-500" : "border-gray-300"
          }`}
          >
            <Image src={image} alt="" width={120} height={120} />
          </div>
        ))}
      </div>
    </div>
  );
};

