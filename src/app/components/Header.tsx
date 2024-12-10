"use client";
import React, { useState, useEffect } from "react";
import "./Header.css";
import AppBbtn from "./AppBbtn";

export default function Header() {
  const [scroll, setScroll] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call handler right away so state gets updated with initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);
  return (
    <header
      id="header"
      className={`fixed-top d-flex align-items-center ${
        scroll > 100 ? "header-scrolled" : undefined
      }`}
    >
      {/* <h1 className="logo me-auto me-lg-0">
                    <a href="/">SKIT</a>
                </h1> */}
      {open ? (
        <>
          <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
            <a href="#" className="logo me-auto me-lg-0">
              <img
                src="https://www.skit.org.in/assets/images/logo.png"
                alt=""
                className="img-fluid"
              />
            </a>
            <AppBbtn name="Menu" />
          </div>
        </>
      ) : (
        <>
          <div className="container-fluid container-xl d-flex align-items-center p-0 ">
            <a href="#" className="mlogo me-auto me-lg-0">
              <img
                src="https://www.skit.org.in/assets/images/logo.png"
                alt=""
                className="mobile"
              />
            </a>
          </div>
        </>
      )}
    </header>
  );
}
