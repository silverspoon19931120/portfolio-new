// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6,
    reynen,
    sana,
    abcd,
    imcd,
} from "../assets";

// Navbar Links
export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
        link: "http://www.github.com/Technical-Shubham-tech/3d-portfolio/",
    },
];

// Services
const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

// Technologies
const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

// Experiences
const experiences = [
    {
        title: "React Developer",
        company_name: "Meta, Menlo Park, CA",
        icon: "R",
        iconBg: "white",
        date: "01/2020 – 03/2024",
        points: [
            "Participated in developing Meta Internal system with React, Next.js and Flask.",
            "Led development team of 10 to create new features, Worked on Agile environment to manage team, project. ",
            "React version upgrade, updating class components to functional components, bug fixing, state management. ",
            "Converted Figma design to React components, SEO, mobile responsive that allowed cross platform accessibility.",
            "Built API using Flask microframework to allow internal FB users to submit their work. ",
            "Deployed the application on AWS cloud and managed its server infrastructure. ",
            "Mentored 4 junior front-end engineers on the team, expanding their React skillset.",
        ],
    },
    {
        title: "React Developer",
        company_name: "Yutopia, Littleton, CO",
        icon: "K",
        iconBg: "#151b1c",
        date: "05/2016 – 12/2019",
        points: [
            "Led React development for an insurance web app (policy, claims, payments, analytics, compliance).",
            "Successfully managed version upgrades to React, ensuring smooth integration and maintaining code quality.",
            "Conducted thorough unit testing (Jest) to achieve high application reliability.",
            "Collaborated with Python Flask back-end developers, ensuring project progress and successful releases.",
            "Thrived in an Agile Scrum environment, showcasing teamwork and effective communication.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Daibes Enterprise, Edgewater, NJ",
        icon: "C",
        iconBg: "#050506",
        date: "04/2014 – 05/2016",
        points: [
            "Led MERN stack development for an apartment management system, enhancing resident experience.",
            "Designed interactive dashboards with Highcharts for insightful data visualization.",
            "Implemented React Material components for improved UI and user experience.",
            "Managed resident, room, parking, elevator, and cleaning functionalities seamlessly.",
        ],
    },
    
];

// Testimonials
const testimonials = [
    {
        testimonial:
            "Extremely helpful, user-friendly, innovative and reliable. Very satisfactory outcome, knowing that I can go back to them at any time for further help.",
        name: "Don Wilson",
        designation: "CEO",
        company: "DRW",
        image: "./don.jpg",
    },
    {
        testimonial:
            "I did have a nice time working with you, your work on Document AI was particularly brilliant and made an impact.",
        name: "Scott Olson",
        designation: "CFO",
        company: "DaisyAI",
        image: "./scott.jpg",
    },
    {
        testimonial:
            "We have always found The Web Surgery a pleasure to work with. Aleksandar has been flexible, helpful and efficient - excellent value for money",
        name: "Tony Hsieh",
        designation: "CEO",
        company: "Zappos",
        image: "./tony.jpg",
    },
   
    
];

// Projects
const projects = [
    {
        name: "Karaage",
        description:
            "Karaage provides detailed instructions on how to prepare karaage, including the ingredients needed, step-by-step instructions, and photos to help readers visualize the process.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Rapid Api",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: project2,
        source_code_link: "https://github.com/Dmoon16/Karaage.git",
        live_site_link: "https://www.karaage.com/",
    },
    {
        name: "Adventure Academy",
        description:
            "Adventure Academy is an online educational platform designed for children between the ages of 8 and 13. Built with React, the website provides an interactive learning experience in a virtual world environment.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Rapid Api",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: project5,
        source_code_link: "https://github.com/Dmoon16/adventure-front",
        live_site_link: "https://www.adventureacademy.com/",
    },

    {
        name: "Supermetrics",
        description:
            "Supermetrics is a data analytics tool that allows users to gather and analyze data from multiple sources, such as social media platforms, advertising networks, and website analytics tools, all in one place.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Syncfusion",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: project3,
        source_code_link: "https://github.com/Dmoon16/supermetrics-saas/",
        live_site_link: "https://supermetrics.com/",
    },
    {
        name: "Europa777",
        description:
            "Europa777 is an online sports betting and casino platform that allows users to place bets on a variety of sports events and play casino games from their computers or mobile devices.",
        tags: [
            {
                name: "Nuxt",
                color: "blue-text-gradient",
            },
            {
                name: "Quasar",
                color: "green-text-gradient",
            },
            {
                name: "TailwindCSS",
                color: "pink-text-gradient",
            },
        ],
        image: project1,
        source_code_link: "https://github.com/Dmoon16/game777.git",
        live_site_link: "https://game777.vercel.app/",
    },
    {
        name: "MYGLAMM ",
        description:
            "MYGLAMM is an Next JS Web Application that offers a variety of makeup, skincare, and personal care products for online purchase. It is an best e-commerce platform for beauty and cosmetic products",
        tags: [
            {
                name: "Next",
                color: "blue-text-gradient",
            },
            {
                name: "GraphQL",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: project4,
        source_code_link: "https://github.com/Dmoon16/myglamm",
        live_site_link: "https://www.myglamm.com/",
    },

    {
        name: "Nefty Market",
        description:
            "World’s First Solana NFT Marketplace with Virtual Reality with Next. Explore, Buy, Sell and Create NFT’s on this Solana Marketplace. All NFTs on this site have been vetted for provenance and authenticity.",
        tags: [
            {
                name: "Next",
                color: "blue-text-gradient",
            },
            {
                name: "Rarible API",
                color: "green-text-gradient",
            },
            {
                name: "MUI",
                color: "pink-text-gradient",
            },
        ],
        image: project6,
        source_code_link: "https://github.com/Dmoon16/nefty-nft",
        live_site_link: "https://nefty-nft.vercel.app/#/",
    },
];

export { services, technologies, experiences, testimonials, projects };
