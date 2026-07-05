"use client";
import CertificateCard from "../ui/CertificateCard";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udemy / Meta",
    date: "Dec 2025",
    link: "#" // Link to your credential
  },
  {
    title: "Advanced React Patterns",
    issuer: "Frontend Masters",
    date: "Aug 2025",
    link: "#"
  },
  {
    title: "Python for Data Science",
    issuer: "IBM / Coursera",
    date: "May 2025",
    link: "#"
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-10">
      <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
        <h2 className="text-blue-600 dark:text-blue-400 font-mono text-sm uppercase tracking-[0.3em] font-bold">
          / certifications
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white">
          Verified <span className="text-zinc-400 dark:text-zinc-500 italic">Skills.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} {...cert} />
        ))}
      </div>
    </section>
  );
}