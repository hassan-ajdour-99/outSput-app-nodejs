import React from "react";
import classes from "./ShippingCard.module.css";

function ShippingCard() {
  return (
    <div className={classes.container}>
      <h3>
        Shipping <span> Process </span>
      </h3>
      <div className={classes.content}>
        <div className={classes.card}>
          <img src="./images/contact.png" alt="img" />
          <h3> Order </h3>
        </div>
        <div className={classes.card}>
          <img src="./images/shipping.png" alt="img" />
          <h3> Shipping </h3>
        </div>
        <div className={classes.card}>
          <img src="./images/return.png" alt="img" />
          <h3> Return </h3>
        </div>
        <div className={classes.card}>
          <img src="./images/gift.png" alt="img" />
          <h3> Gift & Discount </h3>
        </div>
      </div>
    </div>
  );
}

export default ShippingCard;
