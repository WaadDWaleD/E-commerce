// "use client";

// import Link from "next/link";
// import React, { useContext, useEffect, useState } from "react";
// import Image from "next/image";
// import logo from "@images/freshcart-logo.svg";
// import { useSession, signOut } from "next-auth/react";
// import { getUserCartSer } from "@/app/_services/cart.services";
// import { CartContext } from "@/app/cart/CartContext";

// export default function Navbar() {
//   const { data: session, status } = useSession();
//   const isAuthenticated = status === "authenticated";
//       const [initialCartCount, setcartCount] = useState(0);
//   const {cartCount} = useContext(CartContext);
//   const [isOpen, setIsOpen] = useState(false);
//     // const [cartCount, setcartCount] = useState(0);

//   const linkClasses =
//     "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent transition-colors duration-300";

"use client";

import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "@images/freshcart-logo.svg";
import { useSession, signOut } from "next-auth/react";
import { getUserCartSer } from "@/app/_services/cart.services";
import { CartContext } from "@/app/cart/CartContext";
import { ShoppingCart } from "lucide-react";


export default function Navbar() {
  const { data: session, status } = useSession();
  const isAuthenticated = status === "authenticated";
  
  const { cartCount, updateCartCount } = useContext(CartContext); // ✅ استخدمي updateCartCount بدل setcartCount
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500 md:dark:hover:bg-transparent transition-colors duration-300";




useEffect(() => {
  async function fetchCartCount() {
    const res = await getUserCartSer();
    updateCartCount(res.numOfCartItems);
  }
  fetchCartCount();
}, []);

    
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src={logo} alt="fresh cart" width={120} height={60} />
        </Link>

        {/* Desktop Menu */}
        {isAuthenticated && (
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-6 font-medium">
              <li><Link href="/" className={linkClasses}>Home</Link></li>
               {/* <li><Link href="/cart" className={linkClasses}>Cart {cartCount || initialCartCount}</Link></li> */}



              <li><Link href="/wishList" className={linkClasses}>Wish list</Link></li>
              <li><Link href="/products" className={linkClasses}>Products</Link></li>
              <li><Link href="/categories" className={linkClasses}>Categories</Link></li>
              <li><Link href="/brand" className={linkClasses}>Brands</Link></li>
              <li><Link href="/allorders?default=true" className={linkClasses}>Orders</Link></li>

              <li className="relative">
  <Link href="/cart" className={linkClasses + " flex items-center relative"}>
    <ShoppingCart className="w-5 h-5 mr-1" />
    Cart
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cartCount}
      </span>
    )}
  </Link>
</li>
            </ul>
          </div>
        )}

        {/* Auth Links */}
        <div className="hidden md:flex space-x-6 font-medium">
          {!isAuthenticated ? (
            <>
              <Link href="/register" className={linkClasses}>Register</Link>
              <Link href="/login" className={linkClasses}>Login</Link>
            </>
          ) : (
            <span
              onClick={() => signOut({ callbackUrl: "/login" })}
              className={linkClasses + " cursor-pointer"}
            >
              Logout
            </span>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "max-h-96 opacity-100 scale-100 translate-y-0"
            : "max-h-0 opacity-0 scale-95 -translate-y-5"
        }`}
      >
        <ul className="flex flex-col space-y-3 font-medium px-4 pb-4">
          {isAuthenticated ? (
            <>
              <li><Link href="/" className={linkClasses}>Home</Link></li>
{/* <li><Link href="/cart" className={linkClasses}>Cart {cartCount || initialCartCount}</Link></li> */}


<li><Link href="/wishList" className={linkClasses}>Wish list</Link></li>
<li><Link href="/products" className={linkClasses}>Products</Link></li>
<li><Link href="/categories" className={linkClasses}>Categories</Link></li>
<li><Link href="/brand" className={linkClasses}>Brands</Link></li>
<li><Link href="/allorders?default=true" className={linkClasses}>Orders</Link></li>

<li className="relative">
  <Link href="/cart" className={linkClasses + " flex items-center relative"}>
    <ShoppingCart className="w-5 h-5 mr-1" />
    Cart
    {cartCount > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
        {cartCount}
      </span>
    )}
  </Link>
</li>

              <li>
                <span
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className={linkClasses + " cursor-pointer"}
                >
                  Logout
                </span>
              </li>
            </>
          ) : (
            <>
              <li><Link href="/register" className={linkClasses}>Register</Link></li>
              <li><Link href="/login" className={linkClasses}>Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
