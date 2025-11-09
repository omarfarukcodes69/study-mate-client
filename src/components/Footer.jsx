import React from "react";
import footerLogo from "../assets/logo.png";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const user = {
    name: "omar",
    email: "hdfjhf",
  };
  // ===my Navlinks ===
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find-partners"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          Find Partners
        </NavLink>
      </li>

      {user && (
        <>
          <li>
            <NavLink
              to="/create-profile"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
              }
            >
              Create Partner Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-connections"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
              }
            >
              My Connections
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <footer className="footer sm:footer-horizontal bg-secondary  py-10 px-20">
      {/* === title === */}
      <aside className="flex gap-10 items-center justify-between">
        <figure className="w-40 h-28 rounded-4xl bg-base-200">
          <img className="object-cover " src={footerLogo} alt="" />
        </figure>
        <section>
          <h1 className="text-2xl text-base-200 font-bold "> Study Mate</h1>
          <h3 className="text-lg text-primary-content">
            {" "}
            Find Your Perfect best Study Partner
          </h3>
          <p className="text-lg text-primary-content font-bold">Since 2025</p>
        </section>
      </aside>
      {/* ===navlivks === */}
      <aside>
        <ul>{Links}</ul>
      </aside>
      {/* ==social=== */}
      <aside>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4 justify-center items-center text-2xl">
          <Link>
            <FaFacebook />
          </Link>
          <Link>
            <FaGithub />
          </Link>
          <Link>
            <FaXTwitter />
          </Link>
        </div>
        <p className="text-primary-content">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
