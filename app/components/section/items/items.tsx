"use client";

import { fetchProducts } from "@/app/lib/features/products/productsSlice";
import { Item } from "./components/item";
import { useAppSelector, useAppDispatch } from "@/app/lib/hooks";
import { useEffect } from "react";
import { Product } from "@/app/lib/features/products/productsSlice";
import {
  selectAllProducts,
  selectAllIds,
} from "@/app/lib/features/products/productsSlice";
import { useGlobalContext } from "@/app/context/globalcontext";

export const Items = () => {
  const { Products } = useGlobalContext();

  if (!Products.length) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div>
      <div className="items_container">
        {Products.length > 0 &&
          Products.map((product, index) => {
            return (
              <div key={index}>
                <Item product={product} />
              </div>
            );
          })}
      </div>
      <div className="pagination_box">
        <button className="box">1</button>
        <button className="box">2</button>
        <button className="box">3</button>
        <button className="next">Next</button>
      </div>
    </div>
  );
};
