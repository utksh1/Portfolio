import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Utkarsh",
  lastName: "Singh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web Developer",
  avatar: "/images/avatar.jpg",
  email: "Utkarshsingh60101@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
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
    name: "Threads",
    icon: "threads",
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
  image: "/images/og/h.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between server and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Github Automation</strong></>,
    href: "/work/automate-design-handovers-with-a-figma-to-code-pipeline",
  },
  subline: (
    <>
      I'm Utkarsh, a Web Developer at <a href="https://minexnodes.com" target="_blank"  >Minexnodes</a>, where I design seamless and intuitive
      <br /> user experiences that elevate server performance and usability.
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
        I’m Utkarsh, a web developer from India with a passion for creating sleek, responsive
        websites. I love solving problems through code and building digital experiences that are
        both practical and visually engaging.
        </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Minexnodes Hosting",
        timeframe: "Nov 2024 - Present",
        role: "Server Manager",
        achievements: [
          <>
            Managing server environments, monitoring services, and supporting backend operations for
            smooth uptime and performance across deployed systems.
          </>,
          <>
            Also contributed to improving deployment workflows and troubleshooting server-side
            issues, ensuring smoother operations and faster response times during service 
            interruptions.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/c1.jpg",
            alt: "Minexnodes",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Cobble.gg",
        timeframe: "June 2024 - Oct 2024",
        role: "Junior Developer",
        achievements: [
          <>
            Developed a website for Cobble.gg, a Minecraft server hosting platform, improving
            the user experience and increasing engagement.
          </>,
          <>
            Help them to grow and attract more consumers with professional approach and increase visibilty
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/c2.jpg",
            alt: "Cobble.gg",
            width:16,
            height:9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Rishihood University",
        description: <>Studying Computer Science(AI & ML).</>,
        Duration: <>2025-2029</>
      },
      {
        name: "Newton School of Technology",
        description: <>Upscaling in Web Develoment, Data Stucture and Algorithms </>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Full-Stack Web Development--",
        description: <>Built full-stack web apps like CampusConnect and Hostel System
        using PHP, MariaDB, and role-based auth.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/fs.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },

          {
            src: "/images/projects/project-01/fs2.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Data Structures and Algorithm",
        description: <>Proficient in designing efficient algorithms and implementing robust data structures to solve complex computational problems. Experienced with real-world applications and optimization techniques.</>,
        // optional: leave the array empty+-if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};
const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
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
