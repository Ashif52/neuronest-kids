# ALCAS x Neuro Nest Kids - Project Documentation

## Project Overview
This project contains the Digital Transformation Proposal for **Neuro Nest Kids**, created by **ALCAS**. It includes a Landing Page Proposal, a functional Website Mockup (with Cart/Checkout), and a CRM Dashboard Mockup.

## Directory Structure

```
/
├── assets/                 # Images, logos, and icons
├── css/                    # Stylesheets
│   ├── proposal.css        # Main styles for the Proposal Page (index.html)
│   ├── style.css           # Reference styles for the Main Website
│   └── footer-styles.css   # Footer specific styles
├── js/                     # JavaScript files
│   └── script.js           # Reference scripts
├── index.html              # [ENTRY POINT] The Digital Proposal Landing Page
├── neuro-nest-kids-website.html # The Target "Neuro Nest Kids" Website (Functional Draft)
├── crm.html                # The CRM Dashboard View
├── cart.html               # Shopping Cart Page
├── checkout-premium.html   # Premium Checkout Page
└── README.md               # This documentation
```

## Key Files & How to Edit

### 1. Proposal Page (`index.html`)
The main presentation page.
- **Theme Colors**: Edited in `css/proposal.css`. Look for `:root` variables.
  - `--p-accent`: Controls the primary Red color (`#dc2626`).
- **Content**: Edit `index.html` directly. The "Live Preview" section logic is at the bottom of the file in the `<script>` tag.

### 2. Main Website (`neuro-nest-kids-website.html`)
The functional mock-up of the client's store.
- **Styling**: Uses embedded CSS (in `<style>` tags) for self-containment.
- **Content**: Edit the HTML directly.
- **Data**: Product prices and details are defined in the embedded JavaScript `products` object.

### 3. CRM Dashboard (`crm.html`)
The backend administration view.
- **Styling**: Uses embedded CSS.
- **Charts**: Uses ApexCharts.js (logic in embedded `<script>`).

### 4. Checkout (`checkout-premium.html`)
The final step of the user journey.
- **Logo**: Updated to use `assets/neuro-logo.png`.
- **Logic**: Contains the "Success Modal" logic in the embedded `<script>`.

## Common Tasks

### Changing the Color Theme
To change the Proposal Red theme:
1. Open `css/proposal.css`.
2. Change `--p-accent` and `--p-accent-light`.

### Updating Prices
To update product prices (e.g., to ₹950):
1. Open `neuro-nest-kids-website.html`.
2. Find the `products` object in the script.
3. Update the `price` fields.

### Modifying the Preview
To change the default preview link:
1. Open `index.html`.
2. Search for the `showPreview()` function.
3. Update the URLs in the `urls` object.

## Clean Up
Unused files (`checkout.html`, `sample-preview.html`) have been removed to keep the workspace clean.
