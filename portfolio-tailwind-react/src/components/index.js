import Navbar from "./helpers/navbar";
import { Timeline } from "react-twitter-widgets";
import BigButton from "./helpers/button";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page-container flex">
      <section className="purple-div w-full h-96 z-10"></section>
      <section className="white-div z-10"></section>
      <section className="clear-div z-20 w-full absolute">
        <div>
          <div className="justify-start">
            <Navbar />
          </div>
          <div className="home-page-name-div text-white flex-col justify-start md:ml-10 items-center mb-5">
            <h1 className="text-5xl md:text-5xl lg:text-7xl xl:text-8xl mt-5"> Becki Floyd  </h1>
            <h2 className="text-2xl lg:text-3xl xl:text-6xl lg:mb-10 xl:mb-20">UX Developer</h2>
          </div>

          <div className="">
            <div className="home-page-twitter-scratch-div flex flex-row ml-10 mr-10 justify-center">
              <div className="home-page-twitter transform lg:mr-10">
                <Timeline
                  dataSource={{
                    sourceType: "profile",
                    screenName: "boredinbrum",
                  }}
                  options={{
                    height: "402",
                    width: "485",
                  }}
                />
              </div>

              <div className="home-page-scratch hidden lg:block ">
                <iframe
                  src="https://scratch.mit.edu/projects/498739371/embed"
                  allowtransparency="true"
                  width="485"
                  height="402"
                  frameborder="0"
                  scrolling="no"
                  title="School of Code Game"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="flex justify-center">
            <div className="home-page-buttons-div flex justify-center mt-5 flex-col lg-justify-around lg:flex-row lg:mt-10 xl:mt-20">
              <Link to="/about">
                <BigButton text="About Me" />
              </Link>
              <Link to="/employment">
                <BigButton text="Employment" />
              </Link>
              <Link to="/projects">
                <BigButton text="Projects" />
              </Link>
            </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
