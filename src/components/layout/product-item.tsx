"use client";

import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Props = {
  data: Product;
};

export const ProductItem = ({ data }: Props) => {
  const [liked, setLiked] = useState(data.liked);

  const link = `/product/${data.id}`;
  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <div className="bg-white border border-gray-200  rounded-sm p-6">
      <div onClick={toggleLiked} className="cursor-pointer flex justify-end">
        <div className="size-12 border border-b-gray-200 rounded-sm flex justify-center items-center ">
          {liked && (
            <Image
              src={"/assets/ui/heart-3-fill.png"}
              alt=""
              width={24}
              height={24}
            />
          )}
          {!liked && (
            <Image
              src={"/assets/ui/heart-3-line.png"}
              alt=""
              width={24}
              height={24}
            />
          )}
        </div>
      </div>

      <div className=" flex justify-center">
        <Link href={link}>
          <Image
            src={data.image}
            alt={data.label}
            width={200}
            height={200}
            className="max-w-full h-48"
          />
        </Link>
      </div>
      <Link href={link}>
        <div className="mt-9 text-lg font-bold">{data.label}</div>
      </Link>
      <Link href={link}>
        <div className="text-2xl mt-3 font-bold text-blue-600 ">
          R$ {data.price.toFixed(2)}
        </div>
      </Link>
      <div className="mt-5 text-gray-400">Em atè 12x no cartão</div>
    </div>
  );
};

