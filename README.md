# PaperWords
This project is a basic e-commerce application built using modern web technologies including React, TypeScript, Tailwind CSS, Redux Toolkit, and Redux Persist. It features product pages, a shopping cart, a wishlist, and a checkout system. The app does not have a backend, and data is served through a static JSON file.

[Deployed Link](paper-works.netlify.app)

# Technologies Used
React: For building the user interface.
TypeScript: To provide static typing and improve code quality.
Tailwind CSS: For styling the application with a utility-first approach.
Redux Toolkit: To manage global state such as the cart, wishlist, and products.
Redux Persist: To persist the Redux store so that the state is maintained across page refreshes.

# Features
1. **Product Pages:** 
Displays detailed information about each product such as name, price, description, image, and ratings.
Allows users to view individual product details.
2. **Cart:**
Users can add products to the cart.
Cart allows users to adjust product quantities.
Displays the total price of items in the cart.
Cart contents are persisted using Redux Persist, so they remain intact after page refreshes.
3. **Wishlist:**
Users can add or remove products from their wishlist.
The wishlist is persisted across page reloads.
4. **Checkout:**
Simulates a checkout process.
Displays a summary of the items being purchased and the total cost.
Setup Instructions

# Prerequisites

Node.js and npm/yarn installed.
Basic understanding of React, TypeScript, and Redux.

### Clone the repository

```
git clone https://github.com/tushar-cero/PaperWorks.git
```

Run the command above to clone the repository. Just make sure you have git installed in your system beforehand.

### Install dependencies

```
npm install
```

Download node modules required to run the repository. Just make sure you have Node installed in your system beforehand.

### Run the repository

```
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.