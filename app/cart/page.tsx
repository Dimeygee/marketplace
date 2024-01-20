"use client";

import { Header } from "../components/views/header";
import { AdvertSBox } from "../components/section/advertsbox";
import { ArrowRight, Trash } from "../icons/icons";
import { useAppSelector, useAppDispatch } from "../lib/hooks";
import React from "react";
import { removeCart } from "../lib/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";

export default function Cart() {
  const CartItems = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const RemoveItem = (id: number) => dispatch(removeCart(id));

  return (
    <>
      <div className="desktop_cart">
        <Header name="Cart" />
        <div className="cart_list_container">
          <div className="cart_info">
            <div className="cart_info_header">
              <div className="cart_image"></div>
              <div className="cart_product">Product</div>
              <div className="cart_price">Price</div>
              <div className="cart_quantity">Quantity</div>
              <div className="cart_subtotal">Subtotal</div>
              <div className="cart_trash"></div>
            </div>
            <div className="cart_info_main">
              {CartItems.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="cart_image">
                      <Image
                        src={`${item.image}`}
                        alt={`${item.productName}`}
                        sizes="100%"
                        fill={true}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="cart_product">{item.productName}</div>
                    <div className="cart_price">Rs.{item.price}</div>
                    <div className="cart_quantity">
                      <input type="number" value={item.quantity} />
                    </div>
                    <div className="cart_subtotal">
                      Rs.
                      {item.price && item.quantity * item.price}
                    </div>
                    <div
                      className="cart_trash"
                      onClick={() => RemoveItem(item.id)}
                    >
                      <Trash />
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="cart_total">
            <div className="cart_title">
              <span>Cart Totals</span>
            </div>
            <div className="cart_main_info">
              <div className="cart_upper_info">
                <span className="subtotal_info">Subtotal</span>
                <span className="amount_info">Rs. 250,000.00</span>
              </div>
              <div className="cart_lower_info">
                <span className="total_info">Total</span>
                <span className="total_amount_info">Rs. 250,000.00</span>
              </div>
            </div>
            <button>Check Out</button>
          </div>
        </div>
        <AdvertSBox />
      </div>
      <div className="mobilecart">
        <div className="link_container">
          <Link href="/">Home</Link>
          <ArrowRight />
          <span>Cart</span>
        </div>
        {CartItems.map((item, index) => {
          return (
            <div className="cart_item" key={index}>
              <div className="item_image"></div>
              <div className="item_content_container">
                <div className="content_name_price_quantity">
                  <p>{ item.productName }</p>
                  <p>Rs. { item.price }</p>
                  <input type="number" value={item.quantity} />
                </div>
                <span onClick={() => RemoveItem(item.id)} >
                  <Trash />
                </span>
              </div>
            </div>
          );
        })}
        {CartItems.length > 0 && (
          <div className="checkout_container">
            <div className="total">
              <small>Total</small>
              <p>Rs. 250,000.00</p>
            </div>
            <Link href="/checkout">
              <button>Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
