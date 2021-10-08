import Navbar from "./helpers/navbar";
import { Timeline } from "react-twitter-widgets";
import BigButton from "./helpers/button"
import { Link} from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page-container flex">
      <section className="purple-div w-full h-96 z-10"></section>
      <section className="white-div z-10"></section>
      <section className="clear-div z-20 w-full absolute">
        <div>
          <Navbar />

          <div className="home-page-name-div text-white flex justify-start ml-10 items-center mb-10">
            <h1 className="text-6xl mt-1 "> Becki Floyd -  UX Developer </h1>
          </div>

          <div>
            
              <div className="home-page-twitter-scratch-div flex justify-around ml-10 mr-10">
                <div className="home-page-twitter transform">
              
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

                <div className="home-page-scratch">
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

              <div className="home-page-buttons-div flex justify-around mt-10">
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
      </section>
    </div>
  );
}

export default HomePage;
