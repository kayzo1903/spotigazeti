"use client";

import Link from "next/link";
import React, { useState } from "react";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subMessage, setSubmessage] = useState<string>(
    "Get The lastest updates"
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setSubmessage("Thanks for subscribe to our newsletter")
    // You can add your form submission logic here.
  };

  return (
    <div className="w-full px-4 md:px-8 bg-skin2 mt-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-skin2 p-4 sm:p-8">
          <div className="mb-4 sm:mb-8">
            <h2 className="text-center text-xl font-bold text-text sm:text-2xl lg:text-3xl">
              {subMessage}
            </h2>
            <p className="text-center text-text">Sign up for our newsletter</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mb-3 flex w-full max-w-md gap-2 sm:mb-5"
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleInputChange}
              className="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-text transition duration-100 focus:ring"
              required
            />

            <button
              type="submit"
              className="inline-block rounded bg-skin1 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-text focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              Send
            </button>
          </form>

          <p className="text-center text-xs text-gray-400">
            By signing up to our newsletter you agree to our{" "}
            <Link
              href="#"
              className="underline transition duration-100 hover:text-text active:text-text"
            >
              Term of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline transition duration-100 hover:text-text active:text-text"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;
