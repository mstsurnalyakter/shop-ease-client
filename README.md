# ShopEase Frontend

- **Live Site URL:** [ShopeEase]()

- **Server Site Repository:** [Server]()

## Description
ShopEase Frontend is a React application that provides a user interface for browsing and searching products on a shopping platform. It includes features such as filtering, sorting,searching, and pagination.


## Features
- **Advanced Search:**  The user can search for a product by Product Name.
- **Filter:**  The user can filter for a product by Brand Name ,Category Name, Price Range.
- **Sort:**  The user can sort for the products based on Price and Date Added.
.

## Getting Started


### Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB
- npm or yarn

## Installation

1. **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**
    ```bash
    cd shop-ease-client
    ```

3. **Install dependencies:**
    ```bash
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    VITE_APIKEY=
    VITE_AUTHDOMAIN=
    VITE_PROJECTID=
    VITE_STORAGEBUCKET=
    VITE_MESSAGINGSENDERID=
    VITE_APPID=
    VITE_IMGBB_API_KEY=
    VITE_STRIPE_PUBLISHABLE_KEY=
    VITE_API_URL=
    ```

## **Start the development server:**
    ```bash
    npm run dev
    ```

## Available Scripts

- `npm run dev` - Start the development server.
- `npm run build` - Build the project for production.
- `npm run preview` - Preview the production build.
