# E-Commerce Web Application

## Features

This E-commerce website project includes several key features that enhance the user experience and facilitate easy product management:

1. **User Authentication**

   - Secure login and registration functionality, allowing users to sign up, log in, and manage their accounts.

2. **Product Management**

   - Implemented CRUD (Create, Read, Update, Delete) operations for managing products, including the ability to add, view, update, and delete product listings.

3. **Search Functionality**

   - Real-time product search, enabling users to quickly find products based on their search queries.

4. **Responsive Design**

   - A fully responsive design built with **TailwindCSS**, ensuring a seamless user experience across various devices, from desktop to mobile.

5. **Dynamic Routing**

   - Utilized **Next.js** for dynamic page routing, creating individual pages for products with detailed descriptions, images, and prices.

6. **State Management**

   - Efficient state management using **React Hooks**, ensuring smooth and dynamic updates to the UI without unnecessary reloads.

7. **Server-Side Integration**

   - Integrated the frontend with a Node.js backend to handle API requests for retrieving and managing data (products, users, etc.).

8. **Admin Features**

   - Admin users have the ability to manage products, including deleting listings and managing user access.

9. **Modern Tech Stack**

   - Built using **Next.js**, **React**, **TailwindCSS**, and **Node.js**, ensuring a modern, efficient, and scalable architecture.

10. **Optimized Code**

- Focused on clean, maintainable, and scalable code with reusable components, adhering to best practices in software development.

These features contribute to a fully functional and user-friendly e-commerce platform.

## To-Do List

### 1. Improving the Top Menu (Navbar) Design - **Completed**

- Changing the background color to lighter tones.
- Applying modern fonts (e.g., Roboto, Inter, Open Sans).
- Adding hover effects to menu items.
- Adding a search bar.

### 2. Search Box

- A **search bar** will be added to the navbar, enabling users to search for products.
- When a search is performed, a query will be sent to the API to retrieve matching products.

### 3. Login / Register Pages

- Improving the login and registration pages for users.
- Adding a "Forgot Password" link and integrating with a password reset page.
- Redirecting users to the homepage after successful login.

### 4. Products Page

- A page will be designed to list products.
- Users will be able to view products and access product details.

### 5. Cart Feature

- Users will be able to add selected products to the cart and proceed to checkout.
- Cart information, including the total amount, will be displayed.

### 6. User Profile Page

- Users will be able to view and edit their profiles.
- Form fields will be provided for profile updates.

### 7. Footer Design

- A footer will be added at the bottom of the page, containing contact information, social media links, and legal information.

### 8. API Integration

- REST APIs will be created for products, users, and cart operations.
- User registration, login, logout, and password reset functionality will be implemented.

## Technologies

- Next.js
- Tailwind CSS
- MongoDB
- bcryptjs (for password hashing)
- React Hooks
- JavaScript

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
