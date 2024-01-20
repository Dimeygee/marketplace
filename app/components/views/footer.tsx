import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div>
        <div className="footer_upper">
          <div className="footer_upper_left">
            <span>
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </span>
          </div>
          <div className="footer_upper_right">
            <div className="Link_container">
                <Link href="/" className="header_link">Links</Link>
                <ul>
                    <Link href="/" >Home</Link>
                    <Link href="/" >Shop</Link>
                    <Link href="/" >About</Link>
                    <Link href="/">Contact</Link>
                </ul>
            </div>
            <div className="Link_container">
                <Link href="/" className="header_link">Help</Link>
                <ul>
                    <Link href="/" >Payment Options</Link>
                    <Link href="/" >Returns</Link>
                    <Link href="/" >Privacy Policies</Link>
                </ul>
            </div>
            <div className="Link_container newsletter">
                <Link href="/" className="header_link">Newsletter</Link>
                <form>
                  <div className="input_container">
                    <input type="email" placeholder="Enter your Email Address" />
                    <button>SUBSCRIBE</button>
                  </div>
                </form>
            </div>
          </div>
        </div>
        <div className="footer_lower">
          <a>2022 Meubel House. All rights reverved</a>
        </div>
      </div>
    </footer>
  );
};
