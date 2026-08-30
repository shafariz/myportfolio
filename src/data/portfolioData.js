// src/data/portfolioData.js

import profileImg from '../assets/profile.jpg';
import unmulLogo from '../assets/unmul.png';
import granadaLogo from '../assets/granada.png';

import posyanduImg from '../assets/posyandu.webp';
import favobooksImg from '../assets/favobooks.webp';
import oemahKeboenImg from '../assets/oemah-keboen.webp';
import kiloanImg from '../assets/kiloan.webp';
import airBersihImg from '../assets/air-bersih.webp';
import salbeautyImg from '../assets/salbeauty.webp';

export const portfolioData = {
  hero: {
    greeting: "Hello, I'm",
    name: "shafa.",
    role1: "Aspiring Data Analyst",
    role2: "& Front-End Developer",
    image: profileImg 
  },

  about: {
    titleLine1: "TRANSLATING",
    titleHighlight: "logic",
    titleLine2: "INTO CREATIVE DIGITAL SOLUTIONS",
    
    introText: "I'm ",
    nameText: "Shafa Rizqi Nur Wahidah",
    descText: ", an Information Systems student at Universitas Mulawarman with a strong interest in Front-End Development and Data Analytics. I love turning ideas into engaging digital experiences, collaborating on creative projects, and exploring how technology can solve real-world problems.",
    
    education: [
      {
        id: 1,
        institution: "Universitas Mulawarman",
        major: "Information Systems",
        period: "2024 - Present",
        logo: unmulLogo
      },
      {
        id: 2,
        institution: "SMA Islam Terpadu Granada",
        major: "Science (IPA)",
        period: "2021 - 2024",
        logo: granadaLogo
      }
    ],

    skills: [
      {
        category: "Web Development",
        items: [
          { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
          { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
          { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
          { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" }
        ]
      },
      {
        category: "Mobile Apps",
        items: [
          { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
          { name: "Dart", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg" }
        ]
      },
      {
        category: "Data Analytics",
        items: [
          { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
          { name: "Tableau", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Tableau_Logo.png" },
          { name: "Power BI", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" }
        ]
      }
    ]
  },

  experiences: [
    {
      id: 1,
      date: "AUGUST 2026 — PRESENT",
      title: "Student Intern",
      organization: "Diskominfo Kota Samarinda",
      description: [
        "Assigned to Division IV \"Applications and E-Government Services\", focusing on learning and developing skills in Web Development."
      ]
    },
    {
      id: 2,
      date: "AUGUST 2026 — PRESENT",
      title: "Data Science Student",
      organization: "ASAH led by Dicoding",
      description: [
        "Learning and developing skills in Data Science through a structured learning program.",
        "Exploring Python, SQL, Machine Learning, and other fundamental Data Science concepts.",
        "Working on learning activities and projects to strengthen practical understanding of Data Science."
      ]
    },
    {
      id: 3,
      date: "APRIL 2026 — PRESENT",
      title: "Member Batch 4",
      organization: "Novo Club by Paragon Corp",
      description: [
        "Participating in the Social Movement Class and developing skills through 3 Fundamental Classes and 3 Mastery Classes.",
        "Currently working on a group project under the Social Impact Hub, PIC Globerse.",
        "Together with the team, organizing a webinar titled “Speak Up & Lead On: Mengasah Kemampuan Public Speaking & Keorganisasian untuk Generasi Muda.”"
      ]
    },
    {
      id: 4,
      date: "FEBRUARY 2025 — JANUARY 2026",
      title: "Bureau of Entrepreneurship Development Staff",
      organization: "Information System Association (INFORSA)",
      description: [
        "Contributed to AKSA (Career Acceleration), a career-focused program organized for bureau staff.",
        "Participated in various committees and organizational activities, including Public Relations & Fundraising at INSEVENT, Fundraising Division at APLIKASI, and Publication, Documentation & Design (PDD).",
        "Collaborated with team members in planning and supporting organizational programs and events."
      ]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Website Posyandu Loa Duri Ulu",
      subtitle: "Posyandu Information System",
      role: "Front-End Developer",
      type: "Team Project",
      image: posyanduImg,
      about: "A web-based platform designed to streamline health data reporting for the Posyandu in Loa Duri Ulu Village. This website also features an interactive BMI calculator that the general public can use to monitor their body mass index independently.",
      problemSolved: "Overcame the challenges of manual community health record-keeping, making the data processing and reporting workflows significantly more efficient, structured, and accurate."
    },
    {
      id: 2,
      title: "Favobooks",
      subtitle: "Favorite Book List App",
      role: "Full-Stack Developer",
      type: "Solo Project",
      image: favobooksImg,
      about: "A personal book management application that allows users to record, categorize, and organize their favorite book lists and reading goals in one convenient digital space.",
      problemSolved: "Solved the issue of disorganized or forgotten book tracking, helping users monitor their reading progress and build a more consistent reading habit."
    },
    {
      id: 3,
      title: "Website Oemah Keboen Samarinda",
      subtitle: "Company Profile & Information System",
      role: "Front-End Developer",
      type: "Team Project",
      image: oemahKeboenImg,
      about: "A company profile and information system website for the Oemah Keboen Samarinda tourist destination. Key features include a showcase of tourist facilities, local produce/product purchasing, and an interactive calendar-based reservation system.",
      problemSolved: "Addressed the lack of widespread public information about Oemah Keboen while preventing double-booking issues for visitors through seamless booking calendar integration."
    },
    {
      id: 4,
      title: "KILOAN",
      subtitle: "Laundry Management App",
      role: "Front-End Developer",
      type: "Team Project",
      image: kiloanImg,
      about: "A laundry business management application that integrates digital receipt generation, monthly financial recaps (income & expenses), and a real-time laundry tracking feature for customers.",
      problemSolved: "Eliminated manual financial recording and unrecorded customer debt risks, while providing transparency so customers can track their laundry status without repeatedly asking the staff."
    },
    {
      id: 5,
      title: "Clean Water Management System",
      subtitle: "Database Management System",
      role: "Database",
      type: "Team Project",
      image: airBersihImg,
      about: "A Java-based (NetBeans) university practicum project designed to manage and record the operational data of a clean water management system.",
      problemSolved: "Applied Java programming concepts and structured data management to streamline the recording workflow and allocate data efficiently through a desktop application."
    },
    {
      id: 6,
      title: "Salbeauty",
      subtitle: "Cosmetic Recommendation System",
      role: "Data Analyst & Front-End Developer",
      type: "Team Project",
      image: salbeautyImg,
      about: "An interactive cosmetic product recommendation system based on Kaggle dataset analysis. Users can select product preferences (such as lip products or other cosmetics), and the system will display top recommendations based on customer reviews and ratings.",
      problemSolved: "Solved consumer confusion in choosing the right, high-quality cosmetic products among countless market options by providing objective recommendations backed by highly-rated review data."
    }
  ],

  contact: {
    email: "shafarizqinurwahidah@student.unmul.ac.id",
    linkedin: "https://www.linkedin.com/in/shafariz/",
    instagram: "https://instagram.com/sshafariz"
  }
};