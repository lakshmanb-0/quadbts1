import React from "react";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandTelegram } from "react-icons/tb";

const Footer = () => {
  return (
    <section className="max_width pt-10">
      <footer className="grid sm:grid-cols-3 gap-8">
        {/* left side  */}
        <section className="space-y-3">
          <div className="w-[10rem]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/640px-Logo_NIKE.svg.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 social_icons">
            <span className="">
              <BsTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
            <span>
              <BsInstagram />
            </span>
            <span>
              <BsGithub />
            </span>
          </div>

          <div>
            <h1 className="font-semibold pb-3">
              Sign up for personalized offers
            </h1>
            <div className="flex items-center gap-3 bg-light_grey rounded-full w-fit px-1 mb-4">
              <input
                type="text"
                placeholder="Enter your email"
                className=" outline-none p-3 bg-transparent"
              />
              <span className="p-3 bg-black text-white rounded-full">
                <TbBrandTelegram />
              </span>
            </div>
          </div>
        </section>

        {/* right side  */}
        <section className="grid grid-cols-2 sm:grid-cols-4 col-span-2 footer_right gap-4">
          <div>
            <h1>Linkes</h1>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Blog</li>
              <li>Category</li>
            </ul>
          </div>
          <div>
            <h1>Features</h1>
            <ul>
              <li>About Us</li>
              <li>Instructions</li>
              <li>Catelog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h1>Company</h1>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h1>Legal & Terms</h1>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Security</li>
            </ul>
          </div>
        </section>

        {/* copyright  */}
      </footer>
      <div className="w-full py-3 border-t border-grey text-center text-grey ">
        &#169; Kick X 2023. All rights reserved
      </div>
    </section>
  );
};

export default Footer;
