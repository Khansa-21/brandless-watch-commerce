# Brandless Watches

**Suggested repository name:** `brandless-watch-commerce`

**GitHub description:** A polished React/Vite watch-commerce frontend with real product imagery, smart catalog filters, persistent cart, responsive checkout, COD confirmation, and WhatsApp support handoff.

Brandless is a frontend ecommerce project for a watch and everyday-timepieces store. It demonstrates the shopping experience a client would expect before a backend is connected: discovery, search, filters, cart persistence, checkout, order confirmation, and support handoffs.

## Why this project is different

Choosing a watch online is often difficult because shoppers have to compare scattered details such as movement type, color, style, and intended use. Brandless addresses that real-world problem with a focused catalog, meaningful product metadata, category/brand/color filters, price sorting, clear product cards, and a checkout flow that keeps the purchase context visible.

The project is intentionally watch-first: classic watches, luxury pieces, chronographs, smartwatches, digital watches, automatic watches, jewelry watches, and supporting accessories are all organized as one coherent collection.

## Frontend-only projects are valid

Yes. A frontend-only ecommerce app is a legitimate portfolio and client-demo project. It proves layout, responsive design, information architecture, interaction design, product discovery, cart behavior, form UX, accessibility basics, and integration points without exposing real credentials or pretending a payment system is live.

This project currently uses LocalStorage for the cart and native browser form validation. It does not persist orders to a server, charge cards, send email from a server, or manage inventory. Those are the next production integrations.

## Run locally

```bash
npm install
npm run dev
```

The production checks are:

```bash
npm run lint
npm run build
```

## WhatsApp support setup

The UI supports two WhatsApp use cases:

1. Checkout creates a prefilled order message containing the products, quantities, customer details, address, and total.
2. The global footer and Contact page expose a support chat link.

For a client deployment, the client provides their WhatsApp Business number in international format. Create a local `.env` file from `.env.example`:

```env
VITE_WHATSAPP_NUMBER=923001234567
```

Use digits only, including country code. The app then generates a direct `https://wa.me/<number>` link. Without this value, the app deliberately shows a configuration message and uses a generic share fallback; it does not invent a client phone number.

Important: this is a browser handoff, not a WhatsApp backend or WhatsApp Business API integration. A production system that records conversations, sends automated messages, or handles agent routing needs a secure server and the official WhatsApp Business Platform. Never place access tokens in the React app.

## Email support

The Contact form validates its fields and opens a prefilled `mailto:` draft to `hello@brandless.studio`. That works through the visitor's installed/default mail client. Reliable server-side delivery, ticket creation, autoresponders, and delivery tracking require a backend email provider.

## Data flow

- `src/data/products.json` is the catalog source.
- `ProductProvider` exposes products to the UI.
- `ProductCatalog` derives search, category, brand, color, and price-sort results.
- `Cartcontext` merges duplicate items and persists the cart in LocalStorage.
- Checkout reads cart state, validates shipping data, and creates COD confirmation or a WhatsApp order message.
- `src/config/support.js` centralizes support email and WhatsApp URL generation.

## Project structure

- `src/Home.jsx`: editorial storefront homepage
- `src/components/catalog/`: product grid and filters
- `src/components/cart/`: persistent cart interface
- `src/components/checkout/`: shipping form and order summary
- `src/components/footer/`: global footer and support links
- `src/pages/`: About, Contact, Privacy, and Terms
- `public/`: local product photography

## Next production phase

Add a backend for order records, inventory, authentication, admin catalog management, transactional email, shipping-rate calculation, payment processing, and official WhatsApp Business API messaging. Replace demo product copy/prices with verified client inventory and confirm image usage rights before launch.
