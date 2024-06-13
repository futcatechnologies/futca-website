"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  activeLink: string;
}

const Header: React.FC<HeaderProps> = ({ activeLink }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [signupDropdownOpen, setSignupDropdownOpen] = useState(false);
  const [signinDropdownOpen, setSigninDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleSignupDropdown = () => {
    setSignupDropdownOpen(!signupDropdownOpen);
  };

  const toggleSigninDropdown = () => {
    setSigninDropdownOpen(!signinDropdownOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 dark:bg-gray-800 shadow  z-20">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            FUT<span className="text-[#ff0000]">CA</span>
          </span>
        </Link>

        <div className="flex items-center">
          <button
            id="menu-toggle"
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        <div
          className={`w-full md:block md:w-auto ${
            mobileMenuOpen ? "" : "hidden"
          }`}
          id="mobile-menu"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link
                href="/"
                className={`block py-2 pr-4 pl-3 ${
                  activeLink === "home"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current={activeLink === "home" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleAboutDropdown}
                  className={`block py-2 pr-4 pl-3 w-full text-left ${
                    aboutDropdownOpen
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  <Link href="/about">About </Link>
                  <FontAwesomeIcon
                    icon={aboutDropdownOpen ? faChevronUp : faChevronDown}
                    className="ml-1 text-sm"
                  />
                </button>
                {aboutDropdownOpen && (
                  <ul className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 shadow-md py-1.5 rounded mt-1 md:mt-0">
                    <li>
                      <Link
                        href="/about/mission"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Mission
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about/vision"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Vision
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 pr-4 pl-3 ${
                  activeLink === "services"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current={activeLink === "services" ? "page" : undefined}
              >
                Services
              </Link>
            </li>
            {/* <li>
              <Link
                href="#"
                className={`block py-2 pr-4 pl-3 ${
                  activeLink === "blog"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current={activeLink === "blog" ? "page" : undefined}
              >
                Blog
              </Link>
            </li> */}
            <li>
              <Link
                href="/contact-us"
                className={`block py-2 pr-4 pl-3 ${
                  activeLink === "contact"
                    ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                }`}
                aria-current={activeLink === "contact" ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleSignupDropdown}
                  className={`block py-2 pr-4 pl-3 w-full text-left ${
                    signupDropdownOpen
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  Signup{" "}
                  <FontAwesomeIcon
                    icon={signupDropdownOpen ? faChevronUp : faChevronDown}
                    className="ml-1 text-sm"
                  />
                </button>
                {signupDropdownOpen && (
                  <ul className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 shadow-md py-1.5 rounded mt-1 md:mt-0">
                    <li>
                      <Link
                        href="/auth/signup/siwes"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Siwes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth/signup/student"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Student
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
            <li>
              <div className="relative">
                <button
                  onClick={toggleSigninDropdown}
                  className={`block py-2 pr-4 pl-3 w-full text-left ${
                    signinDropdownOpen
                      ? "text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      : "text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }`}
                >
                  Signin{" "}
                  <FontAwesomeIcon
                    icon={signinDropdownOpen ? faChevronUp : faChevronDown}
                    className="ml-1 text-sm"
                  />
                </button>
                {signinDropdownOpen && (
                  <ul className="absolute top-full left-0 z-10 bg-white dark:bg-gray-800 shadow-md py-1.5 rounded mt-1 md:mt-0">
                    <li>
                      <Link
                        href="/auth/signin/siwes"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Siwes
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth/signin/student"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                      >
                        Student
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
