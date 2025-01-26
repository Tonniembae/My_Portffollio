export const navItems = [
  { name: "Home", link:"#home", },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Tonnie was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tonny's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Tonnie is the ideal partner.",
    name: "Tonny Murithi",
    title: "Director of Tonnie Technologies",
  },
  {
    quote:
      "Collaborating with Tonnie was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Tonny's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Martin Munene",
    title: "CEO  of Nesh Creative agency",
  },
  {
    quote:
      "Working with Tonnie was a fantastic experience. His ability to meet tight deadlines and deliver high-quality work was beyond impressive. Tonnie’s attention to detail and problem-solving skills added immense value to our project. Highly recommended for anyone looking for top-tier development expertise.",
    name: "Lewis Muthomi",
    title: "Project Manager Yehtu Digital Solutions",
  },
  {
    quote:
      "Tonnie’s work exceeded our expectations. His ability to understand our vision and translate it into a functional, user-friendly platform was exceptional. His communication was clear, and he consistently kept the project on track. I would definitely work with him again.",
    name: "Caleb Nyapola",
    title: "CEO Nyaps graphics and creatives",
  },
  {
    quote:
      "Tonnie's innovative approach to development helped us bring our ideas to life. His expertise and dedication were crucial in ensuring our project's success. Tonnie is a true professional who takes pride in delivering results that matter.",
    name: "Paul Faith",
    title: "Head of Development at PF Innovations",
  },
];
// add Later

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

export const workExperience = [
  {
    id: 1,
    title: "Web Development",
    desc:"Custom websites, e-commerce platforms, and web applications built with modern frameworks like React and Next.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc:"Crafting user-friendly interfaces and prototypes to ensure an engaging user experience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Technical Support & Maintenance",
    desc:"Ongoing updates, troubleshooting, and performance optimization for your applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "SEO Optimization | Enhance Visibility & Traffic",
    desc: "Drive organic traffic and improve search engine rankings with proven SEO strategies. I optimize on-page SEO, conduct keyword research, and enhance website structure for better search engine performance.",
    className: "md:col-span-2",
    thumbnail: "/seo.jpg",
  },
  {
    id: 6,
    title: "Digital Marketing | Campaigns & Social Media Strategy",
    desc: "Develop and execute digital marketing strategies including social media marketing, paid campaigns, and email marketing to boost brand visibility and engagement.",
    className: "md:col-span-2",
    thumbnail: "/digitalmarketingcontent.jpg",
  }
  
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];