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
  product: {
    id: 1,
    label: "Camisa PHP",
    images: [
      "/assets/products/camiseta-php.png",
      "/assets/products/camiseta-laravel-branca.png",
      "/assets/products/camiseta-php.png",
    ],
    price: 19.9,
    liked: false,
    description:
      " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum ",
  },
};

