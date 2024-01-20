import { Product } from "@/app/lib/features/products/productsSlice";
import { Star } from "@/app/icons/icons";

import { Size } from "../section/items/components/size";
import { useState } from "react";
import { useAppDispatch } from "@/app/lib/hooks";
import { useAppSelector } from "@/app/lib/hooks";
import { incrementQuantity, decrementQuantity, addCart, updateCart } from "@/app/lib/features/cart/cartSlice";


interface CartItem {
  id: number;
  productName: string;
  quantity: number;
  price: number | null;
  image:string
}



export const AddItem = ({ Product }: { Product: Product }) => {
  const dispatch = useAppDispatch();
  

  const [productName, setProductName] = useState<string>(Product.title);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddCartItem = () => {
    const newItem: CartItem = {
      id: Product.id,
      productName,
      quantity,
      price: Product.price, 
      image: Product.thumbnail
    };

    dispatch(addCart(newItem))

    setProductName("");
    setQuantity(1);
  };

  const handleIncrementQuantity = () => {
    setQuantity((previosState) => {
        if(previosState >= 9) return 9
        return previosState + 1
    })
  };

  const handleDecrementQuantity = () => {
    setQuantity((previosState) => {
        if(previosState <= 1) return 1
        return previosState - 1
    })
  };

  return (
    <div className="items_inner_right">
      <h3 className="item_name">{Product.title}</h3>
      <span className="item_price">Rs. {Product.price}</span>
      <div className="review_rating_box">
        <div className="rating_box">
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
        <div className="demacation"></div>
        <span className="review">{Product.rating} Customer Review</span>
      </div>
      <p>{Product.description}</p>
      <div className="size_box">
        <div>
          <span>Size</span>
        </div>
        <div className="size_box_inner">
          <Size active={true} name="L" />
          <Size active={false} name="XL" />
          <Size active={false} name="XS" />
        </div>
      </div>
      <div className="color_box">
        <div>
          <span>Color</span>
        </div>
        <div className="color_box_inner">
          <div className="color_1"></div>
          <div className="color_2"></div>
          <div className="color_3"></div>
        </div>
      </div>
      <div className="quantity_container">
        <div className="quantity_box">
          <span onClick={handleDecrementQuantity}>-</span>
          <div>{quantity}</div>
          <span onClick={handleIncrementQuantity}>+</span>
        </div>
        <div className="quantity_btn" onClick={handleAddCartItem}>Add To Cart</div>
      </div>
      <div className="divider"></div>
      <div className="properties_container">
        <div>SKU</div>
        <div>:</div>
        <div>SS001</div>
        <div>Category</div>
        <div>:</div>
        <div>Sofas</div>
        <div>Tags</div>
        <div>:</div>
        <div>Sofa, Chair, Home, Shop</div>
        <div>Share</div>
        <div>:</div>
        <div></div>
      </div>
    </div>
  );
};
