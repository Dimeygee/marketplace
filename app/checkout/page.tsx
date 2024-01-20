
'use client'

import { AdvertSBox } from "../components/section/advertsbox";
import { CheckoutInput } from "../components/checkout/input";
import { Header } from "../components/views/header";


export default function Checkout(){



  return (
    <>
      <Header name="Checkout" />
      <div className="checkout_container">
        <div className="form_container">
          <h3>Billing details</h3>
          <form>
            <div className="form_container_inner">
              <div className="name_container">
                <CheckoutInput type="text" label="First Name" />
                <CheckoutInput type="text" label="Last Name" />
              </div>
              <CheckoutInput type="text" label="Company Name (Optional)" />
              <CheckoutInput type="text" label="Last Name" />
              <CheckoutInput type="select" label="Company Name (Optional)" />
              <CheckoutInput type="text" label="Street address" />
              <CheckoutInput type="text" label="Town / City" />
              <CheckoutInput type="select" label="Province" />
              <CheckoutInput type="text" label="ZIP code" />
              <CheckoutInput type="text" label="Phone" />
              <CheckoutInput type="email" label="Email address" />
              <CheckoutInput
                type="text"
                placeholder="Additional information"
                label=""
              />
            </div>
          </form>
        </div>
        <div className="place_order_container">
          <div className="place_order_upper">
            <div className="product_header">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            <div className="product_product">
              <span className="product">Asgaard sofa X 1</span>
              <span className="product_price">Rs. 250,000.00</span>
            </div>
            <div className="product_subtotal">
              <span className="subtotal">Subtotal</span>
              <span className="subtotal_price">Rs. 250,000.00</span>
            </div>
            <div className="product_total">
              <span className="total">Total</span>
              <span className="total_total">Rs. 250,000.00</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="place_order_upper">
            <div className="radiobtnactive">
              <div>
                <input type="radio" id="transfer" name="transfer" />
                <label htmlFor="transfer">Direct Bank Transfer</label>
              </div>
              <div className="paymentinfo">
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order will not be
                shipped until the funds have cleared in our account.
              </div>
            </div>
            <div className="radiobtnactive">
              <div>
                <input type="radio" id="transfer" name="transfer" />
                <label htmlFor="transfer">Direct Bank Transfer</label>
              </div>
            </div>
            <div className="radiobtnactive">
              <div>
                <input type="radio" id="transfer" name="transfer" />
                <label htmlFor="transfer">Cash on Delivery</label>
              </div>
            </div>
            <div className="privacy">
              <span>
                Your personal data will be used to support your experience
                throughout this website, to manage access to your account, and
                for other purposes described in our{" "}
                <span className="privacy_policy"></span>privacy policy.
              </span>
            </div>
            <div className="placeholder_btn_container">
              <button>Place order</button>
            </div>
          </div>
        </div>
      </div>
      <AdvertSBox />
    </>
  );
}
