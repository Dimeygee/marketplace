"use client";

import Link from "next/link";
import { ArrowRight } from "../icons/icons";
import Image from "next/image";
import { AddItem } from "../components/views/additem";
import { useGlobalContext } from "../context/globalcontext";

export default function Page({ params }: { params: { item: string } }) {
  const { Product } = useGlobalContext();

  if (!Product) return <div className="loading">Loading...</div>;

  return (
    <>
      <div className="menu_box">
        <div>
          <Link href="/">Home</Link>
          <ArrowRight />
          <Link href="/shop">Shop</Link>
          <ArrowRight />
          <div className="linev"></div>
          <span>{Product?.title}</span>
        </div>
      </div>
      <div className="items_outer_box">
        <div className="items_inner_box">
          <div className="items_inner_left">
            <div className="inner_left">
              {Product.images.map((image, index) => {
                return (
                  <div key={index}>
                    <Image
                      src={`${image}`}
                      alt={`${Product?.title}`}
                      sizes="100%"
                      fill={true}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                );
              })}
            </div>
            <div className="inner_right">
              <Image
                src={`${Product.thumbnail}`}
                alt={`${Product?.title}`}
                sizes="100%"
                fill={true}
              />
            </div>
          </div>
          <AddItem Product={Product} />
        </div>
      </div>
      <div className="description_box">
        <div className="description_inner">
          <h4 className="decription_title">Description</h4>
          <p>{Product.description}</p>
        </div>
        <div className="description_img_box">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="relatated_pro_box">
        <h4>Related Products</h4>
        <div className="related_items_box"></div>
        <div className="viewmore">
          <button>
            <span className="viewmoretext">View More</span>
            <span className="line"></span>
          </button>
        </div>
      </div>
    </>
  );
}
