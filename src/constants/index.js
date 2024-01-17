import { iit, nit } from "../assets/images";
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
    prisma
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
    {
        imageUrl: sass,
        name: "Sass",
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
            "Developed a clone of Wormhole.app using React.js and firebase",
            "Worked under Professor Dr.Mayank Agarwal during the project",
        ],
    },
    {
        title: "Intern",
        company_name: "NIT Tiruchirappalli",
        icon: nit,
        iconBg: "#fbc3bc",
        date: "2023",
        points: [
            "Developed a Pet adoption site using Next.js and other related technologies.",
            "Worked under Professor Dr.Balasundaram during the project",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Adore A Pet',
        description: 'Developed a web application (Pet Adoption Site) that allows users to give their pet and other users to contact the pet owners for Adoption. This is made for people who leave their pets in streets as they cannot find owners for them.',
        techstack: 'Next.js, MongoDB, Prisma, NextAuth.js, TailwindCSS',
        link: 'https://adore-a-pet.vercel.app/',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Crime Alert Web App',
        description: 'Created a Web app where can users can share about local crime incidents in their surroundings, and other users are notified and aware of it.',
        techstack: 'React.js, Firebase, TailwindCSS',
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
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Wormhole Clone',
        description: 'Built a simple clone of Wormhole.app, allowing users to share files using generated link.',
        techstack: 'React.js, Firebase, TailwindCSS',
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