// import * as motion from "motion/react-client"
// import { VscAzure } from "react-icons/vsc";
// import { TbBrandPython } from "react-icons/tb";
// import { FaSalesforce } from "react-icons/fa";
// import { FaJava } from "react-icons/fa";
// import {FaNodeJs} from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { FaAws } from "react-icons/fa";
// import { FaDocker } from "react-icons/fa";

// const iconVariants = (duration) => ({
//     initial: { y: -10 }, 
//     animate:{
//         y: [10, -10], 
//         transition:{
//             duration: duration, 
//             ease: "linear", 
//             repeat: Infinity, 
//             repeatType: "reverse",
//         }
//     },
//     });

// const Technologies = () => {
//   return (
//     <div className="border-b border-neutral-800 pb-24">
//         <motion.h1
//         whileInView={{ opacity: 1, x: 0 }} 
//         initial= {{opacity: 0, x: -100}}
//         transition={{ duration: 0.75 }}
//         className="my-20 text-center text-4xl">Technologies</motion.h1>
//         <motion.div
//         whileInView={{ opacity: 1, x: 0 }} 
//         initial= {{opacity: 0, x: -100}}
//         transition={{ duration: 1 }}
//         className="flex flex-wrap items-center justify-center gap-4"> 
//             <motion.div 
//             variants={iconVariants (1)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <VscAzure className="text-7xl text-[#0078D4]" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (1.5)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <FaAws className="text-7xl text-[#FF9900]" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (3)}
//             initial="initial"
//             animate="animate"
//             className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <FaSalesforce className="text-7xl text-[#00A1E0]" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (2.2)}
//             initial="initial"
//             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <TbBrandPython className="text-7xl text-yellow-400" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (2.4)}
//             initial="initial"
//             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <FaJava className="text-7xl text-[#ED8B00]" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (3)}
//             initial="initial"
//             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <FaNodeJs className="text-7xl text-[#8CC84B]" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (1.3)}
//             initial="initial"
//             animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <FaReact className="text-7xl text-[#61DAFB]" />
//             </motion.div>
//             <motion.div 
//             variants={iconVariants (4.2)}
//             initial="initial"
//             animate="animate"className="rounded-2xl border-4 border-neutral-800 p-4">
//                 <FaDocker className="text-7xl text-[#2496ED]" />
//             </motion.div>
//         </motion.div>
//     </div>
//   );
// };

// export default Technologies;

import * as motion from "motion/react-client";
import { VscAzure } from "react-icons/vsc";
import { TbBrandPython } from "react-icons/tb";
import { FaJava, FaNodeJs, FaReact, FaAws, FaDocker } from "react-icons/fa";
import { SiJavascript, SiAngular } from "react-icons/si";

// Simple Icons pack (huge library)
import {
  SiKubernetes,
  SiSpringboot,
  SiRedis,
  SiRabbitmq,
  SiMysql,
  SiPostgresql,
  SiApachekafka,
  SiGitlab,
  SiJenkins,
  SiPrometheus,
  SiGrafana,
  SiElasticsearch,
  SiSonarqube,
//   SiVeracode,
  SiJfrog,
} from "react-icons/si";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration, ease: "linear", repeat: Infinity, repeatType: "reverse" },
  },
});

// ---- Your tech list (edit here if you want to add/remove) ----
const TECHS = [
  { name: "AWS", Icon: FaAws, color: "#FF9900", duration: 1 },
  { name: "Azure", Icon: VscAzure, color: "#0078D4", duration: 1.3 },
  { name: "Kubernetes (EKS/AKS)", Icon: SiKubernetes, color: "#326CE5", duration: 1.6 },
  { name: "Docker", Icon: FaDocker, color: "#2496ED", duration: 1.9 },

  { name: "Java", Icon: FaJava, color: "#ED8B00", duration: 2.2 },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F", duration: 2.5 },
  { name: "Python", Icon: TbBrandPython, color: "#FACC15", duration: 2.8 },
  { name: "Node.js", Icon: FaNodeJs, color: "#8CC84B", duration: 3.1 },
  { name: "React", Icon: FaReact, color: "#61DAFB", duration: 3.4 },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", duration: 3.6 },
  { name: "Angular", Icon: SiAngular, color: "#DD0031", duration: 3.9 },

  { name: "MySQL", Icon: SiMysql, color: "#4479A1", duration: 1.2 },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", duration: 1.5 },
  { name: "Redis", Icon: SiRedis, color: "#DC382D", duration: 1.8 },
  { name: "RabbitMQ", Icon: SiRabbitmq, color: "#FF6600", duration: 2.1 },
  { name: "Kafka", Icon: SiApachekafka, color: "#231F20", duration: 2.4 },

  { name: "GitLab", Icon: SiGitlab, color: "#FC6D26", duration: 2.7 },
  { name: "Jenkins", Icon: SiJenkins, color: "#D24939", duration: 3.0 },
  { name: "Azure DevOps", Icon: VscAzure, color: "#0078D7", duration: 3.3 },

  { name: "Prometheus", Icon: SiPrometheus, color: "#E6522C", duration: 1.1 },
  { name: "Grafana", Icon: SiGrafana, color: "#F46800", duration: 1.4 },
  { name: "Elasticsearch", Icon: SiElasticsearch, color: "#005571", duration: 1.7 },
  { name: "SonarQube", Icon: SiSonarqube, color: "#4E9BCD", duration: 2.0 },
//   { name: "Veracode", Icon: SiVeracode, color: "#00B2EF", duration: 2.3 },
  { name: "JFrog Artifactory", Icon: SiJfrog, color: "#41BF47", duration: 2.6 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.75 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      >
        {TECHS.map(({ name, Icon, color, duration }, i) => (
          <motion.div
            key={name + i}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
            title={name}
          >
            <Icon className="text-6xl md:text-7xl" style={{ color }} />
            <p className="mt-3 text-center text-sm text-neutral-300">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
