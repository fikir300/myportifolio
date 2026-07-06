"use client";
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // Replace "mbdvblvr" with your actual Formspree ID if it changes
  const [state, handleSubmit] = useForm("mbdvblvr");

  if (state.succeeded) {
    return (
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-blue-900/50 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent! 🚀</h2>
          <p className="text-blue-200">Thanks for reaching out. I'll get back to you as soon as possible.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-blue-900/50 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10 tracking-tight">/ reach-out</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div>
              <input 
                id="full-name"
                type="text" 
                name="name"
                required
                placeholder="Your Name" 
                className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" 
              />
              <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 ml-2" />
            </div>

            {/* Email Input */}
            <div>
              <input 
                id="email"
                type="email" 
                name="email"
                required
                placeholder="Email Address" 
                className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-2" />
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <textarea 
              id="message"
              name="message"
              required
              placeholder="Tell me about your project..." 
              rows={5} 
              className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-2" />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting}
            className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}