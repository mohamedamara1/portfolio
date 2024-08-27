"use client";

//import EarthCanvas from "@/components/earth";
import SectionWrapper from "@/hoc/SectionWrapper";
import { slideIn, staggerContainer } from "@/utils/motion";
import { motion } from "framer-motion";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const EarthCanvas = dynamic(() => import("@/components/earth"), {
  loading: () => <div>loading</div>, // Display a spinner while loading
});
const Contact = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`max-w-7xl mx-auto relative z-0`}
  >
    <span className="hash-span" id={"contact"}>
      &nbsp;
    </span>

    <div className="flex flex-row justify-between">
      <form className="flex flex-col gap-8 bg-gradient-to-b from-slate-700 to-gray-800  rounded-lg p-6 w-full max-w-md min-h-96 md:min-w-96">
        <div className="">
          <label
            className="block text-lg font-bold mb-2 text-teal-100"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 text-gray-100"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="">
          <label
            className="block  text-lg font-bold mb-2 text-teal-100"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline bg-slate-700 text-gray-100"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="">
          <label
            className="block  text-lg font-bold mb-2 text-teal-100"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-slate-700 text-gray-100"
            id="message"
            placeholder="Your Message"
            rows={5}
          />
        </div>
        <div className="flex justify-around">
          <button
            className=" bg-teal-800 hover:bg-teal-100 hover:text-teal-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Suspense fallback={<div className="">hi</div>}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </div>
  </motion.section>
);

export default Contact;
