'use client'

import { FilterIcon, BigRound, ViewList } from "@/app/icons/icons";
import { selectTotal } from "@/app/lib/features/products/productsSlice";
import { useAppSelector } from "@/app/lib/hooks";



export const Filter = () => {

  const Total = useAppSelector(state => selectTotal(state))

  const Skip = useAppSelector((state: { products: { skip: number | null; }; }) => state.products.skip)


  console.log(Total , Skip)

  return (
    <div className="filter">
      <div>
        <div className="left_fil">
          <div className="filterbox">
            <FilterIcon />
            <span>Filter</span>
          </div>
          <div>
            <BigRound />
          </div>
          <div>
            <ViewList />
          </div>
          <div className="linev"></div>
          <div className="res_box">
            <span>{`Showing 1–16 of 32 results`}</span>
          </div>
        </div>
        <div className="right_fil">
          <div>
            <span>Show</span>
          </div>
          <input name="number" type="number" placeholder="16" />
          <div>
            <span>Short by</span>
          </div>
          <input name="default" type="number" placeholder="Default" />
        </div>
      </div>
    </div>
  );
};
