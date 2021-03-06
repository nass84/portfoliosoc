import PinkNav from "./helpers/pinknav";
import scratch from "../images/scratch.png";
import sara from "../images/sara.png";
import fight from "../images/fight.png";
import beef from "../images/beef.png";
import quiz from "../images/quiz.png";
import flex from "../images/flexercise.png";
import mystery from "../images/mystery.png";
import wonder from "../images/wonder.png";
import portfolio from "../images/portfolio.png";
import meah from "../images/meah.png";
import { Link } from "react-router-dom";

function Projects() {
  const project = [
    {
      image: scratch,
      title: "SOC Interview Process",
      bullet1:
        "Part of the School of Code interview process was to learn how to use Scratch and make a game",
      bullet2:
        "I made the School of Code interview process into a Scratch adventure, with a quiz, drawing app and game",
      additional: "Made with Scratch",
      website: "https://scratch.mit.edu/projects/498739371/",
      id: 1,
    },
    {
      image: sara,
      title: "HTML and CSS",
      bullet1:
        "Interviewed a fellow boot camper to gather relevant information to create a portfolio website for them",
      bullet2: "Learnt HTML, CSS and basic user research techniques",
      additional: "Coded with HTML and CSS",
      website: "https://schoolofcode.github.io/w1_website-challenge-nass84/",
      id: 2,
    },
    {
      image: fight,
      title: "JavaScript",
      bullet1:
        "Challenged to make a  simultaneous, zero-sum game: Rock, Paper, Scissors game",
      bullet2: "Learnt JavaScript and CSS Flexbox",
      additional: "Coded in Vanilla JavaScript",
      website: "https://schoolofcode.github.io/w3_rock-paper-scissors-nass84/",
      id: 3,
    },
    {
      image: beef,
      title: "Application Programming Interfaces (APIs)",
      bullet1: "Used 3 APIS to generate the information for the website",
      bullet2:
        "Worked with a senior developer to code a Spotify player that plays songs related to the ingredient searched for",
      additional: "Coded in Vanilla JavaScript",
      website:
        "https://schoolofcode.github.io/w6_checkpoint-challenge-recipe-nass84/",
      id: 4,
    },
    {
      image: quiz,
      title: "Group Project - Project Manager/Developer",
      bullet1:
        "Managed a team of 3 to create a Quiz Hosting website for Quiz Hosts",
      bullet2:
        "Used Agile project management techniques, GitHub projects, User research, APIs, Responsive design",
      additional: "Coded in Vanilla JavaScript",
      website: "https://schoolofcode.github.io/w8_team-project-quizleap/",
      id: 5,
    },
    {
      image: flex,
      title: "Group Project - Project Manager/Developer",
      bullet1:
        "Managed a team of 3 to use the design process to create a gamified Fitness App",
      bullet2:
        "Used Figma for wireframing and prototypes, Figjam for the design process and Jira for project management. This was the first project where I worked with React",
      additional: "Coded in React",
      website:
        "https://schoolofcode.github.io/w15_collaborative-react-project-fitness-app/",
      id: 6,
    },
    {
      image: mystery,
      title: "Personal Project - Mystery Club",
      bullet1:
        "Challenged to learn a new subject by ourselves and create a project. I built a website for my mystery club group to record our mystery memories",
      bullet2: "Learnt SASS",
      additional: "Coded in React using SASS",
      website: "https://mysteryclub.netlify.app/",
      id: 7,
    },
    {
      image: wonder,
      title: "Group Project - UX Lead/Developer",
      bullet1:
        "Working with a client to design a game for children based on a series of books they have written",
      bullet2:
        "Used Miro for the design process, Completed User Research, Figma for wireframing and prototypes. I worked on how the different components would link together, uploading photos and getting them to display on different pages",
      additional: "Coded in React with Firebase",
      website: "https://wonderers.netlify.app/landingpage",
      id: 8,
    },
    {
      image: portfolio,
      title: "Personal Project - Portfolio",
      bullet1:
        "Designed a portfolio website for myself to showcase my work to employers",
      bullet2:
        "Used Figma for the design process, Used UX groups for feedback, Figma for wireframing and prototype. I used Tailwind for styling",
      additional: "Coded in React and Tailwind",
      website: "https://boredinbrum.uk/",
      id: 9,
    },
    {
      image: meah,
      title: "Personal Project - Meah Match",
      bullet1:
        "To celebrate the founder of School of Code, Chris Meahs Birthday, I made him a matching game to say thank you for the opportunity he gave me by giving me a place on the bootcamp",
      bullet2: "Used Net Ninjas React Tutorial",
      additional: "Coded in React",
      website: "https://nass84.github.io/reactmemory/",
      id: 10,
    },

  ];

  return (
    <div className="project-container mt-10 ml-5 mr-5">
      <div className="project-nav-div">
        <PinkNav />
        <h1 className="project-name text-primary text-4xl md:text-6xl mt-10 mb-10 text-left font-bold">
          Projects
        </h1>
      </div>
      <div className="project-text text-left lg:text-xl">
        <p>
          In March 2021, I was chosen from over 500 people to take part in the
          first part-time bootcamp with School of Code. I spent a minimum of 24
          hours a week over the 6 month course learning technical skills by
          making projects aswell as working full time for Citizens Advice.
          <br></br>
          <br></br>
          These are the projects I have made during my time with School of Code and afterwards.
        </p>
      </div>
      <div className="projects-examples mt-5">
        {project.map((project) => (
          <div className="example-div  p-10 xl:pl-20 xl:pr:20 ml:10 mr:10 lg:flex lg:text-xl">
            <div className="example-image justify-center  lg:w-6/12">
              <h2 className="project-title font-extrabold text-primary text-2xl xl:text-3xl text-left mb-5">
                {project.title}
              </h2>
              <img
                className="project-example w-300"
                src={project.image}
                alt="project screenshot"
              ></img>
            </div>
            <div
              className="example-text text-left w-300 lg:w-6/12 p-10 lg:pt-20 mb-10 lg:justify-center lg:items-center lg:ml-10"
              key={project.id}
            >
              <li>{project.bullet1}</li>
              <li>{project.bullet2}</li>
              <br></br>
              <div className="flex justify-center">
                <a
                  className="bg-primary p-3 text-white rounded-lg hover:bg-white hover:text-primary border-solid border-2 border-primary"
                  target="_blank"
                  rel="noreferrer"
                  href={project.website}
                >
                  Click Here To See It
                </a>
              </div>
              <p className="coded text-primary font-bold mt-5 ">
                {project.additional}
              </p>
              <div className="line h-1 bg-primary mt-5 "></div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/">
        <button className="back-button mb-5">Back</button>
      </Link>
    </div>
  );
}

export default Projects;
