"use client";

import Image from "next/image";

import { HeaderIcon } from "./header-icon";
import Link from "next/link";
import { use, useState } from "react";
import { HeaderSearch } from "./header-search";

type MenuItem = {
  label: string;
  href: string;
};

export function Header() {
  const menu: MenuItem[] = [
    { label: "Camisa", href: "/categories/camisa" },
    { label: "Kits", href: "/categories/kits" },
  ];

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className=" bg-black text-white text-center p-4">
        <h1>
          <strong>FRETE GRÀTIS</strong> NA COMPRA ACIMA DE R$ 99,00.
        </h1>
      </div>
      <div className=" w-full max-w-6xl mx-auto p-6">
        <div className="flex items-center ">
          <div className="w-32">
            <Link href={"/"}>
              <Image
                src="/assets/ui/streetlogo.png"
                alt="Logo"
                width={120}
                height={40}
              />
            </Link>
          </div>
          <div className="flex-1">
            <div className="w-full hidden md:flex items-center px-6 gap-6">
              <div className="flex-1 ">
                <ul className="flex gap-10">
                  {menu.map((item) => (
                    <li
                      key={item.label}
                      className="font-medium text-lg text-gray-600"
                    >
                      <Link key={item.label} href={item.href}>
                        <div>{item.label}</div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-80">
                <HeaderSearch />
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <Link href={"/my-orders"}>
              <HeaderIcon src="/assets/ui/user-line.png" alt="Perfil" />
            </Link>
            <Link href={"/cart"}>
              <HeaderIcon
                src="/assets/ui/shopping-bag-4-line.png"
                alt="Carrinho"
              />
            </Link>
            <div
              className="md:hidden"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <HeaderIcon
                src="/assets/ui/menu-line.png"
                alt="Menu"
                selected={menuOpened}
                srcSelected="/assets/ui/menu-line-white.png"
              />
            </div>
          </div>
        </div>
      </div>
      {menuOpened && (
        <div className="md:hidden pb-6">
          {menu.map((item) => (
            <Link key={item.label} href={item.href}>
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <div className="font-medium text-lg text-gray-600">
                  {item.label}
                </div>
                <Image
                  src="/assets/ui/arrow-up-right.png"
                  alt="Ir a categoria"
                  width={24}
                  height={24}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="p-6 pt-0 md:hidden">
        <HeaderSearch />
      </div>
    </header>
  );
}

