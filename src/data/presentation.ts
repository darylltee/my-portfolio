type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "daryll.tee@gmail.com",
  title: "*Hi*, I’m Daryll ",
  profile: "/profile-logo.webp",
  description:
    "**FULL STACK** Developer specializing in developing custom software solutions for desktop, mobile, and web platforms. Focused on building robust and well-established architectures using **JavaScript(react, ant design, NextJS, Nodejs)** and **.NET(Asp.net Core, DexExpress Tech, Desktop)**. Fascinated by AI and its potential, particularly in exploring Machine Learning and Large Language Models (LLMs)",

  socials: [
    {
      label: "Github",
      link: "https://github.com/darylltee",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/daryll-tee/",
    },
  ],
};

export default presentation;
