import React from "react";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function ThankYou() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-mesh px-4 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/20 rounded-full blur-[120px] animate-pulse"></div>

      <div className="glass max-w-lg w-full p-8 md:p-12 rounded-3xl text-center relative z-10 animate-reveal">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent-primary/20 rounded-full blur-xl animate-ping"></div>
            <FaCheckCircle className="text-accent-primary text-7xl relative z-10" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Message <span className="text-gradient">Received!</span>
        </h2>
        
        <p className="text-text-secondary text-lg mb-10 leading-relaxed">
          Thank you for reaching out. I've received your message and will get back to you as soon as possible.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-3 w-full py-4 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl"
          >
            <FaArrowLeft size={14} /> Back to Home
          </Link>
          
          <p className="text-text-secondary text-sm font-medium pt-4">
            I usually respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-secondary/10 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-10 left-10 w-24 h-24 bg-accent-primary/10 rounded-full blur-2xl animate-bounce delay-700"></div>
    </section>
  );
}

export default ThankYou;