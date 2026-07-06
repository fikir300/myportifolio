"use client";
import CertificateCard from "../ui/CertificateCard";

const certificates = [
  {
    title: "Data Structures and Algorithms",
    issuer: "GDG AASTU",
    date: "2026",
    link: "/certificates/f.pdf",
  },
  {
    title: "Embedded Systems",
    issuer: "Cassiopia AASTU",
    date: "2026",
    link: "/certificates/fa.pdf",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-10">
      <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
        <h2 className="text-blue-600 dark:text-blue-400 font-mono text-sm uppercase tracking-[0.3em] font-bold">
          / certifications
        </h2>
        <h3 className="text-zinc-400 :text-zinc-500 italic">
          Verified Skills.
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