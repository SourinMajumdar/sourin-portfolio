const projects = [
  {
    id: 1,
    title: 'Trackmate',
    subtitle: 'Job Application Tracker',
    description: 'A serverless full-stack job application tracker built with React and Firebase, providing secure authentication, per-user data storage, real-time updates, and advanced filtering through an intuitive dashboard.',
    image: '/trackmate.png',
    technologies: ['React.js', 'JavaScript', 'CSS', 'Firebase', 'Cloud Firestore'],
    features: [
      'Secure authentication with per-user accounts',
      'Add, edit, delete and search job applications and important dates',
      'Status-based filtering with interactive insights',
      'Real-time cloud sync with per-user data isolation',
    ],
    githubUrl: 'https://github.com/SourinMajumdar/job-application-tracker',
    liveUrl: 'https://trackmateui.netlify.app/'
  },
  {
    id: 2,
    title: 'Devmate',
    subtitle: 'A developer dashboard and lightweight portfolio',
    description: 'Devmate is a full-stack developer dashboard designed to help developers manage projects, track activity, and showcase their work through a shareable profile. It combines project management, GitHub activity insights, and portfolio-style presentation in a clean, centralized interface.',
    image: '/devmate.png',
    technologies: ['React.js', 'JavaScript', 'Vite', 'CSS', 'Supabase', 'GitHub API'],
    features: [
      'Centralized dashboard for managing and showcasing developer projects',
      'Authentication and cloud persistence using Supabase',
      'Project CRUD system with add, edit, and delete workflows',
      'GitHub activity integration with a unified activity timeline',
      'Shareable public developer profile page'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/devmate',
    liveUrl: 'https://devmateui.vercel.app/'
  },
  {
    id: 3,
    title: 'SignMate',
    subtitle: 'Email Signature Builder',
    description: 'A modern, browser-based email signature generator for creating professional, brand-consistent signatures in seconds. Built with React and optimized for major email clients.',
    image: '/signmate.png',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Multiple responsive signature templates',
      'Custom brand color system with live preview',
      'Photo upload & conditional social icons',
      'Email-safe table-based rendering (Gmail, Outlook, Apple Mail)'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/SignMate',
    liveUrl: 'https://signmateui.vercel.app/'
  },
  {
    id: 4,
    title: 'Jora Ilish',
    subtitle: 'Restaurant Website',
    description: 'A modern, responsive website designed for Jora Ilish, a popular Bengali restaurant in Guwahati. The site showcases the restaurant’s menu, gallery, customer reviews, and location to provide customers with an easy way to explore the restaurant online.',
    image: '/jorailish.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Responsive hero slider showcasing signature dishes',
      'Interactive full menu with category navigation and search',
      'Gallery section displaying restaurant ambience and food',
      'Customer testimonials carousel with Google review integration',
      'Location, opening hours, and delivery platform links'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/jorailish',
    liveUrl: 'https://jorailish.vercel.app/'
  },
  {
    id: 5,
    title: 'WedlocK Photography',
    subtitle: 'Wedding Photographer Portfolio',
    description: 'A modern, elegant portfolio website designed for Wedlock Photography, a wedding photography and cinematography team based in Guwahati, Assam. The website focuses on showcasing their storytelling style through a clean, minimalist layout, immersive gallery, and smooth interactions that reflect the premium nature of their work.',
    image: '/wedlock.png',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Full-screen cinematic hero section with smooth scroll interactions',
      'Dynamic gallery with category filters and masonry/grid toggle view',
      'Lightbox experience for immersive photo viewing',
      'Elegant About section highlighting brand story and founders',
      'Responsive design optimized for all devices with fast loading',
      'Subtle animations and transitions for a premium user experience'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/wedlock.git',
    liveUrl: 'https://wedlockph.vercel.app/'
  },
  {
    id: 5,
    title: 'Link in Bio',
    subtitle: 'A personal landing page for all my social links',
    description: 'A minimal and responsive Link-in-Bio web application that acts as a single hub for all my social profiles, portfolio, and important links. Designed with a clean UI, smooth animations, and mobile-first responsiveness for easy sharing.',
    image: '/linkinbio.png',
    technologies: ['React.js', 'JavaScript', 'Vite', 'Framer Motion', 'CSS'],
    features: [
      'Centralized hub for social media, portfolio, and contact links',
      'Mobile-first responsive design for seamless viewing on all devices',
      'Smooth hover and entrance animations using Framer Motion',
      'Clean, minimal UI optimized for fast loading and sharing',
      'Deployed on Vercel for high availability'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/SourinLinks',
    liveUrl: 'https://sourinlinks.vercel.app/'
  },
  {
    id: 6,
    title: 'Taskmate',
    subtitle: 'Todo Application',
    description: 'A beautiful and responsive single-page application for managing daily tasks. Built with React functional components and hooks, featuring a modern glassmorphism UI design.',
    image: '/taskmate.png',
    technologies: ['React.js', 'Vite', 'CSS', 'localStorage'],
    features: [
      'React functional components and hooks',
      'Persistent task storage with localStorage',
      'Glassmorphism UI with smooth animations',
      'Task lifecycle management',
      'Mobile-responsive design'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/todo-app',
    liveUrl: 'https://taskmateui.netlify.app/'
  },
  {
    id: 7,
    title: 'TinDog',
    subtitle: 'Landing Page Design',
    description: 'A creative and responsive landing page for a fictional dog dating platform. Showcases clean UI/UX design principles and mobile-first development approach.',
    image: '/tindog.png',
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    features: [
      'Clean UI/UX design principles',
      'Mobile-first responsive layout',
      'Cross-device compatibility',
      'Bootstrap components integration',
      'Modern landing page structure'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/TinDog',
    liveUrl: 'https://sourinmajumdar.github.io/TinDog/'
  },
  {
    id: 8,
    title: 'Simon Game',
    subtitle: 'Memory-Based Game',
    description: "A classic Simon memory game recreated for the browser. Tests users' memory by generating increasingly complex color sequences that must be repeated correctly.",
    image: '/simongame.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    features: [
      'Progressively increasing difficulty levels',
      'Keyboard and button-based user interactions',
      'Game state management using JavaScript',
      'Audio and visual feedback for user actions'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/Simon-Game',
    liveUrl: 'https://sourinmajumdar.github.io/Simon-Game/'
  },
  {
    id: 9,
    title: 'Drum Kit',
    subtitle: 'Keyboard-Driven Music App',
    description: "An interactive drum kit web application that allows users to play drum sounds using keyboard keys or mouse clicks, focusing on event handling and audio integration.",
    image: '/drumkit.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Keyboard and click-based sound triggers',
      'Audio playback using JavaScript',
      'Responsive layout for multiple devices',
      'Visual animations on key interaction'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/Drum-Kit',
    liveUrl: 'https://sourinmajumdar.github.io/Drum-Kit/'
  },
  {
    id: 10,
    title: 'Dice Game',
    subtitle: 'Interactive Browser Game',
    description: 'A simple and interactive browser-based dice game that simulates random dice rolls and determines a winner on each refresh. Built to practice DOM manipulation and basic game logic.',
    image: '/dicegame.png',
    technologies: ['HTML', 'CSS', 'JavaScript', 'BootStrap'],
    features: [
      'Random dice roll generation using JavaScript',
      'Dynamic DOM updates based on game outcome',
      'Clear visual feedback for winner determination',
      'Lightweight and fast-loading browser game'
    ],
    githubUrl: 'https://github.com/SourinMajumdar/Dice-Game',
    liveUrl: 'https://sourinmajumdar.github.io/Dice-Game/'
  },
];

export default projects;
