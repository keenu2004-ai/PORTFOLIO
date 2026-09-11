export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'Active / Production-Oriented' | 'Deployed / Full-Stack' | 'Educational Recreation' | 'Live / Active' | 'Hackathon Prototype' | 'Academic / Working Prototype' | 'Prototype / Academic';
  description: string;
  purpose?: string;
  implementation?: string;
  engineering?: string;
  technologies: string[];
  repository?: string;
  liveDemo?: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'theiakshi-one',
    title: 'THEIAKSHI ENTERPRISE HRMS',
    category: 'Enterprise Software',
    status: 'Active / Production-Oriented',
    description: 'An Enterprise HRMS built with a 3-tier architecture (React → Node.js API → PostgreSQL), featuring role-based access, decoupled identity workflows, and comprehensive organizational data isolation.',
    purpose: 'To provide a secure, scalable platform for managing organizational HR, bridging the gap between administrative accounts and employee profiles through robust access controls and isolated tenant workflows.',
    implementation: 'Developed with React, TypeScript, and Tailwind CSS. The backend employs Node.js and Express (TS) with a 35-table PostgreSQL schema. Incorporates geofenced attendance tracking, work planning modules, and strict authentication mechanisms (HTTP-only cookies, JWKS validation).',
    engineering: 'Secured via robust backend RBAC, BOLA/IDOR mitigation, and CORS validation. The database leverages parameterized SQL repositories, automated migrations, and strict relational integrity. Operations are containerized via Docker for CI/CD and deployment readiness.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
    repository: 'https://github.com/keenu2004-ai/RANSOM',
    featured: true
  },
  {
    id: 'portfolio',
    title: 'DEVELOPER PORTFOLIO',
    category: 'Frontend Architecture',
    status: 'Live / Active',
    description: 'A premium, technically credible engineering portfolio integrating 3D WebGL visuals and semantic data models.',
    implementation: 'Developed with React 19, TypeScript, Vite, and Three.js for interactive WebGL experiences. Features custom animations, SVG visualizations, and intersection observer-based scroll storytelling.',
    engineering: 'Optimized for performance with dynamic rendering limits, robust responsive behavior across 320px to 1920px, accessibility-focused HTML, and comprehensive SEO structures.',
    technologies: ['React 19', 'TypeScript', 'Three.js', 'React Three Fiber', 'Vanilla CSS', 'Vite'],
    repository: 'https://github.com/keenu2004-ai/PORTFOLIO',
    liveDemo: 'https://portfolio-ten-iota-thnfj44zzc.vercel.app/',
    featured: true
  },
  {
    id: 'fitzone',
    title: 'FITZONE GYM SYSTEM',
    category: 'Full-Stack Application',
    status: 'Deployed / Full-Stack',
    description: 'A responsive gym membership platform integrating class scheduling and an administrative dashboard.',
    implementation: 'Constructed using React 18 and Bootstrap 5 for a responsive frontend interface, backed by a Node.js/Express API with PostgreSQL persistence for business data management.',
    engineering: 'Secured with Helmet, Morgan for logging, and robust CORS policies. Implemented trial booking workflows, program presentation, and a trainer-related UI integrated with backend state.',
    technologies: ['React 18', 'Node.js', 'Express.js', 'PostgreSQL', 'Bootstrap 5', 'Vite'],
    repository: 'https://github.com/keenu2004-ai/GYM-WEB',
    liveDemo: 'https://gym-web-frontend-six.vercel.app/',
    featured: true
  },
  {
    id: 'phonepe-clone',
    title: 'PHONEPE UI CLONE',
    category: 'Frontend Recreation',
    status: 'Educational Recreation',
    description: 'A high-fidelity, pixel-perfect React replica of the PhonePe landing page focused on UI layout precision and accessibility.',
    implementation: 'Recreated desktop navigation, a mobile navigation drawer, interactive phone mockups, and simulated interfaces for UPI payments, recharge, and digital gold.',
    engineering: 'Built from scratch without component libraries using Vanilla CSS. Focus on fluid responsive design, multi-column layouts, and strict semantic HTML routing.',
    technologies: ['React 18', 'Vite', 'JavaScript', 'React Router DOM', 'Vanilla CSS'],
    repository: 'https://github.com/keenu2004-ai/PhonePe-Clone',
    featured: true
  },
  {
    id: 'solar-defect',
    title: 'SOLAR PANEL MONITORING SYSTEM',
    category: 'IoT / Embedded Systems',
    status: 'Academic / Working Prototype',
    description: 'An IoT real-time fault monitoring system for solar PV panels using ESP8266 microcontrollers and threshold logic.',
    purpose: 'To detect physical and electrical faults (shading, overheating, open circuits) continuously without requiring an external cloud service.',
    implementation: 'Programmed in Embedded C/C++ on an ESP8266 NodeMCU. Integrates DHT11 sensors, voltage dividers, and I2C LCDs to monitor voltage, current, and temperature, acting as a local web server (Access Point).',
    engineering: 'Implemented sub-second fault detection using hardware polling and threshold validation, rendering a local JSON-driven dashboard in ~2-4 seconds over a 25m local Wi-Fi range.',
    technologies: ['ESP8266', 'C++', 'Arduino IDE', 'DHT11', 'I2C LCD'],
    featured: false
  },
  {
    id: 'ardumist',
    title: 'ARDUMIST AUTOMATED HUMIDIFIER',
    category: 'Hardware Prototype',
    status: 'Hackathon Prototype',
    description: 'A smart automated greenhouse micro-climate solution built during a 48-hour hackathon.',
    purpose: 'To monitor ambient humidity and actuate a spray mechanism automatically when conditions fall below a specific threshold.',
    implementation: 'Wired an Arduino UNO with a DHT11 sensor, relay module, and OLED display to form a complete sensor-to-actuator control loop.',
    engineering: 'Engineered hysteresis control to prevent relay chatter, enforcing a 10-minute activation cycle with real-time hardware monitoring.',
    technologies: ['Arduino UNO', 'C++', 'DHT11', 'Relay Control', 'OLED'],
    featured: false
  }
];

export const PROFILE = {
  name: 'VAIBHAV RAJPUT',
  role: 'Vibe Coder | Full-Stack Product Engineer',
  location: 'Ghaziabad, UP',
  education: 'B.Tech ECE, ABES Engineering College (2026)',
  github: 'https://github.com/keenu2004-ai',
  portfolio: 'https://portfolio-ten-iota-thnfj44zzc.vercel.app/',
  email: 'vaibhav@example.com', // Placeholder, user to update
};

export const SKILLS = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Vite', 'Three.js'],
  backend: ['Node.js', 'Express', 'REST APIs'],
  database: ['PostgreSQL', 'SQL Schema Design'],
  devops: ['Git', 'GitHub', 'Linux'],
  embedded: ['C++', 'Arduino', 'ESP8266', 'IoT Telemetry']
};
