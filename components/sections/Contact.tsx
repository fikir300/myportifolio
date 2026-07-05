export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto bg-blue-900/50 border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl">
        <h2 className="text-3xl font-bold text-white text-center mb-10 tracking-tight">/ reach-out</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" />
            <input type="email" placeholder="Email Address" className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none" />
          </div>
          <textarea placeholder="Tell me about your project..." rows={5} className="w-full bg-slate-950 border border-white/10 p-4 rounded-2xl text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all outline-none"></textarea>
          <button className="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-500 hover:shadow-2xl hover:shadow-blue-500/20 transition-all">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}