// import * as motion from "motion/react-client";
// import { RECOMMENDATIONS } from "../constants/index.js";
// import { FaLinkedin } from "react-icons/fa";

// const container = (delay) => ({
//   hidden: { opacity: 0, y: 20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, delay },
//   },
// });

// const Recommendation = () => {
//   return (
//     <section className="py-16 px-6 bg-transparent border-t border-neutral-800">
//       <motion.h2
//         variants={container(0)}
//         initial="hidden"
//         animate="visible"
//         className="my-20 text-center text-4xl"
//       >
//         Recommendations
//       </motion.h2>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {RECOMMENDATIONS.map((rec, index) => (
//           <motion.div
//             key={index}
//             variants={container(0.1 + index * 0.2)}
//             initial="hidden"
//             animate="visible"
//             className="rounded-xl bg-white/5 border border-white/10 p-6 shadow-md transition hover:shadow-lg flex flex-col justify-between"
//           >
//             <p className="text-sm text-neutral-300 mb-4 italic">"{rec.text}"</p>
//             <div className="mt-auto">
//               <p className="text-white font-semibold">{rec.name}</p>
//               <p className="text-purple-300 text-sm">{rec.role}</p>
//               {rec.linkedin && (
//                 <a
//                   href={rec.linkedin}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-1 text-sm text-white-300 font-bold hover:underline mt-1"
//                 >
//                   <FaLinkedin className="text-base text-[#0077B5] font-bold" />View LinkedIn
//                 </a>
//               )}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Recommendation;

import * as motion from "motion/react-client";

const Achievements = () => {
  const items = [
    {
      title: "AWS Certified Solutions Architect – Professional",
      description: "Validated advanced expertise in designing and deploying scalable, fault-tolerant systems on AWS.",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      description: "Demonstrated proficiency in building secure and reliable cloud solutions on AWS.",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      description: "Verified knowledge of Azure cloud concepts, services, workloads, and governance.",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      description: "Demonstrated understanding of core data concepts, relational/non-relational data, and analytics workloads in Azure.",
    },
    {
      title: "Excellence Award at Alcon",
      description: "Recognized for leading the Philips-to-Alcon migration and improving system performance by 30% through Redis caching and event-driven workflows.",
    },
    {
      title: "Springer Publication",
      description: "Published research on 'Crop & Fertilizer Recommendation System' in Springer LNNS, showcasing machine learning–based agricultural recommendations.",
      link: "https://link.springer.com/chapter/10.1007/978-981-16-3342-3_3",
    },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl"
      >
        Achievements & Certifications
      </motion.h1>

      <div className="mx-auto max-w-5xl grid gap-8 px-4 sm:grid-cols-2">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="rounded-2xl border border-neutral-700 p-6 hover:border-purple-500 transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-400">
              {item.title}
            </h2>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {item.description}
            </p>
            {item.link && (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline mt-2 inline-block"
              >
                View Publication →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

