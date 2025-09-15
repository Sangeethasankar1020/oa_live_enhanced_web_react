import { COURSEIMAGE } from "../assest/course";
export interface Module {
  moduleName: string;
  topicsCovered: string[];
  handsOnProjects: string[];
}

export interface Course {
  id: string;
  courseIndex: number;
  courseId: string;
  category: string;
  title: string;
  description: string;
  bannerImage: string;
  cardImage: string;
  price: number;
  discountPercentage: number;
  originalPrice: number;
  duration: string;
  totalHours: number;
  students: number;
  syllabusLink: string;
  technologies: string[];
  whatYouWillLearn: string[];
  modules: Module[];
  prerequisites: string[];
  tools: string[];
  aiTools: string[];
}

export const coursesdata: Course[] = [
  {
    id: "1",
    courseIndex: 1,
    courseId: "ocnmern",
    category: "frontend",
    title: "JavaScript Mastery Bootcamp",
    description:
      "Learn modern JavaScript from scratch with real-world projects.Learn modern JavaScript from scratch with real-world projects.Learn modern JavaScript from scratch with real-world projects.Learn modern JavaScript from scratch with real-world projects.",
    bannerImage: COURSEIMAGE,
    cardImage: COURSEIMAGE,
    price: 4999,
    discountPercentage: 20,
    originalPrice: 6249,
    duration: "4 - 5",
    totalHours: 40,
    students: 1250,
    syllabusLink: "firebase_url/js_syllabus.pdf",
    technologies: ["JavaScript", "Node.js", "React.js", "MongoDB"],
    whatYouWillLearn: [
      "Modern JavaScript features (ES6+)",
      "DOM manipulation and event handling",
      "Async JavaScript with Promises & Async/Await",
      "Modules and bundling",
    ],
    modules: [
      {
        moduleName: "Module 1: JavaScript Fundamentals",
        topicsCovered: [
          "Variables and Data Types",
          "Functions and Scope",
          "Operators and Control Flow",
          "Modern JavaScript features (ES6+)",
        ],
        handsOnProjects: ["Interactive Calculator", "Mini To-Do App"],
      },
      {
        moduleName: "Module 2: Advanced JavaScript",
        topicsCovered: [
          "Closures",
          "Prototypes & Inheritance",
          "Event Loop & Callbacks",
          "ES6 Classes",
        ],
        handsOnProjects: ["Custom Event Emitter", "Async Image Loader"],
      },
      {
        moduleName: "Module 3: Asynchronous JavaScript",
        topicsCovered: [
          "Promises",
          "Async/Await",
          "Fetch API",
          "Working with APIs",
        ],
        handsOnProjects: ["Weather App", "GitHub User Finder"],
      },
    ],
    prerequisites: [
      "Basic understanding of HTML and CSS",
      "Logical thinking ability",
    ],
    tools: ["toolId1", "toolId2"],
    aiTools: ["toolId3"],
  },
  // {
  //   id: "2",
  //   courseIndex: 2,
  //   courseId: "ocnreact",
  //   category: "frontend",
  //   title: "React.js Complete Guide",
  //   description: "Master React from basics to advanced with hands-on projects.",
  //   bannerImage: COURSEIMAGE,
  //   cardImage: COURSEIMAGE,
  //   price: 5999,
  //   discountPercentage: 25,
  //   originalPrice: 7999,
  //   duration: "10 weeks",
  //   totalHours: 50,
  //   students: 2100,
  //   syllabusLink: "firebase_url/react_syllabus.pdf",
  //   technologies: ["React.js", "Redux", "React Router", "Hooks"],
  //   whatYouWillLearn: [
  //     "React basics and JSX",
  //     "Component-based architecture",
  //     "State management with Redux",
  //     "React Router for navigation",
  //   ],
  //   modules: [
  //     {
  //       moduleName: "Module 1: React Basics",
  //       topicsCovered: [
  //         "JSX and Virtual DOM",
  //         "Functional Components",
  //         "Props and State",
  //         "Event Handling",
  //       ],
  //       handsOnProjects: ["Counter App", "Task Tracker"],
  //     },
  //     {
  //       moduleName: "Module 2: Advanced React",
  //       topicsCovered: [
  //         "React Hooks",
  //         "Context API",
  //         "Error Boundaries",
  //         "Performance Optimization",
  //       ],
  //       handsOnProjects: ["Notes App", "Weather Dashboard"],
  //     },
  //     {
  //       moduleName: "Module 3: Routing & State Management",
  //       topicsCovered: ["React Router", "Redux Basics", "Redux Toolkit"],
  //       handsOnProjects: ["E-commerce Store", "Blog Application"],
  //     },
  //   ],
  //   prerequisites: ["Good knowledge of JavaScript and ES6+"],
  //   tools: ["toolId4"],
  //   aiTools: ["toolId5"],
  // },
  // {
  //   id: "3",
  //   courseIndex: 3,
  //   courseId: "ocnnode",
  //   category: "backend",
  //   title: "Node.js & Express Mastery",
  //   description: "Learn backend development with Node.js, Express, and APIs.",
  //   bannerImage: "firebase_url/node_banner.png",
  //   cardImage: COURSEIMAGE,
  //   price: 5499,
  //   discountPercentage: 15,
  //   originalPrice: 6470,
  //   duration: "7 weeks",
  //   totalHours: 35,
  //   students: 1800,
  //   syllabusLink: "firebase_url/node_syllabus.pdf",
  //   technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
  //   whatYouWillLearn: [
  //     "Node.js fundamentals",
  //     "Express.js for backend",
  //     "REST API development",
  //     "Authentication & Security",
  //   ],
  //   modules: [
  //     {
  //       moduleName: "Module 1: Node.js Basics",
  //       topicsCovered: [
  //         "Node.js Environment",
  //         "File System Module",
  //         "Events and Streams",
  //       ],
  //       handsOnProjects: ["CLI File Organizer", "Simple HTTP Server"],
  //     },
  //     {
  //       moduleName: "Module 2: Express.js Essentials",
  //       topicsCovered: [
  //         "Express Basics",
  //         "Middleware",
  //         "Routing",
  //         "Error Handling",
  //       ],
  //       handsOnProjects: ["Todo API", "User Authentication API"],
  //     },
  //     {
  //       moduleName: "Module 3: Database Integration",
  //       topicsCovered: ["MongoDB CRUD", "Mongoose ORM", "JWT Authentication"],
  //       handsOnProjects: ["Blog REST API", "E-commerce API"],
  //     },
  //   ],
  //   prerequisites: ["JavaScript knowledge required"],
  //   tools: ["toolId6"],
  //   aiTools: ["toolId7"],
  // },
  // {
  //   id: "4",
  //   courseIndex: 4,
  //   courseId: "ocnfullstack",
  //   category: "fullstack",
  //   title: "MERN Full Stack Developer",
  //   description:
  //     "Become a full stack developer with MongoDB, Express, React, and Node.",
  //   bannerImage: "firebase_url/mern_banner.png",
  //   cardImage: COURSEIMAGE,
  //   price: 7999,
  //   discountPercentage: 30,
  //   originalPrice: 11428,
  //   duration: "12 weeks",
  //   totalHours: 60,
  //   students: 3500,
  //   syllabusLink: "firebase_url/mern_syllabus.pdf",
  //   technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
  //   whatYouWillLearn: [
  //     "Frontend with React",
  //     "Backend with Node.js & Express",
  //     "MongoDB database",
  //     "Authentication and deployment",
  //   ],
  //   modules: [
  //     {
  //       moduleName: "Module 1: Frontend with React",
  //       topicsCovered: ["React Basics", "Hooks", "Redux"],
  //       handsOnProjects: ["Portfolio Website", "Task Manager App"],
  //     },
  //     {
  //       moduleName: "Module 2: Backend with Node & Express",
  //       topicsCovered: ["REST APIs", "JWT Authentication", "Middleware"],
  //       handsOnProjects: ["Blog API", "Chat API"],
  //     },
  //     {
  //       moduleName: "Module 3: Full Stack Integration",
  //       topicsCovered: ["Connecting Frontend & Backend", "Deployment"],
  //       handsOnProjects: ["E-commerce Store", "Social Media App"],
  //     },
  //   ],
  //   prerequisites: ["Basic knowledge of frontend and backend"],
  //   tools: ["toolId8", "toolId9"],
  //   aiTools: ["toolId10"],
  // },
  // {
  //   id: "5",
  //   courseIndex: 5,
  //   courseId: "ocnpython",
  //   category: "backend",
  //   title: "Python Programming Bootcamp",
  //   description: "Learn Python from scratch and build real-world applications.",
  //   bannerImage: "firebase_url/python_banner.png",
  //   cardImage: COURSEIMAGE,
  //   price: 3999,
  //   discountPercentage: 10,
  //   originalPrice: 4444,
  //   duration: "6 weeks",
  //   totalHours: 30,
  //   students: 1400,
  //   syllabusLink: "firebase_url/python_syllabus.pdf",
  //   technologies: ["Python", "Flask", "SQLite"],
  //   whatYouWillLearn: [
  //     "Python syntax and basics",
  //     "Object-Oriented Programming",
  //     "Flask for web development",
  //     "Database integration",
  //   ],
  //   modules: [
  //     {
  //       moduleName: "Module 1: Python Basics",
  //       topicsCovered: ["Data Types", "Control Flow", "Functions"],
  //       handsOnProjects: ["Simple Calculator", "Number Guessing Game"],
  //     },
  //     {
  //       moduleName: "Module 2: OOP in Python",
  //       topicsCovered: ["Classes & Objects", "Inheritance", "Polymorphism"],
  //       handsOnProjects: ["Bank Management System", "Library System"],
  //     },
  //     {
  //       moduleName: "Module 3: Web with Flask",
  //       topicsCovered: ["Flask Basics", "Routing", "Templates"],
  //       handsOnProjects: ["Blog Website", "Task Tracker App"],
  //     },
  //   ],
  //   prerequisites: ["No prior coding required"],
  //   tools: ["toolId11"],
  //   aiTools: ["toolId12"],
  // },
  // {
  //   id: "6",
  //   courseIndex: 6,
  //   courseId: "ocndsa",
  //   category: "data-structures",
  //   title: "Data Structures & Algorithms in Java",
  //   description: "Master DSA concepts with Java and crack coding interviews.",
  //   bannerImage: "firebase_url/dsa_banner.png",
  //   cardImage: COURSEIMAGE,
  //   price: 6499,
  //   discountPercentage: 20,
  //   originalPrice: 8124,
  //   duration: "9 weeks",
  //   totalHours: 45,
  //   students: 2700,
  //   syllabusLink: "firebase_url/dsa_syllabus.pdf",
  //   technologies: ["Java", "Data Structures", "Algorithms"],
  //   whatYouWillLearn: [
  //     "Arrays, Linked Lists, Stacks, Queues",
  //     "Recursion & Backtracking",
  //     "Sorting & Searching Algorithms",
  //     "Dynamic Programming",
  //   ],
  //   modules: [
  //     {
  //       moduleName: "Module 1: Basics & Arrays",
  //       topicsCovered: ["Arrays", "Strings", "Recursion"],
  //       handsOnProjects: ["String Reversal Tool", "Array Analyzer"],
  //     },
  //     {
  //       moduleName: "Module 2: Linked Lists & Trees",
  //       topicsCovered: ["Singly Linked List", "Binary Trees"],
  //       handsOnProjects: [
  //         "Custom Linked List Library",
  //         "Binary Tree Traversal",
  //       ],
  //     },
  //     {
  //       moduleName: "Module 3: Algorithms",
  //       topicsCovered: ["Sorting", "Searching", "Dynamic Programming"],
  //       handsOnProjects: ["Sorting Visualizer", "Path Finder App"],
  //     },
  //   ],
  //   prerequisites: ["Basic Java knowledge required"],
  //   tools: ["toolId13"],
  //   aiTools: [],
  // },
  // {
  //   id: "7",
  //   courseIndex: 7,
  //   courseId: "ocnai",
  //   category: "ai-ml",
  //   title: "AI & Machine Learning Bootcamp",
  //   description:
  //     "Dive into Machine Learning and AI with Python and TensorFlow.",
  //   bannerImage: "firebase_url/ai_banner.png",
  //   cardImage: COURSEIMAGE,
  //   price: 8999,
  //   discountPercentage: 35,
  //   originalPrice: 13845,
  //   duration: "14 weeks",
  //   totalHours: 70,
  //   students: 3200,
  //   syllabusLink: "firebase_url/ai_syllabus.pdf",
  //   technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
  //   whatYouWillLearn: [
  //     "Machine Learning fundamentals",
  //     "Supervised & Unsupervised learning",
  //     "Deep Learning with TensorFlow",
  //     "AI project deployment",
  //   ],
  //   modules: [
  //     {
  //       moduleName: "Module 1: ML Foundations",
  //       topicsCovered: [
  //         "Linear Regression",
  //         "Logistic Regression",
  //         "Data Preprocessing",
  //       ],
  //       handsOnProjects: ["House Price Predictor", "Customer Churn Model"],
  //     },
  //     {
  //       moduleName: "Module 2: Advanced ML",
  //       topicsCovered: ["Decision Trees", "Random Forest", "Clustering"],
  //       handsOnProjects: ["Spam Classifier", "Customer Segmentation"],
  //     },
  //     {
  //       moduleName: "Module 3: Deep Learning",
  //       topicsCovered: ["Neural Networks", "CNNs", "RNNs"],
  //       handsOnProjects: ["Image Classifier", "Sentiment Analysis"],
  //     },
  //   ],
  //   prerequisites: ["Basic Python programming knowledge"],
  //   tools: ["toolId14"],
  //   aiTools: ["toolId15", "toolId16"],
  // },
];
