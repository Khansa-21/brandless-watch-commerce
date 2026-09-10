import React from "react";
import "./Page.css";

export const Privacy = () => (
  <main className="legal-page">
    <p className="eyebrow">BRANDLESS / LEGAL</p>
    <h1>Privacy policy</h1>
    <p className="legal-updated">Last updated September 2026</p>
    <h2>What we collect</h2>
    <p>
      When you place an order or contact us, we collect the information needed
      to process your request, including your name, email, phone number, and
      delivery address. We do not sell personal information.
    </p>
    <h2>How we use it</h2>
    <p>
      We use order details to fulfil purchases, provide support, and share
      service updates. Marketing emails are only sent when you choose to receive
      them and you can unsubscribe at any time.
    </p>
    <h2>Questions</h2>
    <p>
      For privacy requests, email{" "}
      <a href="mailto:privacy@brandless.studio">privacy@brandless.studio</a>.
    </p>
  </main>
);

export const Terms = () => (
  <main className="legal-page">
    <p className="eyebrow">BRANDLESS / LEGAL</p>
    <h1>Terms & conditions</h1>
    <p className="legal-updated">Last updated September 2026</p>
    <h2>Orders</h2>
    <p>
      Orders are confirmed after we receive your checkout details. Prices are
      shown in USD and may be updated when a new collection launches.
      Cash-on-delivery availability depends on the delivery destination.
    </p>
    <h2>Delivery and returns</h2>
    <p>
      We aim to dispatch accepted orders within two business days. Unworn items
      may be returned within 14 days of delivery in their original packaging.
      Contact our team before sending a return.
    </p>
    <h2>Care</h2>
    <p>
      Keep watches away from strong magnetic fields, impacts, and prolonged
      water exposure unless the product description states otherwise. The
      included warranty covers manufacturing defects.
    </p>
  </main>
);
