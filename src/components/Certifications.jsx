import React from "react";
import * as motion from "motion/react-client";
import { CERTIFICATIONS } from "../constants/index.js";


const Certifications = () => {
  const isOdd = CERTIFICATIONS.length % 3 === 1;

  return (
    <section className="py-12 lg:py-20 px-6 bg-transparent border-t border-neutral-800">
      <motion.h2
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: -100 }}
                      transition={{ duration: 0.5 }}
                      className="my-20 text-center text-4xl">Certifications</motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CERTIFICATIONS.map((cert, index) => {
          const isLast = index === CERTIFICATIONS.length - 1;

          return (
            <div
              className={`rounded-lg border border-white/10 bg-white/5 px-4 py-3 max-w-sm w-full transition-all hover:border-purple-400
                ${isLast && isOdd ? "lg:col-start-2" : ""}
              `}>
              <h3 className="text-base font-medium text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-purple-200">{cert.issuer}</p>
              <p className="text-xs text-purple-300 mt-1">{cert.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;  