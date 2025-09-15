import alcon_logo from "../assets/alcon.png"
import accenture_logo from "../assets/accenture1.png"
import NEU from "../assets/neu.png" 
import goflamingo from "../assets/goflamingo.png" 

export const HERO_CONTENT = `Hey, I’m Nikhil! A problem-solver at heart, I love building scalable systems, automating workflows, and diving into data to create solutions that make an impact. Currently pursuing my Master’s in Computer Science at Northeastern University, I’ve worked with companies like Alcon and Accenture on everything from AI-powered components to large-scale cloud-native applications. When I’m not coding, I’m probably exploring new tech, fine-tuning systems for performance, or learning something just for fun.`;

export const ABOUT_TEXT = [
  "I build. I solve. I innovate.",
  "From designing resilient backend services to engineering intelligent, data-driven systems, I thrive at the intersection of technology and problem-solving. My journey in tech is fueled by curiosity, adaptability, and a passion for creating solutions that matter. I don’t just write code—I craft experiences, streamline complex processes, and bring ideas to life with a blend of logic and creativity.",
  "With a background spanning software engineering, cloud-native architectures, and AI/ML, I’ve tackled challenges ranging from enterprise-scale automation to AI-enhanced workflows. I’ve worked across Java Spring Boot, Python, and Node.js stacks, deployed microservices on Kubernetes and AWS/Azure, and integrated event-driven systems with Kafka, RabbitMQ, and Redis.",
  "I embrace challenges as opportunities to grow, collaborate, and push the boundaries of what’s possible. Currently seeking opportunities in Software Engineering, Backend Development, and AI/ML systems, I’m always on the lookout for the next big challenge. Let’s create, innovate, and build something extraordinary!"
];


export const EXPERIENCES = [
  {
    year: "September, 2025 - Present",
    role: "Graduate Teaching Assistant",
    company: "Khoury College of Computer Science, Northeastern University",
    logo: NEU,
    projects: [
      {
        title: "Course Setup & Coordination",
        bullets: [
          "Managed the TA spreadsheet for office hours, Piazza responsibilities, and technology coverage.",
          "Coordinated with instructor and staff via Microsoft Teams and Khoury office app to streamline communication and office hours.",
        ],
      },
      {
        title: "Instruction & Student Support",
        bullets: [
          "Held weekly office hours, answered student questions on database concepts, SQL queries, and system design.",
          "Delivered assignment reviews and SQL code walk-throughs (CREATE, SELECT, normalization, relational algebra).",
        ],
      },
      {
        title: "Assessment & Feedback",
        bullets: [
          "Graded homework assignments, late submissions, and exams while tracking late pass usage.",
          "Provided detailed feedback on database design, ER modeling, indexing strategies, and query optimization.",
        ],
      }
      // {
      //   title: "AI-Driven Faculty Selection",
      //   bullets: [
      //     "Implemented AI-driven analysis to match faculty members to research projects, optimizing resource allocation and reducing hiring costs.",
      //     "Developed automation tools to streamline faculty selection, improving efficiency and project execution timelines.",
      //   ],
      // },
    ],
    technologies: ["SQL", "Relational Algebra", "MongoDB", "Normalization"],
  },
  {
    year: "September, 2023 - December, 2024",
    role: " Software Engineer 2",
    company: "Alcon Laboratories (Research And Development)",
    logo: alcon_logo,
    description: "Designed and deployed 10+ modular microservices for onboarding Practices, Patients, and Users using Java Spring Boot and Python, integrated with RabbitMQ, Amazon RDS, and Redis caching to enable event-driven architecture. Built and optimized CI/CD pipelines with Jenkins, GitLab, and Azure DevOps, reducing deployment time and manual effort across AWS and Azure. Containerized applications with Docker and orchestrated services on Kubernetes (EKS) for high availability and scalability. Implemented centralized monitoring with Prometheus, Grafana, and Kibana, cutting MTTR and maintaining 99.5% uptime. Strengthened security with SonarQube and Veracode scans, ensuring compliance and code quality.",
    technologies: ["Java", "Spring Boot", "Python", "RabbitMQ", "Amazon RDS", "Redis", "AWS", "Azure", "Docker", "Kubernetes (EKS)", "Jenkins", "GitLab", "Prometheus", "Grafana", "Kibana", "SonarQube", "Veracode"]
  },
  {
    year: "November, 2021 - August, 2023",
    role: "Software Engineer",
    logo: accenture_logo,
    company: "Accenture",
    description: "Developed and deployed REST APIs and middleware services using Node.js, Express, and Java Spring Boot, integrating with MySQL to reduce latency by 20%. Designed event-driven workflows with Kafka/RabbitMQ and Redis caching, enabling ~1M+ daily transactions with 30% less downtime. Collaborated with cross-functional teams to deliver backend features and resolve production escalations, ensuring high availability and performance. Managed builds with JFrog Artifactory, optimized pipelines with Maven/Gradle, and automated workflows using Python/Bash for log monitoring. ",
    technologies: ["Node.js", "Express", "Java", "Spring Boot", "MySQL", "Kafka", "JFrog Artifactory", "Maven", "Gradle", "Python", "Bash", "GitLab", "Azure DevOps", "ELK Stack", "SonarQube", "Veracode"],
  },
  {
    year: "November, 2020 - November, 2021",
    role: "Associate Software Engineer",
    logo: accenture_logo,
    company: "Accenture",
    description: "Built and optimized CI/CD pipelines with GitLab, Jenkins, and Azure DevOps, reducing deployment time and manual effort. Supported multi-cloud deployments across AWS (EC2, S3, IAM, EKS, Route 53) and Azure (AKS, ACR, App Services). Implemented centralized observability with ELK Stack and Prometheus/Grafana, cutting incident MTTR significantly. Integrated SonarQube, Veracode, and dependency scans into workflows, strengthening code quality and security compliance.",
    technologies: ["GitLab", "Jenkins", "Azure DevOps", "AWS (EC2, S3, IAM, EKS, Route 53)", "Azure (AKS, ACR, App Services)", "ELK Stack", "Prometheus", "Grafana", "SonarQube", "Veracode"]
  },
  // {
  //   year: "November, 2020 - October, 2021",
  //   role: "Full Stack Developer",
  //   logo: accenture_logo,
  //   company: "Accenture",
  //   description: "Developed and deployed mission-critical functionalities in high-stakes production environments, ensuring seamless performance with rigorous testing and documentation. Led client demonstrations and feedback sessions, refining features to align with business needs and user expectations. Engineered sleek, high-performance Salesforce UI/UX solutions using Lightning Components and the Aura framework, optimizing user workflows and boosting engagement. Integrated SOAP web services with enterprise applications, enabling seamless data exchange, automation, and system interoperability across large-scale platforms. More than just writing code—I designed scalable, intuitive systems that streamlined operations, enhanced efficiency, and delivered business-driven impact.",
  //   technologies: ["Java/Apex", "Javascript", "SOAP APIs", "REST APIs", "LWC", "Aura Components", "HTML", "CSS", "SOQL", "SOSL" ],
  // },
  {
    year: "April, 2019 - July, 2019",
    role: "Software Engineering Intern",
    company: "Goflamingo Logistics",
    logo: goflamingo,
    description: "Developed RESTful API endpoints with Django to automate logistics admin workflows, processing 500+ daily requests with strict data validation. Wrote unit and integration tests using pytest and Django’s test framework, achieving 85% coverage and improving code reliability during frequent releases. Containerized the application using Docker and deployed on AWS Elastic Beanstalk, cutting deployment time by 20% and ensuring consistent rollouts across environments. Implemented a lightweight CI/CD pipeline with GitHub Actions to automate linting and testing on pull requests, streamlining development and maintaining code quality.",
    technologies: ["Python", "Django", "Pytest", "Docker", "AWS Elastic Beanstalk", "GitHub Actions"],
  },
];

export const CERTIFICATIONS = [
  
  // {
  //   title: "Salesforce Certified Administrator",
  //   issuer: "Salesforce",
  //   date: "July 19, 2021"
  // },
  // {
  //   title: "Salesforce Certified Advanced Admin",
  //   issuer: "Salesforce",
  //   date: "November 22, 2021"
  // },
  // {
  //   title: "Salesforce Certified Platform App Builder",
  //   issuer: "Salesforce",
  //   date: "September 22, 2021"
  // },
  // {
  //   title: "Salesforce Certified Platform Developer I",
  //   issuer: "Salesforce",
  //   date: "January 6, 2022"
  // },
  // {
  // title: "Salesforce Certified Platform Developer II",
  // issuer: "Salesforce",
  // date: "May 16, 2022",
  // },
  // {
  // title: "Salesforce Certified JavaScript Developer I",
  // issuer: "Salesforce",
  // date: "November 9, 2022",
  // },
  // {
  //   title: "Copado Certified Fundamentals I",
  //   issuer: "Copado",
  //   date: "December 1, 2022"
  // },
  // {
  // title: "Copado Certified Fundamentals II",
  // issuer: "Copado",
  // date: "May 24, 2023",
  // },
  // {
  //   title: "Advanced C++ Training",
  //   issuer: "IIT Bombay - Spoken Tutorial",
  //   date: "April 5, 2018"
  // },
  // {
  //   title: "C and Data Structures Training",
  //   issuer: "Intellipaat",
  //   date: "November 21, 2017"
  // }

  {
    title: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "August 2023"
  },
  {
    title: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "July 2024"
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "June 2023"
  },
  {
    title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
    issuer: "Microsoft",
    date: "June 2023"
  }
  
  
  
];
export const PROJECTS = [
  {
    title: "Cloud-Native AI RAG Document Processor",
    description: "Built a cloud-native Retrieval-Augmented Generation (RAG) system for document question answering. Designed an ingestion pipeline to parse and embed PDFs, Word files, and text documents into a vector database for semantic search. Integrated large language models with retrieval layers to provide context-aware responses, improving accuracy and reducing hallucinations. Deployed the application as microservices on Kubernetes with autoscaling, ensuring reliability and high availability in production.",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI API", "Docker", "Kubernetes", "AWS (EKS, S3, Lambda, API Gateway)", "Terraform", "Grafana"]
  },  

  {
    title: "Smart Scheduler Application",
    description: "Designed and implemented a scheduling platform that automated meeting and task allocation across teams. Built a conflict-free calendar system with real-time availability checks and reminders, improving scheduling efficiency by 40%. Integrated role-based access control and notification services to support multi-user collaboration. Deployed on the cloud with containerized services for scalability and reliability.",
    technologies: ["Python", "Django REST Framework", "React.js", "PostgreSQL", "Redis", "Celery", "Docker", "Kubernetes", "AWS (EC2, RDS, S3)"]
  },

  {
    title: "AWS Cloud Facial Recognition App",
    description:
      "Built a high-performance, auto-scaling facial recognition pipeline on AWS capable of analyzing thousands of video clips in under three minutes. Leveraged AWS Lambda for serverless processing, EC2 for compute elasticity, S3 for storage, and SQS for task decoupling. Employed a deep learning ResNet model for accurate face detection, integrated with a Lambda-triggered video extraction system. Implemented parallel processing via S3 event-driven triggers and used CloudWatch for performance monitoring. This solution demonstrates enterprise-grade cloud architecture and real-time computer vision capabilities.",
    //  github: "https://github.com/rohitdanti/Cloud-Face-Recognition",
      technologies: ["AWS Lambda", "S3", "EC2", "SQS", "ResNet", "CloudWatch", "Python"],
  },

  {
    title: "Crop & Fertilizer Recommendation System",
    description: "Developed a machine learning–based recommendation engine to assist farmers in selecting the most suitable crops and fertilizers based on soil composition, pH, rainfall, and temperature data. Trained classification and regression models to deliver data-driven insights that improved yield predictions by 25%. Built an interactive web dashboard for farmers to input soil data and receive actionable recommendations in real time.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "React.js", "MySQL", "AWS EC2", "Matplotlib", "Seaborn"],
    link: "https://link.springer.com/chapter/10.1007/978-981-16-3342-3_3"
  },  
  // {
  //   title: "Richter's Predictor - Earthquake Damage Prediction",
  //   description:
  //     "Developed a predictive analytics solution to classify building damage from the 2015 Nepal Earthquake using machine learning. Processed a dataset with over 347,000 samples, engineered critical features, and normalized imbalanced labels. Evaluated and optimized models including Random Forest, XGBoost, KNN, and shallow Neural Networks. Achieved significant accuracy gains through ensembling, hyperparameter tuning, and 10-fold cross-validation. This project reflects practical use of ML for disaster response planning and risk management.",
  //   technologies: ["Python", "XGBoost", "Random Forest", "KNN", "Neural Networks", "Scikit-learn", "Pandas"],
  //    github: "https://github.com/rohitdanti/Richters-Predictor"
  // },
  // {
  //   title: "Arizona Nightlife Analysis using Yelp Dataset",
  //   description:
  //     "Architected a big data analytics pipeline to analyze nightlife businesses in Arizona using publicly available Yelp data. Leveraged Hadoop and PySpark to transform and clean terabyte-scale JSON records into Parquet files for optimized distributed querying. Parsed over 37,000 user profiles and 1 million+ reviews to extract behavioral patterns, customer preferences, and business engagement trends. Derived actionable insights using Spark SQL, enabling location-based strategy formulation for business owners and urban planners.",
  //   technologies: ["PySpark", "Hadoop", "Spark", "Parquet", "Yelp API", "Spark SQL"],
  //    github: "https://github.com/rohitdanti/Data-Processing-at-Scale-Arizona-Nightlife-Analysis",
  // },
  // {
  //   title: "AI-Driven Legal Risk Predictor",
  //   description:
  //     "Implemented a machine learning model to assess litigation risk by predicting the outcome category of legal cases based on historical court data. Cleaned and vectorized unstructured legal texts using TF-IDF and named entity recognition (NER). Built classification models with Logistic Regression and Random Forest, achieving over 85% accuracy on real-world datasets. Applied cross-validation, confusion matrix analysis, and feature importance plots to validate the system. This project highlights the application of AI in justice systems for legal forecasting and risk analysis.",
  //   technologies: ["Python", "NLP", "TF-IDF", "NER", "Scikit-learn", "Matplotlib", "Pandas"],
  // },
  {
    title: "Performance Evaluation of HPC Applications in Containers vs. VMs",
    description:
      "Conducted an in-depth performance evaluation of Apache Cassandra in containerized (Docker) and virtualized (VMware) environments, publishing the results in Springer. Created Kubernetes clusters using Minikube and automated deployment pipelines for Cassandra nodes. Simulated real-world workloads using TLP-Stress and tracked key performance metrics (latency, throughput) with Metric Server. The study revealed critical trade-offs between isolation overhead and scalability in container-based HPC workflows and serves as a reference for cloud-native architecture decisions.",
    technologies: ["Docker", "VMware", "Kubernetes", "Apache Cassandra", "TLP-Stress", "Minikube", "Metric Server"],
    // link: "https://www.springerprofessional.de/en/performance-evaluation-of-hpc-application-in-containerized-and-v/19917126",
  },
  {
  title: "Personal Portfolio Website",
  description:
    "Designed and developed a fully responsive personal portfolio website using React and Tailwind CSS to showcase academic background, industry experience, certifications, and projects. Implemented modular components including dynamic sections for hero content, experiences, projects, and contact. Integrated Framer Motion for interactive animations and conditional rendering for responsive design. Centralized data via a constants file for easy updates, and optimized the layout to ensure visual cohesion across dark-mode themes. Deployed via modern CI/CD workflows and structured for scalability.",
  technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript", "Vite"],
  //  github: "https://github.com/rohitdanti/react-portfolio",
}
];  

export const RECOMMENDATIONS = [
  // {
//   name: "Michael Moody",
//   role: "Associate Director, Research Success",
//   text: "I had the pleasure of working with and supervising Rohith Danti as a student worker, where he supported the Research Success Hub via data and website management. Rohith consistently demonstrated strong technical skills, the ability to take instruction and execute the vision of the Research Success Hub. Beyond his technical duties, Rohith played an integral role in building logic models that paired research faculty with students interested in research opportunities. He was also responsible for maintaining a college-wide resources repository and took initiative in developing a Tableau dashboard to track executive-level KPI metrics—contributions that had a significant impact on our operational efficiency. Most importantly, Rohith was expedient, responsive, respectful, courteous, and flexible. He quickly became a trusted and dependable member of the team, and I highly recommend him for any role that demands both technical acumen and professional integrity.",
//   linkedin: "https://www.linkedin.com/in/michael-moody-144bab99/",
//   },
//   {
//     name: "Karunakar Bojjireddy",
//     role: "Director, Cloud Operations, Security and Governance, Commvault",
//     text: "Rohith worked with me on the Commvault Cloud Operations team, contributing to a project in its early concept stage with dynamic requirements. He quickly adapted to new technologies and consistently delivered high-quality solutions. His expertise in Python, Azure, and modern data engineering practices, combined with his exceptional problem-solving skills, made him a valuable contributor. I highly recommend Rohit for his technical acumen and collaborative mindset.",
//     linkedin: "https://www.linkedin.com/in/karunakar-bojjireddy-03b77a1/",
//   },
//   {
//   name: "Richie Kovac",
//   role: "Management Consulting Manager, Accenture",
//   text: "Rohith played a pivotal role in delivering complex Salesforce solutions for a global media client. He consistently went beyond requirements—designing, building, and rigorously testing features like a custom 'Mass Upload' module used to process billions in advertising revenue. Rohith's leadership during cross-functional scrums and his ability to coach junior teammates stood out. He brings a rare blend of technical depth, delivery discipline, and collaborative spirit that any team would value.",
//   linkedin: "https://www.linkedin.com/in/richie-kovac-94935888/",
// },
// {
//   name: "Ketan Kulkarni",
//   role: "Development Team Lead, Accenture",
//   text: "Rohith is a fast learner with a strong ability to adapt to new technologies. During our time working together on Salesforce Implementation for Disney, he delivered complex solutions using Aura Components and Apex. His continuous pursuit of certifications reflects his dedication to growth. I appreciated his professionalism and contribution to challenging development requirements. Wishing him continued success in all his endeavors.",
//   linkedin: "https://www.linkedin.com/in/ketan-kulkarni-113251209/",
// },
// {
//   name: "Sejal Sharma",
//   role: "Software Developer, Salesforce",
//   text: "Rohith is a dependable team player who consistently took on critical responsibilities and actively supported team members in achieving shared goals. His role as a Full Stack Senior Analyst showcased both his technical proficiency and his leadership in problem-solving. I thoroughly enjoyed collaborating with Rohit and highly regard his ability to deliver under pressure.",
//   linkedin: "https://www.linkedin.com/in/sejal-sharma-89617515b/",
//   },
  
];


export const CONTACT = {
  address: "Northeastern University, Boston, MA", 
  email: "harish.n@northeastern.edu",
  linkedin: "https://www.linkedin.com/in/nikhil-k-harish/",
  github: "https://github.com/NikhilKH1"
};