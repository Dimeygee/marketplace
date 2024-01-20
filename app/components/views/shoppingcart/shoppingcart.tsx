"use client";

import { ShoppingCart as Cart, CloseSolid } from "@/app/icons/icons";
import { Dispatch, SetStateAction } from "react";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import Image from "next/image";
import { removeCart } from "@/app/lib/features/cart/cartSlice";
import Link from "next/link";

export const ShoppingCart = ({
  isOpen,
}: {
  isOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleClick = () => isOpen(false);

  const CartItems = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch()

  const RemoveItem = (id: number) => dispatch(removeCart(id))

  return (
    <div className="shoppingcartModal">
      <div className="shopiingcart">
        <div className="cart_box">
          <div className="cart_header">
            <h4>Shopping Cart</h4>
            <div className="cart_icon" onClick={handleClick}>
              <Cart />
            </div>
          </div>
          <div className="divider_box">
            <div className="divider"></div>
          </div>
          {CartItems.map((item, index) => {
            return (
              <div className="cartItem_box" key={index}>
                <div className="cart_item">
                  <div className="item_image_box">
                    <Image
                      src={`${item.image}`}
                      alt={`${item.productName}`}
                      sizes="100%"
                      fill={true}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="item_box_inner">
                    <div className="item_name_box">
                      <h5>{item.productName}</h5>
                      <div className="item_count_price">
                        <span className="quantity">{item.quantity}</span>
                        <span className="x">X</span>
                        <span className="amount">Rs. {item.price}</span>
                      </div>
                    </div>
                    <span className="closesolid" onClick={() => RemoveItem(item.id)}>
                      <CloseSolid />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="subtotal_container">
            <div className="subtotal_total">
              <div className="subtotal_total_total">
                <span>Subtotal</span>
              </div>
              <div className="subtotal_total_amount">
                <span>
                  <div>
                    <span>Rs. 250,000.00</span>
                  </div>
                </span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="checkout_cart_box">
              <Link href="/cart" onClick={handleClick}><button>View Cart</button></Link>
              <Link href="/checkout" onClick={handleClick}><button>Checkout</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
