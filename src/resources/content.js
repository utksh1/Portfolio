const person = {
  firstName: "Utkarsh",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer & Cybersecurity Enthusiast",
  avatar: "/images/photo.jpeg",
  email: "Utkarshsingh60101@gmail.com",
  location: "Delhi, India",
  timeZone: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/utksh1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/utksh",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/utkarsh.0_0/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Engineering secure architectures, intelligent systems, and performant web experiences.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SecuScan</strong></>,
    href: "/work/secuscan",
  },
  subline: (
    <>
      I&apos;m a B.Tech CSE & AI student focused on building high-performance web apps,
      <br /> privacy-focused products, and secure scanning systems using JavaScript, Python, and Rust.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m Utkarsh, a web developer and cybersecurity enthusiast passionate about building responsive interfaces, full-stack applications, and security-focused tools.
      </>
    ),
  },
  work: {
    display: true, 
    title: "Work Experience",
    experiences: [
      {
        company: "GirlScript Summer of Code",
        logo: {
          src: "https://media.licdn.com/dms/image/v2/C510BAQGSObrO0QPlMQ/company-logo_100_100/company-logo_100_100/0/1630597186826/girlscriptsoc_logo?e=1781740800&v=beta&t=qMigm71EUgBoPp5Y46AsrpZYZTkrZHxH0AQXV2JoiaI",
        },
        roles: [
          {
            title: "Project Admin",
            link: "https://gssoc.girlscript.org/profile/edc3ab97-c954-4f3d-933f-0400737b5979",
            timeframe: "May 2026 - Present",
            description: (
              <>
                Managed the overall repository architecture and coordinated feature roadmaps while overseeing pull requests to maintain high code standards. Mentored new open-source contributors, guiding their code structure and ensuring all contributions strictly adhered to secure software development practices.
              </>
            ),
          },
          {
            title: "Open Source Contributor",
            link: "https://www.linkedin.com/in/utksh/details/experience/",
            timeframe: "Aug 2025 - Oct 2025",
            description: (
              <>
                Contributed feature enhancements and bug fixes across multiple open-source repositories through structured pull requests. Focused on improving code quality and maintainability by conducting code reviews, documenting technical behavior, and aligning all contributions with strict project conventions.
              </>
            ),
          },
        ],
      },
      {
        company: "Society of Cyber Security",
        logo: {
          src: "https://media.licdn.com/dms/image/v2/D4E0BAQGxAEN3KxiBKw/company-logo_100_100/company-logo_100_100/0/1737237004398?e=1781740800&v=beta&t=3Z4_94wund8K0vdPjadUxmNZJlIW_h-03zXZIPv4_GM",
        },
        roles: [
          {
            title: "Core Member",
            link: "https://www.linkedin.com/in/utksh/details/experience/",
            timeframe: "Sep 2025 - Present",
            description: (
              <>
                Built and tested security tools while actively participating in Capture The Flag (CTF) competitions across multiple platforms. Focused on solving complex challenges in cryptography, digital forensics, and web exploitation, which strengthened practical security auditing and advanced debugging skills.
              </>
            ),
          },
        ],
      },
      {
        company: "Amdox Technologies",
        logo: {
          src: "https://media.licdn.com/dms/image/v2/D560BAQHkxNcin7pyug/company-logo_100_100/B56ZYEaCS_HEAU-/0/1743830657663/amdox_tech_logo?e=1781740800&v=beta&t=6o29xwi8zm_4pLrZuRK3XyLASwWjc9CuPiW4otWbAEQ",
        },
        roles: [
          {
            title: "Web Developer Intern",
            link: "https://www.linkedin.com/in/utksh/details/experience/",
            timeframe: "Nov 2025 - Jan 2026",
            description: (
              <>
                Built and optimized responsive digital interfaces using modern JavaScript libraries like React, focusing on improving component reusability and front-end performance. Collaborated closely with the team to establish maintainable UI workflows, ensuring cleaner code structure, smoother animations, and highly reliable user-facing behavior.
              </>
            ),
          },
        ],
      },
    ],
  },
  studies: {
    display: true, 
    title: "Studies",
    institutions: [
      {
        name: "Rishihood University",
        logo: {
          src: "/images/rishihood.jpeg",
        },
        duration: "2025 - 2029",
        degree: "B.Tech in Computer Science & Artificial Intelligence",
        gpa: "SGPA: 7.33",
        description: (
          <>
            Focusing on core computer science foundations, algorithms, machine learning, and artificial intelligence principles. Active participant in coding events, technology hackathons, and academic initiatives.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, 
    title: "Technical Skills",
    skills: [
      {
        title: "Languages",
        tags: ["JavaScript (ES6+)", "Python", "C", "Rust"],
      },
      {
        title: "Frameworks",
        tags: ["ReactJS", "Redux", "Node.js", "ExpressJS", "FastAPI", "Next.js", "Flask", "Fastify", "LangChain", "Pandas", "PyTorch"],
      },
      {
        title: "Databases",
        tags: ["PostgreSQL", "MySQL", "SQLite3", "MongoDB", "MariaDB", "Vector DB", "Elastic DB"],
      },
      {
        title: "Tools",
        tags: ["Docker", "Git", "OpenSearch", "Redis", "Burp Suite", "Wireshark", "Nmap", "Shell"],
      },
      {
        title: "Concepts",
        tags: ["Computer Networking", "System Design", "VAPT", "RESTful APIs", "Distributed Systems", "Web Application Security", "Cloud Security"],
      },
    ],
  },
};
const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,

};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,

};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,

  images: [
    {
      src: "/images/gallery/cert1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/l1.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/l2.png",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
