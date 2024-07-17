'use client'
import Image from "next/image";
import Header from "@/components/Header";
import React from 'react';
import { useState } from 'react';
import { useEffect } from "react";

export default function Home() {
  const [title, setTitle] = useState();

  useEffect(()=>{},[title])

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    // console.log(e.target[0].value);
    setTitle(e.target[0].value);
    console.log(title)
  }


  return (
    <>
      <Header />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep.
            </p>
          </div>
          <form className="flex lg:w-2/3 w-full flex-row mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end" onSubmit={submitHandle}>
            <div className="relative text-center flex-grow w-full">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Write blog title to generate the blog
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button onClick ={()=>{submitHandle}} className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Submit
            </button>
          </form>

        <h1>{title}</h1>

        </div>
      </section>
    </>
  );
}
