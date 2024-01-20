"use client";

import Image from "next/image";
import { ArrowRight } from "../../icons/icons";

export const Header = ({ name }: { name: string }) => {
  return (
    <header className="header">
      <Image
        src="/assets/hederbg.png"
        alt="shopbg"
        sizes="100%"
        width={0}
        height={0}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
      <div>
        <div className="logo_box">
          <Image
            src="/assets/Meubel House_Logos-05.png"
            alt="House_Logos"
            sizes="100%"
            fill={true}
          />
        </div>
        <p>{name}</p>
        <div className="link_box">
          <span className="prev_page">Home</span>
          <ArrowRight />
          <span className="cur_page">{name}</span>
        </div>
      </div>
    </header>
  );
};
