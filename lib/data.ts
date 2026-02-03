export const PERSONAL_INFO = {
    name: 'Vivekananda',
    fullName: 'Vivekananda Godi',
    title: 'Full Stack Developer',
    email: 'vivekanandagodi@gmail.com',
    shortBio:
        'Full Stack Developer skilled in building scalable applications...',
    aboutMe: {
        headline:
            'I focus on building clean, scalable, and performance-driven applications.',
        greeting: "Hi, I'm Vivekananda.",
        description: [
            'I am a full stack web developer who cares deeply about building intuitive applications.',
            'My approach combines strong frontend UI engineering with solid backend fundamentals.',
        ],
    },
    stats: {
        yearsOfExperience: '2+',
        completedProjects: '10+',
        hoursWorked: '3000+',
    },
    emailSubject: "Let's collaborate",
    emailBody: 'Hi, I am reaching out to you because...',
    oldPortfolio: '',
    upworkProfile: '',
};

export const GENERAL_INFO = {
    email: PERSONAL_INFO.email,
    emailSubject: PERSONAL_INFO.emailSubject,
    emailBody: PERSONAL_INFO.emailBody,
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/mr-nobofy-7' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/vivekananda-godi/' },
];

export const MY_STACK = {
    Frontend: [
        { name: 'React', icon: '/logo/react.svg' },
        { name: 'Next.js', icon: '/logo/nextjs.svg' },
        { name: 'TypeScript', icon: '/logo/typescript.svg' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.svg' },
        { name: 'JavaScript', icon: '/logo/javascript.svg' },
        {name: 'Redux', icon: '/logo/redux.svg' },
    ],
    Backend: [
        { name: 'Node.js', icon: '/logo/nodejs.svg' },
        { name: 'Express', icon: '/logo/express.svg' },
    ],
    Database: [
        { name: 'MongoDB', icon: '/logo/mongodb.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgresql.svg' },
        { name: 'MySQL', icon: '/logo/mysql.svg' },
    ],
    Devops: [
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Git', icon: '/logo/git.svg' },
        { name: 'AWS', icon: '/logo/aws.png' },
    ]
};

export const MY_EXPERIENCE = [
    {
        company: 'Candy Technologies Pvt. Ltd.',
        title: 'Full Stack Developer',
        duration: 'Jun 2023 – Present',
    },
];

export const PROJECTS = [
    {
        title: 'Project One',
        year: 2024,
        description: '<p>A detailed description of your project...</p>',
        role: 'Full Stack Developer',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/project1.jpg',
        longThumbnail: '/projects/long/project1.jpg',
        images: ['/projects/images/project1-1.jpg'],
        slug: 'project-one',
        liveUrl: 'https://example.com',
        sourceCode: 'https://github.com/yourusername/project',
    },
];