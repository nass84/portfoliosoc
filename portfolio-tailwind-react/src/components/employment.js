import PinkNav from "./helpers/pinknav";
import { Link} from "react-router-dom";

const Employment = () => {
  return (
    <div className="employment-page-container mt-10 flex flex-col md:text-xl ml-10 mr-10 ">
      <PinkNav />
      <div className="employment-top-section flex justify-between pb-10 xl:pb-0">
        <h1 className="employment flex flex-row mt-5 text-primary text-4xl md:text-6xl font-bold md:ml-10">
          Employment
        </h1>
      </div>
      <div className="flex justify-center">
      <Link to="/references">
        <button className="reference-button hidden lg:block mt-5 mb-10 lg-mt-2 lg:mb-2 p-5" type="button">
          Click here for References
        </button>
        </Link>
      </div>
      <div className="employment-2-columns text-left p-2  lg:flex">
        <div className="employment-top-left-col  flex-col md:p-5 lg:p-10 lg:flex-col lg:w-2/4">
          <h2 className="text-primary font-extrabold  text-3xl pb-10 underline ">
            Citizens Advice
          </h2>
          <h3 className="text-primary font-bold  text-xl pb-10 ">
            Welfare Benefits Specialist Caseworker - 2021
          </h3>
          <p>
            Assisting our most vulnerable clients with complex benefit enquires,
            disability forms and tribunal appeals
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            WATCH Team - Project Manager - 2020
          </h3>
          <p>
            Retrained and managed 5 people who had lost their jobs due to the
            Pandemic to assist over 700 clients
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            Volunteer Coordinator - 2009
          </h3>
          <p>
            Responsible for recruitment, training and supervision of volunteers
            for the Walsall locality
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            New Deal for Advice - Project Coordinator - 2006
          </h3>
          <p>
            Responsible for recruitment, training and supervision of volunteers for the Walsall locality
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            Generalist Advisor- 2002
          </h3>
          <p>
            Developed subject-based knowledge on all advice areas to give holistic advice to clients
          </p>
        </div>
        <div className="employment-top-right-col flex-col mt-10 md:mt-0 md:p-5 lg:p-10 lg:flex lg:w-2/4 ">
          <h2 className="text-primary font-bold  text-3xl pb-10 underline">
            Other
          </h2>
          <h3 className="text-primary font-bold  text-xl pb-10">
            Mystery Club - 2019
          </h3>
          <p>
            Organising mystery events around the West Midlands area for people to attend on a Sunday
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            Green Fingers Garden Services - 2016
          </h3>
          <p>
            Management of the business side of my partner’s landscaping business, including Social Media, Accounting and Networking
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            Team Party Unicorn - 2013
          </h3>
          <p>
            Co-founded an events company whereby we planned and hosted bespoke
            niche events around Birmingham
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            Central City Roller Derby - 2010
          </h3>
          <p>
            Head of minimum skills coaching, sponsorship and events team and A
            team skater. Awarded contributor of the year.
          </p>
          <h3 className="text-primary font-bold mt-5 text-xl pb-10 ">
            Mad Hatters - 1999
          </h3>
          <p>
            Playworker at a before and after school club for children of primary
            school age
          </p>
        </div>
      </div>
      
      <div className="flex justify-center">
      <Link to="/">
        <button className="back-button mt-10 mb-10 lg:mt-2 lg:mb-2" type="button">
          Back
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Employment;
