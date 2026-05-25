export const dataFAQs = [
    {
        question: 'Why use both React Native and Flutter?',
        answer: 'I choose the tech stack based on project requirements. React Native is ideal when sharing business logic with web platforms (Next.js), while Flutter is my go-to for rendering complex UIs and smooth animations.'
    },
    {
        question: 'How do you handle Full-stack development efficiently?',
        answer: 'My approach is architecture-first. I design databases and write Swagger UI docs to lock down data flows before building UIs. Additionally, I leverage CI/CD pipelines (Codemagic, GitHub Actions) to automate deployments.'
    },
    {
        question: 'How do you optimize app performance and prevent memory leaks?',
        answer: 'I strictly manage the App Life-cycle. For instance, I integrated Socket.IO directly into RTK Query and managed WebSocket connections based on screen mounts/unmounts. This eliminates memory leaks and ensures a stable 60FPS.'
    },
    {
        question: 'How do you collaborate within an Agile/Scrum team?',
        answer: 'I believe in communicating through processes and documentation. Tracking tasks in Jira, reviewing code via Git PRs, and maintaining up-to-date Swagger UI docs ensures the Mobile, Web, and Backend teams stay perfectly synced.'
    },
    {
        question: 'What are your career goals for the next 1-2 years?',
        answer: 'To grow as a T-shaped Engineer: deeply specializing in Cross-platform Mobile & Performance Optimization, while expanding my Cloud infrastructure skills (currently studying for AWS) to independently architect and deploy scalable systems.'
    }
];


export const projectsData = [
    {
        id: "proj_homenest_01",
        title: "HomeNest Software",
        time: "Aug 2024 - Present",
        des: "Web/Mobile Developer",
        responsibilities: [
            "Developed both a cross-platform mobile application (React Native, TypeScript) and an SEO optimized web platform (Next.js, React).",
            "Configured WordPress CMS and GraphQL for dynamic web content.",
            "Integrated Helcim payments via JS Bridge/WebView with real-time synchronization.",
            "Integrated react-i18next for React Native app localization (i18n).",
            "Integrated Socket.IO with RTK Query for zero-latency chat, direct cache updates, and on-demand subscriptions.",
            "Built RESTful APIs and backend services utilizing Node.js, Prisma, and PostgreSQL (managed via pgAdmin & Docker), implementing secure authentication flows (JWT, OTP, Google Login).",
            "Designed interactive API documentation via Swagger UI, ensuring seamless API testing and frontend-backend synchronization.",
            "Supported deployed apps to Appstore and Google Play, resolving technical rejections.",
            "Collaborated in an Agile/Scrum environment, utilizing Jira for task tracking and daily stand-ups."
        ]
    },
    {
        id: "proj_choixanh_02",
        title: " Choi Xanh Media ",
        time: "Nov 2024 - Jan 2025",
        des: "Mobile Developer",
        responsibilities: [
            "Developed a full-stack Food Delivery application, building a high-performance mobile interface (Flutter, Dart) and scalable backend services (Node.js, MongoDB).",
            "Architected mobile front-end solutions: Implemented Service Layer architecture and AutoRoute for robust navigation, while enhancing UI/UX with Flutter Animations, optimized lists (ListView.builder), and dynamic media handling (ImageKit).",
            "Built secure backend APIs & integrations: Developed RESTful APIs using Express, integrated multi-method authentication (Social Login & Email OTP), and utilized Mapbox API for location-based delivery features.",
            "Streamlined deployment workflows: Automated CI/CD pipelines utilizing Codemagic and GitHub Actions to ensure stable data flow and rapid releases within an Agile/Jira environment."
        ]
    }
];

export const skillsData = [
    {
        id: "skills_lang_01",
        title: "Languages",
        des: "Programming Languages",
        responsibilities: [
            "JavaScript & TypeScript",
            "Dart",
            "Java & Kotlin"
        ]
    },
    {
        id: "skills_fw_02",
        title: "Frameworks",
        des: "Libraries & UI Frameworks",
        responsibilities: [
            "React.js & Next.js",
            "React Native",
            "Flutter",
            "Jetpack Compose"
        ]
    },
    {
        id: "skills_be_03",
        title: "Backend",
        des: "Backend Infrastructure",
        responsibilities: [
            "Node.js",
            "Express",
            "MongoDB"
        ]
    },
    {
        id: "skills_04",
        title: "Tools",
        responsibilities: [
            "Figma",
            "Postman & Swagger UI",
            "Docker & Git",
            "Jira & Trello"
        ]
    }
];