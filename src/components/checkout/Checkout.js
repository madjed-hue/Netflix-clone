import React, { useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { fetchFromAPI } from "../../helpers";
import Nav from "../Nav";
import "./Checkout.css";
import { withRouter } from "react-router-dom";

function Checkout({ users }) {
  //const [email, setEmail] = useState("");
  const user = useSelector(selectUser);
  //const { cartItems } = useContext(CartContext);
  const dataPrices = [
    {
      priceId: "price_1JnKsTL4nMQz8E5tjrxoLILG",
      quantity: 1,
    },
    {
      price: "price_1JnKsDL4nMQz8E5tcvhAFSrc",
      quantity: 1,
    },
    {
      price: "price_1JnKrjL4nMQz8E5tpCjZ1Mu4",
      quantity: 1,
    },
  ];
  const stripe = useStripe();
  const handleGuestCheckout = async (e) => {
    e.preventDefault();
    const line_items = dataPrices.map((item) => {
      return {
        line_items: [
          {
            price: item.priceId,
            // For metered billing, do not pass quantity
            quantity: item.quantity,
          },
        ],
      };
    });

    const { sessionId } = await fetchFromAPI("create-checkout-session", {
      body: { line_items, customer_email: user.email },
    });
    console.log(sessionId);
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });

    if (error) {
      console.log(error);
    }
  };
  return (
    <div className="checkout">
      <Nav users={users} />
      <div className="checkout__body">
        <form className="checkout__form" onSubmit={handleGuestCheckout}>
          <input type="Email" value={user.email} />
          <div>
            <h4>Standard plan</h4>
            <span> $20.00</span>
          </div>

          <input
            type="hidden"
            name="priceId"
            value="price_1JnKsDL4nMQz8E5tcvhAFSrc"
          />
          <button type="submit" className="chekout__btn">
            subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default withRouter(Checkout);
