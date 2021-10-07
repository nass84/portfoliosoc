import PinkNav from "./helpers/pinknav";

function AboutPage() {
  return (
    <div className="about-page-container mt-10 mb-10 flex flex-col md:text-xl ml-10 mr-10 ">
      <div className="about-top-section flex justify-between pb-10">
        <h1 className="about-me flex flex-row text-primary text-6xl font-bold ml-10">
          About Me
        </h1>
        <PinkNav />
      </div>
      <div className="about-top-text flex flex-col md:flex-row">
        <div className="about-top-2-columns w-5/6 flex-row mr-10">
          <div className="about-top-left-column flex-row  w">
            <div className="about-top-left-top flex-col p-10 text-justify pb-0">
              <p>
                After working for Citizens Advice for 18 years, I am currently
                looking for a career change into the world of Tech. I was
                selected from over 500 people to take part in the first School
                of Code part-time Bootcamp to learn how to become a Front End
                Developer. During this time, I discovered a love for the UX
                design process and coding products that users have a genuine
                need for. I am currently completing my Google UX Design
                Certificate aswell as taking part in the #100daysofcode
                challenge on Twitter.
              </p>
            </div>
            <div className="about-top-left-bottom ">
              <div className="about-user-persona p-10 ">
                <div className="about-top-user-persona flex text-left  ">
                  <div className="about-goals text-left p-4  w-1/2">
                    <h2 className="text-primary font-bold  text-xl pb-10 ">
                      Goals
                    </h2>

                    <li>
                      To improve life for the people I know and the wider
                      community{" "}
                    </li>
                    <br></br>
                    <li>
                      To take my knowledge of supporting vulnerable people to
                      make and design products that are accessible for all
                    </li>
                  </div>
                  <div className="about-frustrations   w-1/2  p-4">
                    <h2 className="text-primary font-bold  pb-10 text-xl">
                      Frustrations
                    </h2>

                    <p>
                      <li>Not being challenged in my current role</li>
                      <br></br>
                      <li> Lack of communication and planning </li>
                      <br></br>
                      <li>Inefficiency with wasting time or resources </li>
                    </p>
                  </div>
                </div>
                <div className="about-bottom-user-persona flex">
                  <div className="about-motivations mt-7 w-1/2 text-left p-4">
                    <h2 className="text-primary font-bold text-left pb-10 text-xl">
                      Motivations
                    </h2>

                    <li>Making the most out of my life </li>
                    <br></br>
                    <li> Helping others </li>
                    <br></br>
                    <li>Having a positive impact</li>
                  </div>
                  <div className="about-needs mt-10 w-1/2">
                    <h2 className="text-primary font-bold text-left pb-10 text-xl ">
                      Needs
                    </h2>

                    <p className="text-primary text-xl mt-0 italic">
                      “As someone who thrives on problem solving, I need a
                      career that allows me to bring something unique to the
                      table, whilst providing opportunities to grow and develop”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-top-right-column text-left flex-row md: flex-col">
          <h2 className="text-primary font-bold pb-10 text-3xl">
            {" "}
            Tech Skills
          </h2>

          <li>Markdown</li>
          <li>Git Hub</li>
          <li>VS Code</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS</li>
          <li>Tailwind</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Testing</li>

          <h2 className="text-primary font-bold pt-10 pb-10 mb-20 text-3xl align-center w-full ">
            {" "}
            Project Skills
          </h2>

          <li>PM</li>
          <li>User Research</li>
          <li>Personas</li>
          <li>Wireframing</li>
          <li>Prototyping</li>
          <li>Figma</li>
          <li>Figjam</li>
          <li>Miro</li>
          <li>Google Drive</li>
          <li>Jira</li>
          <li>Trello</li>
        </div>
      </div>
      <div className="interests-banner text-white pl-20 font-bold h-20 text-left text-6xl mt-20">
        Interests
      </div>

      <div className="about-interest-text text-justify pt-10 ml-20 mr-20">
        I am the “entertainment director” for my group of friends, I love
        meeting new people and adding them to our Super Adventure Club group.
        This role was especially important during lockdown with so many people
        living alone. My love of organising parties and events came in useful as
        I got to use my creativity to arrange different events for people such
        as weekly quizzes for the volunteers, lunchtime taskmaster, living room
        raves and poker/debate club every Saturday.
        <br></br>
        <br></br>
        My 2 favourite events were our online Secret Santa where Cards against
        Christmas was invented and a birthday pub crawl with an appearance from
        Mr Motivator.
        <br></br>
        <br></br>
        As well as looking after my friends, at work I was speaking to so many
        more people who needed help and local charities were becoming stressed
        to breaking point. I started organising collections for our local food
        bank as well as organising charity events like the Bank Holiday Bake Off
        for a Domestic Violence Refuge and a Cutest Cat competition for the
        PDSA. Together we raised over £1000 and did a lot of good promotion for
        local charities.
        <br></br>
        <br></br>
        It was the year I discovered that you can be just as entertained in the
        house as out in the world however I am so excited that festivals are
        back so I can see live music again and I am hopeful that we will be able
        to go skiing next year so I can 360 down the mountains.
        <br></br>
        <button className="back-button mt-5 mb-20">Back</button>
      </div>
    </div>
  );
}

export default AboutPage;
