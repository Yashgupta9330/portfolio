import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Gupta",
  initials: "YG",
  url: "https://dillion.io",
  location: "Kolkata, India",
  locationLink: "https://www.google.com/maps/place/Kolkata",
  description:
    "Building full-stack web applications and finding solutions with tech.",
  summary:
    "As a passionate full-stack web developer, I'm on a goal to innovate solutions that captivate, inspire and leave a lasting impact on the life of the masses. Skilled in the MERN stack with Next JS, and more - I love bringing ideas to code 🚀.",
  avatarUrl: "/me.png",
  "skills": [
    "React",
    "Node.js",
    "Next.js",
    "MongoDB",
    "Mongoose",
    "Prisma",
    "PostgreSQL",
    "JavaScript",
    "Tailwind CSS",
    "C/C++",
    "HTML/CSS",    
    "Langchain",
    "Git",
    "python",
    "Djaongo",
    "CICD",
    "GitHub",
    "Docker",
    "Postman",
    "Visual Studio",
  ],
  skillicons: "next,react,nodejs,mongodb,express,prisma,postgres,ts,js,cicd,python,django,redis,redux,tailwind,cpp,html,css,git,github,docker,postman,vscode,vite,solidity,pnpm,npm",
  "navbar": [
    { "href": "/", "icon": HomeIcon, "label": "Home" },
    { "href": "/blog", "icon": NotebookIcon, "label": "Blog" }
  ],
  contact: {
    email: "yaahg342@gmail.com",
    tel: "+919330575742",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Yashgupta9330",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yash-gupta-64956b246/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Yashgup46036097",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Hyperly.ai",
      href: "https://www.hyperly.ai/",
      badges: [],
      location: "Remote",
      title: "Full Stack Intern",
      logoUrl: "/ideation.jpg",
      start: "Aug 2024",
      end: "Oct 2024",
      description:
        "Developed a YouTube to LinkedIn Post Generator using Astro and React, integrating transcript extraction, AI-powered summarization with OpenAI, and automated LinkedIn post creation for enhanced content workflow; created a Fake LinkedIn Post Generator Page with Astro for dynamic, responsive UI using fast SSR and React components; built dynamic Home and Analytics Pages for a Chrome Extension using React and TypeScript, implementing seamless navigation, responsive design, and efficient state management to optimize UX and performance.",
    },
{
  company: "Ideation People Solutions",
    badges: [],
      href: "https://www.ideationpeople.com/",
        location: "Remote",
          title: "Frontend Developer",
            logoUrl: "/hyperly.jpg",
              start: "Jun 2024",
                end: "Aug 2024",
                  description:"Migrated the codebase from Vue.js to Next.js to enhance maintainability and scalability; developed and integrated a contact form with Firebase for efficient data storage and real-time updates; implemented Firebase Authentication to secure user data and strengthen application security.",
    },
  ],
education: [
  {
    school: "Institute of Engineering and Managment",
    degree: "BTech - Computer Science and Engineering(IOT)",
    start: "2022",
    end: "2026",
    logoUrl: "/iem.jpg",
    href: "https://iem.edu.in/",
  },
  {
    school: "Calcutta Public School",
    degree: "ISC -XII",
    start: "2019",
    end: "2021",
    logoUrl: "/cps.jpg",
    href: "https://calcuttapublicschools.com/",
  },
],
  projects: [
    {
      title: "Codebox AI",
      href: "https://codeboxai.live/",
      dates: "Jan 2024 - Mar 2024",
      active: true,
      description:
        "CodeBox AI — a platform I created to help people prepare for technical interviews using AI. Users can practice DSA questions in multiple languages, and the platform also simulates AI-driven interviews for specific DSA problems",
      technologies: [
        "React",
        "Typescript",
        "PostgreSQL",
        "Python",
        "Django",
        "Docker",
        "AWS",
        "Langchain",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://codeboxai.live/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://media-hosting.imagekit.io/86a20e6f83664f93/0315%20(1).mp4?Expires=1838403282&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=luXCvEdg5EqzTEnge3Eu6JFAZAQTnxuvROF8eCH6hrfrw4XRn82nK-zVIBtAfUUzLkHVhFDC5Lm0NEBKcPOQi1qjzXgvrQ4euytQBktJgBr~nmDVfgrUdNfJHSrcp2qr69~uMcqudIncGAzNKXneb7XQ09~QxyqNw~h1cYyfBU8mpbRT5va4nz4oLMeDhmQS~zYZ6mwmMKD6Kb3PgqKdmmEep1p6-j-qnuZgzljNONBWHuvTQZoDvnKjyxh1VeKG4Z5qlqguDTly02zL4Q-JKIgmuKd-ewyd7YelEHjSKp2rnNnTGMmMGBHvMEJvVjyMimoSccD2BO5tuCVxqj-~HA__",
    },
    {
      "title": "WroteUs",
      href: "https://wrote-us.vercel.app",
      "dates": "Feb 2024 - March 2024",
      "description": "Developed a real-time collaborative whiteboard platform using Next.js, Redux Toolkit, Socket.IO, and HTML Canvas for drawing features.",
      "technologies": ["Next.js", "Redux Toolkit", "Socket.IO", "Node.js", "Tailwind CSS"],
      "links": [
        {
          type: "GitHub",
          href: "https://github.com/harsh3dev/WroteUS",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://wroteus.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "",
      video: "/wroteusvideo - Trim.mp4",
    },
    {
      "title": "TickrNet",
      href: "",
      "dates": "July 2024 - Aug 2024",
      "description": "Built a decentralized ticketing platform using Solidity and Hardhat on Avalanche Fuji Testnet.",
      "technologies": ["Next.js", "Solidity", "Hardhat", "Web3.js", "Redux Toolkit", "Tailwind CSS"],
      "links": [
        {
          type: "GitHub",
          href: "https://github.com/harsh3dev/hackermen",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video: "/tickernetvideo.mp4",
    },
    {
      "title": "DevMatchups",
      href: "https://devmatchups.vercel.app",
      "dates": "Aug 2024 - Present",
      "description": "Developed a platform to connect developers worldwide for hackathons. Integrated Next Auth with Google and GitHub.",
      "technologies": ["Next.js", "Prisma ORM", "PostgreSQL", "Redis", "Zod", "Redux Toolkit"],
      "links": [
        {
          type: "GitHub",
          href: "https://github.com/harsh3dev/devmatchups",
          icon: <Icons.github className="size-3" />,

        },
        {
          type: "Website",
          href: "https://devmatchups.vercel.app",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/devmatchupsimg.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IEM Hackoasis 1.0",
      dates: "September 28th 2024",
      location: "IEM Gurukul, Kolkata",
      description:
        "built an AI-Powered Cybersecurity Threat Detection Platform that monitors network traffic and detects potential cybersecurity threats in real-time.",
      image:
        "/hackoasis.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/harsh3dev/hackoasis1",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Buildspace S5",
      dates: "June 5th - Aug 31st, 2024",
      location: "Online",
      description:
        "Participated in the Buildspace S5 cohort, building full-stack web applications using Next.js, Prisma, and PostgreSQL.",
      image:
        "/buildspace.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/harsh3dev/devmatchups",
          icon: <Icons.github className="size-3" />,
        },
        {
          title: "Website",
          href: "https://devmatchups.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Hack4Bengal 3.0",
      dates: "June 28rd - 30th, 2024",
      location: "Kalyani, Kolkata",
      description:
        "Developed a decentralized ticketing platform hosted on Avalanche Fuji Testnet, leveraging Solidity and Hardhat for smart contract development.",
      image:
        "https://media.licdn.com/dms/image/v2/D560BAQGix3PITG0ixw/company-logo_200_200/company-logo_200_200/0/1698558226426/hack4bengal_logo?e=1735171200&v=beta&t=SxIrPUcsbqGlx_tPkM6lD0MjZT-0qa7AJp_VDvdRJiI",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [
        {
          title: "GitHub",
          href: "https://github.com/harsh3dev/hackermen",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "HackAI",
      dates: "March 8th - 10th, 2024",
      location: "IEM, Kolkata",
      description:
        "Developed a Celebrity face generator project using deep learning DCGAN neural network to generate realistic faces from celebrity images.",
      image:
        "/innovacion2k24-logo.png",
      links: [],
    },
    {
      title: "IEM Hacks 2.0",
      dates: "August 26th - 28th, 2023",
      location: "IEM, Kolkata",
      description:
        "Developed an online store for farmers to sell their products directly to consumers, using React, Node.js, and MongoDB.",
      image:
        "/356401959_607371667873287_4199940680176059304_n.jpg",
      links: [],
    },
  ],
"achievements": [
"1st Runner-up, Hack4Bengal 3.0 (Best Built on Avalanche Track)",
"Frontend Lead, Innovacion IEM"
]
} as const;