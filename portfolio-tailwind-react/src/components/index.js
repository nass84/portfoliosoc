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
            <h1 className="text-5xl md:text-5xl lg:text-7xl mt-5">
              {" "}
              Becki Floyd{" "}
            </h1>
            <h2 className="text-2xl lg:text-3xl lg:mb-10">UX Developer</h2>
          </div>

          <div className="test">
            <div className="justify-center">
              <div className="home-page-twitter-scratch-div flex lg:flex-row lg:align-center flex-col justify-center">
                <div className="home-page-twitter transform lg:ml-48">
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
                <div className="">
                  <Link to="/casestudy">
                    <button className="bg-primary text-left hover:bg-white  text-white hover:text-primary p-10 font-bold text-xl lg:text-2xl xl:lg:text-xl rounded-xl w-full h-full border-2 border-white hover:border-primary hover:text-primary lg:w-2/4">
                      UX Case Study: {<br></br>} {<br></br>} Design a fitness
                      app for people who want to make exercise more enjoyable
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div className="home-page-buttons-div flex justify-center mt-5 flex-col lg-justify-around lg:flex-row lg:mt-10 ">
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
