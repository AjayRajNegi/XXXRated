import React, { useState, useRef, useEffect } from "react";
import zWhite from "../componenets/images/aerosol1.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
import "../componenets/styles/Products.css";

const Products = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const closeRef = useRef(null);
  const tl = useRef(
    gsap.timeline({ defaults: { duration: 0.8, ease: "expo.inOut" } }),
  );

  useEffect(() => {
    tl.current
      .to(navRef.current, { right: 0 })
      .to(navRef.current, { height: "100vh" }, "-=.1")
      .to(
        "nav ul li a",
        { opacity: 1, pointerEvents: "all", stagger: 0.2 },
        "-=.8",
      )
      .to(closeRef.current, { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to("nav h2", { opacity: 1 }, "-=1")
      .reverse();
  }, []);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
    setIsMenuOpen(!isMenuOpen);
  };
  useGSAP(() => {
    gsap.from(".nav-main-text", 1.8, {
      y: 200,
      ease: "power4.out",
      delay: 1,
      stagger: {
        amount: 0.3,
      },
    });
  });

  return (
    <>
      <div className="navBody">
        <div className="body-container" onClick={toggleMenu}>
          <div className="bars"></div>
        </div>
        <div className="nav-main">
          <div className="nav-main-text font-bold">
            PRODUCTS
            <div className="nav-main-subtext text-xl md:text-6xl">
              Intensify your Taste.
            </div>
          </div>
        </div>
        <nav ref={navRef}>
          <h2>XXXRated</h2>
          <div className="close" ref={closeRef} onClick={toggleMenu}>
            <div></div>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="products text-black">
        <div
          className="products-header justify-between lg:flex"
          style={{ gap: "50vw" }}
        >
          <div className="products-header-first text-left text-2xl md:text-4xl">
            PRODUCTS
          </div>
          <div className="products-header-second xs:text-right pt-6 leading-4 lg:text-left">
            OUR MISSION IS TO FIND CUSTOMIZED SOLUTIONS FOR THE MOST DEMANDING
            CUSTOMERS, DEVELOPING INNOVATIVE IDEAS AND PAYING PARTICULAR
            ATTENTION TO THE ENVIRONMENTAL IMPACTS OF INDUSTRIAL PRODUCTION.
          </div>
        </div>
        {/* Zipline Container */}
        <div className="products-main zipline grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">ZIP LINE</p>
          </div>
          <div className="products-product">
            <p>ZIP-WHITE</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>ZIP-BLUE</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>ZIP-BLACK</p>
            <img src={zWhite} alt="" />
          </div>
        </div>
        {/* No Gas Container */}
        <div className="products-main no-gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">NO-GAS</p>
          </div>
          <div className="products-product">
            <p>CLIMAX NO-GAS</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>BOLD NO-GAS</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>DIRTY NO-GAS</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>HARD NO-GAS</p>
            <img src={zWhite} alt="" />
          </div>
        </div>
        {/* Gas Container */}
        <div className="products-main gas grid grid-cols-1 gap-7 md:grid-cols-3 2xl:grid-cols-4">
          <div className="products-product products-product-header flex items-center justify-center">
            <p className="products-heading text-3xl">GAS</p>
          </div>
          <div className="products-product">
            <p>INTIMIDATE R</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>PLEASURE B</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>NAUGHTY P</p>
            <img src={zWhite} alt="" />
          </div>
          <div className="products-product">
            <p>FOREPLAY G</p>
            <img src={zWhite} alt="" />
          </div>
        </div>

        <hr className="products-hr" />
      </div>
    </>
  );
};

export default Products;
