
import Image from "next/image"
import { Product } from "@/app/lib/features/products/productsSlice"
import Link from "next/link"

export const Item = ({ product}: { product:Product } ) => {

    const image = product?.thumbnail ? product?.thumbnail : ""

    return (
        <Link href={`/${product?.title}`}>
            <div>
                <div className="img_container">
                    <Image src={`${image}`} alt={`${product?.title}`} sizes="100%" fill={true} style={{ objectFit: "contain" }} />
                </div>
                <div className="name_box">{product?.title}</div>
                <div className="price_box">Rs. {product?.price}</div>
            </div>
        </Link>
    )
}