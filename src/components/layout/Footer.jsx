import React, { useState } from "react";
import { Link } from "react-router";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter, FaPinterestP, FaInstagram } from "react-icons/fa";

const footerLinks = [
  {
    title: "My Account",
    links: [
      { label: "My Account", href: "/" },
      { label: "Order History", href: "/" },
      { label: "Shopping Cart", href: "/", bold: true },
      { label: "Wishlist", href: "/" },
    ],
  },
  {
    title: "Helps",
    links: [
      { label: "Contact", href: "/" },
      { label: "FAQs", href: "/" },
      { label: "Terms & Condition", href: "/" },
      { label: "Privacy Policy", href: "/" },
    ],
  },
  {
    title: "Proxy",
    links: [
      { label: "About", href: "/" },
      { label: "Shop", href: "/" },
      { label: "Product", href: "/" },
      { label: "Track Order", href: "/" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Fruit & Vegetables", href: "/" },
      { label: "Meat & Fish", href: "/" },
      { label: "Bread & Bakery", href: "/" },
      { label: "Beauty & Health", href: "/" },
    ],
  },
];

const socialLinks = [
  { icon: TiSocialFacebook, href: "/" },
  { icon: FaTwitter, href: "/" },
  { icon: FaPinterestP, href: "/" },
  { icon: FaInstagram, href: "/" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim()) {
      alert(`Subscribed: ${email}`);
      setEmail("");
    }
  };

  return (
    <section>
      {/* ── Newsletter Strip ── */}
      <div className="bg-gray-100 border-b-2 border-gray-200">
        <div className="container mx-auto px-4 md:px-20 py-7 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left Text */}
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-1">
              Subscribe our Newsletter
            </h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Pellentesque eu nibh eget mauris congue mattis nec tellus.
              Phasellus imperdiet elit eu magna.
            </p>
          </div>

          {/* Right: Input + Social */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Email Input */}
            <div className="flex items-center bg-white border border-gray-200 rounded-full px-5 py-1 gap-2 focus-within:border-green-500 transition-colors">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                className="outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400 w-48"
              />
              <button
                onClick={handleSubscribe}
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-bold uppercase tracking-wider rounded-full px-5 py-2.5 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-2">
              {socialLinks.map(({ icon: Icon, href }, i) => (
                <Link
                  key={i}
                  to={href}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-green-500 hover:text-green-600 hover:bg-green-50 transition-all"
                >
                  <Icon className="text-base" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="bg-[#1a1a2e]">
        <div className="container mx-auto px-4 md:px-20">

          {/* Main Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pt-14 pb-12 border-b border-white/10">

            {/* Brand Column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="flex items-center gap-2 mb-4">
                <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4C12 4 6 10 6 18c0 6 4 11 10 13" stroke="#00b207" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M20 4c8 0 14 6 14 14 0 6-4 11-10 13" stroke="#6fc76f" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M14 22c2-6 8-10 14-8" stroke="#00b207" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="18" r="3" fill="#00b207" />
                </svg>
                <span className="text-white font-bold text-2xl tracking-tight">
                  Ecobazar
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed mb-5 max-w-[220px]">
                Morbi cursus porttitor enim lobortis molestie. Duis gravida
                turpis dui, eget bibendum magna congue nec.
              </p>

              {/* Contact */}
              <div className="flex items-center gap-2 flex-wrap">
                <a
                  href="tel:2195550114"
                  className="text-green-500 font-semibold text-sm border-b border-green-500 hover:opacity-75 transition-opacity"
                >
                  (219) 555-0114
                </a>
                <span className="text-gray-500 text-sm">or</span>
                <a
                  href="mailto:Proxy@gmail.com"
                  className="text-green-500 font-semibold text-sm border-b border-green-500 hover:opacity-75 transition-opacity"
                >
                  Proxy@gmail.com
                </a>
              </div>
            </div>

            {/* Link Columns */}
            {footerLinks.map((col) => (
              <div key={col.title}>
                <h5 className="text-white font-bold text-sm uppercase tracking-widest mb-4 pb-2.5 border-b-2 border-green-600 w-fit">
                  {col.title}
                </h5>
                <ul>
                  {col.links.map((link) => (
                    <li key={link.label} className="pb-2.5">
                      <Link
                        to={link.href}
                        className={`text-sm transition-all hover:text-green-500 hover:pl-1 ${
                          link.bold
                            ? "text-gray-300 font-semibold"
                            : "text-gray-400 font-normal"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Bottom Bar ── */}
          <div className="flex flex-col md:flex-row items-center justify-between py-5 gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Ecobazar eCommerce © 2021. All Rights Reserved
            </p>

            {/* Payment Badges */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <span className="bg-[#1e1e32] border border-white/10 rounded px-3 py-1.5 text-gray-300 text-xs font-bold tracking-wide hover:border-green-500 transition-colors cursor-default">
                Apple Pay
              </span>
              <span className="bg-[#1e1e32] border border-white/10 rounded px-3 py-1.5 text-blue-400 text-xs font-bold tracking-widest hover:border-green-500 transition-colors cursor-default">
                VISA
              </span>
              <span className="bg-[#1e1e32] border border-white/10 rounded px-3 py-1.5 text-xs font-bold hover:border-green-500 transition-colors cursor-default flex gap-0.5">
                <span className="text-orange-400">DISC</span>
                <span className="text-yellow-400">OVER</span>
              </span>
              <span className="bg-[#1e1e32] border border-white/10 rounded px-3 py-1.5 text-xs font-bold hover:border-green-500 transition-colors cursor-default flex items-center">
                <span className="w-4 h-4 rounded-full bg-red-600 inline-block" />
                <span className="w-4 h-4 rounded-full bg-yellow-400 inline-block -ml-2" />
              </span>
              <span className="bg-[#1e1e32] border border-white/10 rounded px-3 py-1.5 text-gray-300 text-xs font-bold hover:border-green-500 transition-colors cursor-default">
                🔒 Secure Payment
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Footer;