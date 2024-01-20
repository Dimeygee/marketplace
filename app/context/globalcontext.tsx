"use client";

import { Product } from "../lib/features/products/productsSlice";

import React, {
  createContext,
  useState,
  useContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { selectAllProducts } from "../lib/features/products/productsSlice";
import { fetchProducts } from "../lib/features/products/productsSlice";
import { usePathname } from "next/navigation";
import { selectById } from "../lib/features/products/productsSlice";

export const GlobalContext = createContext<{
  isOpenMenu: boolean;
  setOpenMenu: Dispatch<SetStateAction<boolean>>;
  Products: Product[];
  Product: Product;
}>({
  isOpenMenu: false,
  setOpenMenu: () => {},
  Products: [],
  Product: {
    id: 0,
    title: "",
    description: "",
    price: null,
    discountPercentage: null,
    rating: null,
    stock: null,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
});

export const GlobalContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const path = usePathname().split("/")[1];

  const title = decodeURIComponent(path);

  const dispatch = useAppDispatch();
  const Products = useAppSelector((state) => selectAllProducts(state));
  const Product = useAppSelector((state: any) => selectById(state, title));

  useEffect(() => {
    dispatch(fetchProducts({ skip: 0 }));
  }, [Products, Product]);


  return (
    <GlobalContext.Provider
      value={{ isOpenMenu, setOpenMenu, Products, Product }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { isOpenMenu, setOpenMenu, Product, Products } =
    useContext(GlobalContext);
  return {
    isOpenMenu,
    setOpenMenu,
    Product,
    Products,
  };
};
