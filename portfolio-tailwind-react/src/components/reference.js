import React from "react";
import PinkNav from "./helpers/pinknav";
// import { useState } from "react";
import { Carousel } from "./helpers/slider";
import { Link } from "react-router-dom";

function Reference() {
  const references = ([
    {
      name: "Arminder Mann",
      reference:
        "For her passion dedication and commitment to developing others leading by example and getting the best out of people. Developing others to their strengths to demonstrate her capabilities as an effective leader who is conscientious in understanding that learning from others is as important as educating others. I think she is tech savvy as if ever I do have anything I need to ask I know she is someone I could ask for support who will always help find the answer or solution or point me in the direction and will do that for all.",
      from: "Volunteer - Citizens Advice",
      id: 1,
    },
    {
      name: "Nancy",
      reference:
        "She is an excellent team leader. Becki knows how to keep a team motivated and get work done to meet deadlines.",
      from: "Bootcamper - School of Code",
      id: 2,
    },
    {
      name: "See Next",
      reference:
        "I've worked in IT delivery for 15 years and first met Becki through Central City Roller Derby where she was well known for her love of organising and finding tools to help the team function more efficiently. She is a proactive, empathetic person who genuinely cares about the people around her and what she can do to improve their experience of an event, a team or working on a project. We worked together on a number of initiatives for Central City where Becki was both a competent leader that could negotiate a sponsorship arrangement or fundraising activity but also project manage an event and ensure all needs were catered for whilst still delivering a fun, engaging occassion for all.",
      from: "",
      id: 3,
    },
    {
      name: "Casey Griffiths",
      reference:
        "    I've watched her throw herself into learning and development activities not just with School of Code but also self driven study. She has progressed at a rapid pace and is committed to the continued development of her skills and has built a solid community of technical peers for support and sharing of ideas. Her motivation and enthusiasm is inspiring. I have no doubt that she would integrate excelently into a technical team in a range of roles as her skills and understanding far exceeds expectation. I have reviewed many of her projects and been impressed with the outcomes that are comparable to those delivered by seasoned developers and designers. Becki is an unforgettable person who leaves a long lasting positive impact on those that know her and in the legacy of all tasks she delivers.",
      from: " Central City Roller Derby",
      id: 3.1,
    },
    {
      name: "James Nunnerley",
      reference:
        "Becki has shown great commitment in going through the School of Code, and having had the opportunity to get to know her as her mentor, she would be an asset to any organisation she decides to work for. She has shown a clear interest, in our sessions, that she wants to work for an organisation that makes a difference for good to the world. This attitude, along with her clear aptitude and willingness to learn new things, is why she will make a great asset to any team she joins.",
      from: "Mentor - School of Code",
      id: 4,
    },
    {
      name: "Cheryl Mckinlay ",
      reference:
        "Becki is a naturally positive and upbeat person. Her ability to motivate the team and individuals, I have witnessed many times. I have received a lot of one to one training from Becki during the two years I have known her. On each occasion her 'can do' attitude has obtained the desired outcomes and she will certainly leave behind her a confident and competent team, thanks to her input.",
      from: "Volunteer - Citizens Advice",
      id: 5,
    },
    {
      name: "David Wilkins",
      reference:
        "I have worked with and for Becki for over 12 years at Citizens Advice. I am happy to recommend her to any employer who are is looking for someone who puts a lot of enthusiasm and effort into anything she does. She has excellent computer skills and is very precise and diligent in her work. She commits to achieving good outcomes and has the ability to get to grips with problems and find appropriate solutions. She is able to quickly learn new skills. She had excellent people skills and is a very good team person as well as a manager.",
      from: "Volunteer - Citizens Advice",
      id: 6,
    },
    {
      name: "Sara",
      reference:
        "Becki would be an asset to any team due to her exceptional organisation skills, her ability to work well with others and her unwavering dedication to do well.",
      from: "Bootcamper - School of Code",
      id: 7,
    },
    {
      name: "Leonie",
      reference:
        "Becki is very reliable and hardworking as well as being very friendly and welcoming. A great team member!.",
      from: "Staff - Citizens Advice",
      id: 8,
    },
    {
      name: "Amina Afzal",
      reference:
        "Becki is dedicated, reliable and a team player. All three qualities make her a perfect candidate. She adapts quickly to resolve obstacles and is a very fast learner. I throughly enjoyed working with her on our project since her motivation always kept our team going.",
      from: "Bootcamper - School of Code",
      id: 9,
    },
    {
      name: "Kate Anslow",
      reference:
        "Becki is hardworking, honest and reliable.  She is kind and always tries to help others.  She seems to bring out the best in those she works with.  I have always enjoyed working alongside her.",
      from: "Volunteer - Citizens Advice",
      id: 10,
    },
    {
      name: "Hemisha Morarji",
      reference:
        "Becki is an incredible mentor. She was my manager when I joined Citizens Advice as a trainee generalist adviser. Becki showed great enthusiasm and direction when she trained us on adviceline, case note writing and raising evidence forms if we see an ongoing problem in society. She was an active listener whenever we had issues, and also took my ideas on board when it came to training. Becki is an absolute joy to work with and to being managed under. Because of her guidance and support, I am now a permanent member of staff providing support to client with regards to Universal Credit.",
      from: "Staff - Citizens Advice",
      id: 11,
    },
    {
      name: "Domenic Etheridge ",
      reference:
        "Becki has the passion to further expand colleagues work skills and experience, and as a  manager Becki combined sterling support with innovative ways of learning to create an efficient and confident team. Becki has harnessed the ability to tackle challenges head on and always ensures that if anyone is struggling, she is the first to support. Becki is very commercially aware of her work environment. And above all, Becki is a credit to herself and anyone she works with.",
      from: "Staff - Citizens Advice",
      id: 12,
    },
    {
      name: "Kristie Pritchard",
      reference:
        "Becki is such a unique person! She is an out of the box thinker who will stop at nothing to find a solution to a problem. Great person to work with and know.",
      from: "Staff - Citizens Advice",
      id: 13,
    },
    {
      name: "Kelly Murphy",
      reference:
        "Becki takes so much pride in her work, you won’t ever find anyone who will put more into her work. She not only takes pride in what she does but she is proud and passionate about helping her staff and her clients throughout, she is almost like the mother of the office. Becki always has time not only to give to the job in hand but she has time to spare to protect and emotionally and physically support each and every member of staff that requires it. Becki is approachable, professional and above all confident in all that she does. Every project that Becki undertakes is carried out by to the absolute best of her ability and she is passionate about all that she does no matter if it’s a small task or a huge project she has the best outcome that she can imagine. Becki is always prepared and everything is always planned and carried out to ensure the best outcome is achieved at all times.",
      from: "Volunteer - Citizens Advice",
      id: 14,
    },
    {
      name: "Emilio Comiling",
      reference:
        "What I saw is that her enthusiasm and work rate throughout this bootcamp is on a different level. From all the repo's and now organizing our graduation party. Where do you get all that energy Becki?",
      from: "Bootcamper - School of Code",
      id: 15,
    },
    {
      name: "Shola Q",
      reference:
        "I had the immense pleasure of working with Becki on a project during our time together at School of Code. Becki has a great mix of enthusiasm, creativity, communication, empathy, oganisational skills and a dedication to solving problems while enjoying the process. I would hire Becki to work with me because I can trust her to get the job done while bringing an infection good energy to whichever team she's in.",
      from: "Bootcamper - School of Code",
      id: 16,
    },
    {
      name: "Hursheda Chauhan",
      reference:
        "I have worked with Becki so some 18 years and line managed her for some 10 years until I left the service in February 2021.  Becki has some fantastic qualities and  was the lead in supporting and  training volunteers and paid advisers.  She is able to work independently, work within a team and ensures that all commitments and targets are met. She is generous, kind, empathetic, friendly and professional in her dealings with her colleagues and service users.  Becki contributed to a positive working environment. I would absolutely work with Becki again, she is capable, has fantastic knowledge and always willing to learn and support others within the organisation.",
      from: "Manager - Citizens Advice",
      id: 17,
    },
    {
      name: "Toby Ford",
      reference:
        "100%, Becki worked alongside me as an events promoter in the west midlands, we put on numerous events (the majority of which sold out) with singalong nights, burlesque, cabaret performances with accompanying meals for the Bitters'n'Twisted chain at their various venues, the team over saw all aspects of the events, ticket sales, organisation and admin, booking acts and promotion and Becki was a great asset to work alongside.",
      from: "Co-Owner - Team Party Unicorn",
      id: 18,
    },
    {
      name: "Gurmukh",
      reference:
        "Becki would be a valuable asset to any team. She works hard, is tireless in her pursuit of learning about software development and design, is excellent at communicating with colleagues and is extremely organised. She is always willing to help others, contributes to keeping up team spirit and morale, recognises team members work and encourages them, and is dedicated to her craft. From previous projects, it is clear she puts in a lot of effort into maintaining a clean code-base, with minimal cognitive load required to get up to speed. It is always a pleasure to work with her, and she will surely become a key part of any team she works with.",
      from: "Bootcamper - School of Code",
      id: 19,
    },

    {
      name: "Jamie Hannah",
      reference:
        "Since knowing her at School of Code, Becki has consistently shown incredible organisational and leadership skills. She has a passion for UX and a thirst to learn more. She often thinks of others, sharing helpful links, articles and courses with the rest of the group. She's usually the first person to put her hand up and isn't afraid to ask the question that everybody else is thinking. Hire her.",
      from: "Bootcamper - School of Code",
      id: 21,
    },
  ]);

  return (
    <div className="reference-container mt-10 ml-5 mr-5">
      <div className="reference-nav-div">
        <PinkNav />
        <h1 className="reference-name text-primary text-4xl md:text-6xl mb-2 text-left font-bold">
          References
        </h1>
        <h2 className="reference-why text-primary text-2xl lg:text-3xl mb-2  font-bold mt-10 xl:mt-0">
          Why should you hire Becki?
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="reference-container ">
          <Carousel className="container">
          
            {references.map((reference) => (
              <div className="bg-primary m-5 p-5 text-white py-3 px-6 rounded-2xl text-lg lg:text-xl xl:text-2xl pt-10">
                <p>
                  <p>{reference.reference}</p>

                  <br></br>
                  <p className="font-bold">{reference.name}</p>
                  <p>{reference.from}</p>
                </p>
              </div>
            ))}
           
          </Carousel>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/employment">
          <button className="back-button mt-2 mb-10" type="button">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Reference;
