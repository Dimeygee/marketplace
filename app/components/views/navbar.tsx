"use client";

import Link from "next/link";
import { Profile, Search, Like, Cart, CloseX } from "../../icons/icons";
import { ShoppingCart } from "./shoppingcart/shoppingcart";
import { useState } from "react";
import { useAppSelector } from "@/app/lib/hooks";
import { HamburgerMenu } from "../../icons/icons";
import { useGlobalContext } from "@/app/context/globalcontext";

export const Navbar = () => {
  const [open, isOpen] = useState(false);

  const { isOpenMenu, setOpenMenu } = useGlobalContext();

  const handleClick = () => isOpen(true);

  const CartItems = useAppSelector((state) => state.cart);


  return (
    <>
      {open && <ShoppingCart isOpen={isOpen} />}
      <nav className="navbar">
        <div style={{ width: "246px" }}></div>
        <div className="hamburgermenu" onClick={() => setOpenMenu(!isOpenMenu)}>
          <HamburgerMenu />
        </div>
        {isOpenMenu && (
          <div className="links_container">
            <span onClick={() => setOpenMenu(!isOpenMenu)}>
              <CloseX />
            </span>
            <ul className="">
              <li onClick={() => setOpenMenu(!isOpenMenu)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setOpenMenu(!isOpenMenu)}>
                <Link href="/">Shop</Link>
              </li>
              <li onClick={() => setOpenMenu(!isOpenMenu)}>
                <Link href="/">About</Link>
              </li>
              <li onClick={() => setOpenMenu(!isOpenMenu)}>
                <Link href="/" className="contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
        <div className="links_container desktop">
          <span>
            <CloseX />
          </span>
          <ul className="">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Shop</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/" className="contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="icons_container">
          <Profile />
          <Search />
          <Like />
          {CartItems.length > 0 ? (
            <div
              className="data-items"
              data-items={CartItems.length}
              onClick={handleClick}
            >
              <Cart />
            </div>
          ) : (
            <div onClick={handleClick}>
              <Cart />
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
