export const personalInfo = {
  name: "Pushkar Asodekar",
  titles: [
    'Full Stack Web Developer',
    'Software Engineer',
    'AI Enthusiast',
    'Problem Solver'
  ],
  description: "Creative Full Stack Developer blending UI elegance with robust backend systems, passionate about building impactful, user-centric digital experiences."
};

export const aboutInfo = {
  paragraphs: [
    "Final-year undergraduate student specializing in Artificial Intelligence and Data Science, with a solid foundation in Python, Full-Stack Web Development, and Data Structures & Algorithms in Java. I’m passionate about transforming complex, real-world challenges into intuitive, scalable, and efficient tech solutions.",
    "With a strong blend of academic insight and hands-on experience, I thrive on building impactful products, continuously learning, and staying ahead in the fast-evolving world of AI and software development. Open to networking, collaboration, and exciting opportunities that drive innovation.",
  ],
  developerProfile: {
    name: "Pushkar Asodekar",
    role: "Final Year Artificial Intelligence & Data Science Student",
    location: "India",
    specialties: [
      "React & Express.js",
      "Scalable Web Architecture",
      "Data Structures & Algorithms"
    ],
    passions: [
      "Clean, Maintainable Code",
      "Crafting Seamless UX",
      "Solving Real-World Problems"
    ],
    currentlyLearning: "React Native",
    funFact: "I treat console.log like my personal therapist",
    motto: "Build with purpose, scale with passion."
  }
};

export const experiences = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    company: "Success Classes of Engineering",
    type: "Freelance",
    startDate: "February 2025",
    endDate: "March 2025",
    location: "Hybrid",
    description: "Developed a full-stack web application to streamline the institute's student, fee, and batch management system.",
    responsibilities: [
      "Built responsive frontend interface for managing students, batches, and fee records",
      "Implemented secure user authentication and role-based access control using JWT",
      "Integrated dynamic fee tracking, payment scheduling, and due date reminders via email",
      "Designed and optimized PostgreSQL schemas for efficient data retrieval and scalability",
      "Developed admin dashboards with CRUD operations for students, batches, and payment history"
    ],
    impact: [
      "Automated over 80% of manual data entry and fee tracking tasks",
      "Enabled real-time access to student and batch information for staff",
      "Improved fee collection accuracy and reduced payment delays with automated reminders",
      "Increased operational transparency and administrative efficiency",
      "Delivered the project within 4 weeks, ahead of the proposed timeline"
    ],
    documentation: {
      certificate: "/certificate/scoecertificate.pdf",
      projectDemo: "#"
    }
  },
  
];

export const skills = [
  {
    category: "Languages & Frameworks",
    items: [
      { name: "HTML5", svgPath: "/icons/languages-frameworks/html5.svg", status: "Advanced" },
      { name: "CSS3", svgPath: "/icons/languages-frameworks/css3.svg", status: "Advanced" },
      { name: "JavaScript", svgPath: "/icons/languages-frameworks/javascript.svg", status: "Intermediate" },
      { name: "React", svgPath: "/icons/languages-frameworks/react.svg", status: "Intermediate" },
      { name: "Tailwind CSS", svgPath: "/icons/languages-frameworks/tailwindcss.svg", status: "Intermediate" },
      { name: "BootStrap", svgPath: "/icons/languages-frameworks/bootstrap.svg", status: "Intermediate" },
      { name: "Framer Motion", svgPath: "/icons/languages-frameworks/framer-motion.svg", status: "Intermediate" },
      { name: "Node.js", svgPath: "/icons/languages-frameworks/nodejs.svg", status: "Intermediate" },
      { name: "Express.js", svgPath: "/icons/languages-frameworks/express.svg", status: "Intermediate" },
      { name: "Python", svgPath: "/icons/languages-frameworks/python.svg", status: "Intermediate" },
      { name: "C", svgPath: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg", status: "Intermediate" },
      { name: "Java", svgPath: "/icons/languages-frameworks/java.svg", status: "Advanced" },
      { name: "Cloud Computing", svgPath: "/icons/languages-frameworks/cloud.png", status: "Basic" },
      { name: "Data Analysis & Visualization", svgPath: "/icons/languages-frameworks/data-analytics.png", status: "Intermediate" },
    ]
  },
  {
    category: "Backend & DevOps",
    items: [
      { name: "MongoDB", svgPath: "/icons/backend-devops/mongodb.svg", status: "Basic" },
      { name: "MySQL", svgPath: "/icons/backend-devops/mysql.svg", status: "Intermediate" },
      { name: "PostgreSQL", svgPath: "/icons/backend-devops/postgresql.svg", status: "Intermediate" },
      { name: "Docker", svgPath: "/icons/backend-devops/docker.svg", status: "Basic" },
      { name: "Git", svgPath: "/icons/backend-devops/git.svg", status: "Intermediate" },
      { name: "GitHub", svgPath: "/icons/backend-devops/github.svg", status: "Advanced" },
      { name: "Postman", svgPath: "/icons/backend-devops/postmansvg.svg", status: "Intermediate" },
      { name: "Vercel", svgPath: "/icons/backend-devops/vercel.svg", status: "Basic" },
      { name: "Netlify", svgPath: "/icons/backend-devops/netlify.svg", status: "Basic" },
      { name: "Render", svgPath: "/icons/backend-devops/render.svg", status: "Intermediate" },
      { name: "Hostinger", svgPath: "/icons/backend-devops/hostinger.svg", status: "Intermediate" },
    ]
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "VS Code", svgPath: "/icons/tools-platforms/vscode.svg", status: "Advanced" },
      { name: "Figma", svgPath: "/icons/tools-platforms/figma.svg", status: "Basic" },
      { name: "Linux", svgPath: "/icons/tools-platforms/linux.svg", status: "Intermediate" },
      { name: "PyCharm", svgPath: "/icons/tools-platforms/pycharm.svg", status: "Intermediate" },
      { name: "IntelliJ IDEA", svgPath: "/icons/tools-platforms/intellij-idea.svg", status: "Intermediate" },
      { name: "Wordpress", svgPath: "/icons/tools-platforms/wordpress.svg", status: "Intermediate" },
    ]
  },
  {
    category: "Emerging Technologies",
    items: [
      { name: "Machine Learning", svgPath: "/icons/emerging-technologies/machine-learning.png", status: "Intermediate" },
      { name: "Blockchain", svgPath: "/icons/emerging-technologies/blockchain.svg", status: "Basic" },
      { name: "Web3", svgPath: "/icons/emerging-technologies/web3.png", status: "Basic" },
      { name: "ICP (Internet Computer)", svgPath: "/icons/emerging-technologies/icp.png", status: "Basic" }
    ]
  }

];



export const projects = [
  {
    id: 1,
    title: "Arcade Games",
    description: "The Arcade Games project is a Python-based desktop application that brings together three classic arcade-style mini-games into a single experience. Developed using Python’s Tkinter GUI toolkit and the Turtle graphics module, the project showcases interactive gameplay and fundamental game development concepts.",
    technologies: ["Python", "Turtle", "Tkinter", "Game Development"],
    image: "/projects/arcadegames.png",
    alt: "Arcade Games",
    links: {
      github: "https://github.com/Pushkaraso19/Arcade_Games"
    }
  },
  {
    id: 2,
    title: "Workspace Management System",
    description: "The Workspace Management System is a comprehensive solution designed to streamline and optimize workspace operations. Developed using Python with the Tkinter library for creating a user-friendly graphical interface and MySQL for efficient data management, this system offers a centralized platform for managing various aspects of a workspace.",
    technologies: ["Python", "Tkinter", "CustomTKinter", "MySQL"],
    image: "/projects/wms.png",
    alt: "Workspace Management System",
    links: {
      github: "https://github.com/Pushkaraso19/Workspace_Management_System"
    }
  },
  {
    id: 3,
    title: "My Book Chronicle",
    description: "My Book Chronicle is a web application designed to help users track and manage their reading lists. The application allows users to add, update, and delete books from their personal reading list, as well as mark books as read or unread.",
    technologies: ["EJS", "CSS", "Node.js", "Express.js", "REST API", "MySQL"],
    image: "/projects/mybookchronicle.png",
    alt: "My Book Chronicle",
    links: {
      github: "https://github.com/Pushkaraso19/My-Book-Chronicle"
    }
  },
  {
    id: 4,
    title: "CodeCompile",
    description: "CodeCompile is a professional online code compiler designed to help developers write, test, and execute code in multiple programming languages without setting up local environments. It supports Python, JavaScript, Java, Ruby, and Go with real-time Docker-based execution and a user-friendly interface.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "Docker", "Cloud Computing"],
    image: "/projects/codecompile.png",
    alt: "CodeCompile",
    links: {
      github: "https://github.com/Pushkaraso19/CodeCompile"
    }
  },
  {
    id: 5,
    title: "DataViz",
    description: "DataViz is a web app for uploading and visualizing data using charts like bar, line, pie, and more. Features include real-time chart updates, color and style customization, CSV/JSON import, and chart export options (PNG/SVG). Designed for ease of use and flexibility in exploring datasets visually.",
    technologies: ["React", "Vite", "Framer Motion", "Tailwind CSS", "D3.js"],
    image: "/projects/dataviz.png",
    alt: "DataViz",
    links: {
      github: "https://github.com/Pushkaraso19/DataViz"
    }
  }
];

export const education = [
  {
    id: 1,
    title: "Bachelor of Engineering in Artificial Intelligence & Data Science",
    institution: "University of Mumbai [Konkan Gyanpeeth College of Engineering]",
    period: "2022 - 2026",
    status: "pursuing",
    category: "education"
  },
  {
    id: 2,
    title: "Higher Secondary Education (12th)",
    institution: "Royal Jr. College",
    period: "2020 - 2022",
    status: "completed",
    grade: "72.33%",
    category: "education"
  },
  {
    id: 3,
    title: "Java Programming",
    institution: "Success Classes of Engineering",
    period: "2024",
    status: "completed",
    certificateUrl: "/certificate/java.png",
    category: "certification"
  },
  {
    id: 4,
    title: "The Complete Full Stack Web Development Bootcamp",
    institution: "Udemy - Angela Yu",
    period: "2025",
    status: "completed",
    certificateUrl: "/certificate/webdev.pdf",
    category: "certification"
  },
  {
    id: 5,
    title: "100 Days of Code: The Complete Python Pro Bootcamp",
    institution: "Udemy - Angela Yu",
    period: "2025",
    status: "completed",
    certificateUrl: "/certificate/python.pdf",
    category: "certification"
  }
];

export const contactInfo = {
  title: "Let's Connect",
  description: "I'm always interested in hearing about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!",
  contactMethods: [
    { type: "email", value: "pushkar9aso@gmail.com", icon: "VscMail" },
    { type: "location", value: "Mumbai, India", icon: "VscLocation" }
  ],
  socialLinks: [
    {
      name: 'Email',
      href: 'mailto:pushkar9aso@gmail.com',
      platform: 'email'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Pushkaraso19',
      platform: 'github'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/pushkar-asodekar/',
      platform: 'linkedin'
    },
    {
      name: 'LeetCode',
      href: 'https://leetcode.com/u/Pushkar1908/',
      platform: 'leetcode'
    }
  ]
};
