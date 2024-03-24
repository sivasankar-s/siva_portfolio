import { iit, nit, adoreapet, crimealert, wormholeclone, crackathon } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    prisma,
    java
} from "../assets/icons";

export const skills = [
    
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Language",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    
    {
        imageUrl: prisma,
        name: "Prisma",
        type: "ORM",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
    
    
];

export const experiences = [
    {
        title: "Intern",
        company_name: "IIT Patna",
        icon: iit,
        iconBg: "#accbe1",
        date: "2023",
        points: [
            "Developed a clone of Wormhole.app under the guidance of Dr. Mayank Agarwal, IIT professor.",
            "Implemented robust data synchronization using React.js and Firebase.",
            "Integrated TinyURL API for efficient link shortening and crafted an intuitive UI with Tailwind CSS."
        ],
    },
    {
        title: "Intern",
        company_name: "NIT Tiruchirappalli",
        icon: nit,
        iconBg: "#fbc3bc",
        date: "2023",
        points: [
            "Led the development of \"Adore A Pet\" under the mentorship of Dr. Balasundaram, an esteemed NIT professor.",
            "Crafted a purpose-driven web application aimed at facilitating pet adoption and minimizing instances of pets being abandoned on streets due to the inability to find a suitable owner.",
            "Leveraged cutting-edge technologies such as Next.js, MongoDB, Prisma, NextAuth.js, and Tailwind CSS to create a seamless and secure user experience.",
            "Implemented a comprehensive system for users to share pet details, fostering a community-driven approach to pet adoption and responsible ownership.",
            "Demonstrated adeptness in addressing real-world challenges through innovative and ethical software solutions."
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: adoreapet,
        theme: 'btn-back-red',
        name: 'Adore A Pet',
        description: 'Developed a web application (Pet Adoption Site) that allows users to give their pet and other users to contact the pet owners for Adoption. This is made for people who leave their pets in streets as they cannot find owners for them.',
        techstack: 'Next.js, MongoDB, Prisma, NextAuth.js, TailwindCSS',
        link: 'https://adore-a-pet.vercel.app/',
    },
    {
        iconUrl: crimealert,
        theme: 'btn-back-green',
        name: 'Crime Alert Web App',
        description: 'Created a Web app where can users can share about local crime incidents in their surroundings, and other users are notified and aware of it.',
        techstack: 'React.js, Firebase, Twilio API, EmailJS API, TailwindCSS',
        link: 'https://crime-alert.netlify.app/',
    },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Wormhole.app Clone',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     techstack: 'Next.js, MongoDB, Prisma, TailwindCSS',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    {
        iconUrl: crackathon,
        theme: 'btn-back-blue',
        name: 'Crackathon 2.0',
        description: 'Built a responsive landing page for a 24 hours Hackathon event organized by our department in our College',
        techstack: 'React.js, TailwindCSS',
        link: 'https://crackathon24.online',
    },
    {
        iconUrl: wormholeclone,
        theme: 'btn-back-pink',
        name: 'Wormhole Clone',
        description: 'Built a simple clone of Wormhole.app, allowing users to share files using generated link.',
        techstack: 'React.js, Firebase, TinyURL API, TailwindCSS',
        link: 'https://trans-file.netlify.app/',
    },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     techstack: 'Next.js, MongoDB, Prisma, TailwindCSS',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     techstack: 'Next.js, MongoDB, Prisma, TailwindCSS',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];