import React from "react";
import thankGif from "../assets/thank-you-thanks.gif"; // your gif
import { FaReply } from "react-icons/fa";

function ThankYou() {
  return (
    <section className="py-20 flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-lg p-6 bg-white rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">THANK YOU FOR CONTACTING ME...</h2>
        <div className="mb-4">
          <img src={thankGif} alt="Thank You" className="mx-auto w-48 h-48" />
        </div>
        <a
          href="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mb-3"
        >
          <FaReply /> GO BACK
        </a>
        <h5 className="text-gray-600 mt-3">I will reach you soon...</h5>
      </div>
    </section>
  );
}

export default ThankYou;