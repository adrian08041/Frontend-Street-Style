import { link } from "fs";
import { id } from "zod/locales";

export const data = {
  banners: [
    { img: "/assets/banners/banner-1.png", link: "" },
    { img: "/assets/banners/banner-2.png", link: "" },
    { img: "/assets/banners/banner-3.png", link: "" },
    { img: "/assets/banners/banner-4.png", link: "" },
  ],
  products: [
    {
      id: 1,
      label: "camisa php",
      price: 49.9,
      image: "/assets/products/camiseta-php.png",
      liked: false,
    },
    {
      id: 2,
      label: "camisa laravel",
      price: 119.9,
      image: "/assets/products/camiseta-laravel-branca.png",
      liked: false,
    },
    {
      id: 3,
      label: "camisa node",
      price: 29.9,
      image: "/assets/products/camiseta-node.png",
      liked: true,
    },
    {
      id: 4,
      label: "camisa react",
      price: 39.9,
      image: "/assets/products/camiseta-react-azul.png",
      liked: true,
    },
  ],
};

