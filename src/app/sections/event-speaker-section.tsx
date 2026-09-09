import React, { useState } from "react";
import { EventSpeaker } from "./event-speaker";

const EventSpeakerSection = () => {
  const [viewMore, setViewMore] = useState(false);
  const [randomizedSpeakers, setRandomizedSpeakers] = useState<typeof speakers>(
    [],
  );

  const speakers = [
    {
      name: "Jennifer D. Daniel",
      company: "Founder - SASIE.org",
      bio: "Founder of SASIE.org, an organization dedicated to empowering African women in technology. She is a mentor and speaker who has delivered sessions on women-led tech innovation at events like the African Women Conference and TEDx.",
      image:
        "https://drive.google.com/open?id=1ILUwNNZDqSxzX-4jnv6emcII9dxpCk-Y",
    },

    {
      name: "Sarah Muwanguzi",
      company: "Product Designer",
      bio: "Product designer, storyteller, and creative with a background in business administration. Passionate about helping others embrace change and trust their voice.",
      image:
        "https://drive.google.com/open?id=1DkPWrV0b7DZOKo1NnrA9maC4kwFs1pBJ",
    },
    {
      name: "Robinson Otochi",
      company: "Robotics Engineer",
      bio: "Software engineering student at Kisii University and part-time Robotics and Automation student at JKUAT. Skilled in web development, mobile development, blockchain, and artificial intelligence.",
      image:
        "https://drive.google.com/open?id=1a93XGUc7YOywv167F0R5B6oLBPk39ZI-",
    },
    {
      name: "Alice Wangeci Gachii",
      company: "Tech Innovator",
      bio: 'Tech innovator with a diploma in Water and Environmental Engineering. Passionate about using data and technology for social good, focusing on empowering women and youth. Motto: "I use tech to speak for those who can\'t—and build for those who will."',
      image:
        "https://drive.google.com/open?id=17bu4EX-75xMeU0BWVFcLQpvd9SmG5ggo",
    },
    {
      name: "Chinaza Chukwunweike",
      company: "Software Engineer",
      bio: "Software Engineer passionate about building impactful software and leveraging technology to transform lives and communities.",
      image:
        "https://drive.google.com/open?id=1b3MszNwwG6eLietIVfmxn3fczAZdVmnq",
    },
    // TODO: Add back later in a panel (@JosephineAkello)
    // {
    //   name: "Osambo Cherise Fasey",
    //   company: "KCA University",
    //   bio: "Information Technology student at KCA University with experience in software development and digital literacy training. Advocate for women and youth in tech, committed to fostering digital inclusion through mentorship and community engagement.",
    //   image: "https://drive.google.com/open?id=15U3vsBUN8HKfKicapSwxDObvOO-m-IGh",
    // },
    {
      name: "Linet Muriuki",
      company: "Partnership & Outreach Lead",
      bio: "Partnership & Outreach Lead, Data Analyst, and Tech Literacy Advocate.",
      image:
        "https://drive.google.com/open?id=18ukbI9AXZAnHIkrH9Sd8PWmpFkkpcLem",
    },

    {
      name: "Esther Oyoo",
      company: "STEM Advocate",
      bio: "Second-year student at Kenyatta University studying Mathematics and Computer Science. AWS Certified Cloud Practitioner and STEM advocate passionate about empowering young women in technology.",
      image:
        "https://drive.google.com/open?id=1fL4ytjtbybkzKKZp1FTMSFvleRSDcJxx",
    },
    {
      name: "Cynthia Kamau",
      company: "Software Developer",
      bio: "Software developer and community leader contributing to OpenMRS 3.x. Advocates for responsible and ethical AI, shaping best practices in healthcare and high-stakes domains.",
      image:
        "https://drive.google.com/open?id=1ISeWdgrBSowu-3FFXlOU0MXsNaeHz5B3",
    },
    {
      name: "Kayuyu Mwaura",
      company: "Technology Researcher",
      bio: "Multidisciplinary technology leader and researcher leveraging AI and emerging technologies for human-centered innovation in Africa. Advocate for ethical AI and digital literacy.",
      image:
        "https://drive.google.com/open?id=1WAmVhFL8VQ_ZDTsMdurxIqoaqds0H29e",
      // TODO: Update image Link (davies)
      // https://drive.google.com/file/d/1WAmVhFL8VQ_ZDTsMdurxIqoaqds0H29e/view?usp=drive_link
    },
    {
      name: "Faith Wanyangu",
      company: "SOC Analyst",
      bio: "Cybersecurity Analyst specializing in threat monitoring and incident response in the financial sector. Focused on strengthening defenses and safeguarding critical systems.",
      image:
        "https://drive.google.com/open?id=1xZcDmqqfIrh6wb_u_HHZhLrfZYRc_Yt-",
    },
    {
      name: "Saido Omar Noor",
      company: "Software Engineer",
      bio: "Software engineer, social entrepreneur, and founder of TechniKam Hub, a social enterprise empowering women with digital skills, mentorship, and job opportunities.",
      image:
        "https://drive.google.com/open?id=17fD98BDvJsTD2qQQYRzjlITIlBUH-a73",
    },
    {
      name: "Mary Maina",
      company: "Software Developer",
      bio: "Software developer experienced in Next.js, Node.js, TypeScript, and API integrations. Passionate about building scalable systems and impactful tech solutions.",
      image:
        "https://drive.google.com/open?id=1etRcPQhVjc4JKwcC5MW5VD4AYBLREZ-0",
    },
    {
      name: "Jacqueline Kamadi",
      company: "Sr. Software Quality Assurance Engineer",
      bio: "Senior Software Quality Assurance Engineer and Test Engineering Advocate. Certified ISTQB Advanced Test Automation Engineer and ITIL V4 professional. Enthusiast for intelligent testing.",
      image:
        "https://drive.google.com/open?id=1IlP9gL5iGNkY-FifIwVfJQJxIjaY8LMK",
    },

    {
      name: "Latifa Noor",
      company: "Founder & Executive Director",
      bio: "Communications professional and founder of Lamu Tech Hub, a community-based organization for youth and women in STEAM. Background in program management and organizational communication.",
      image:
        "https://drive.google.com/open?id=1wsTuXtUSq_LmKh2crgufryBXJZG4XPYp",
    },
    {
      name: "Bosibori Valeria",
      company: "Co-Founder - Tech Sisters Kenya",
      bio: "Product and Project Manager, Community Builder, and Co-Founder of Tech Sisters Kenya. Empowered 1,700+ women in tech through mentorship and growth opportunities.",
      image:
        "https://drive.google.com/open?id=1hQy_vCd2eR9XkXpaYxU8GINkvbGHzhEy",
    },
    {
      name: "Elizabeth Onyango",
      company: "AI Engineer",
      bio: "Early-career technologist exploring Python, automation, and software development. Passionate about increasing women's participation in tech.",
      image:
        "https://drive.google.com/open?id=1H5tg5R6zmBnyxUQegBR6eM6Bxb1ycjfg",
    },
    {
      name: "Grace Ngari",
      company: "Data scientist",
      bio: "Dynamic data scientist leveraging AI for real-world challenges. Experienced in ML, NLP, and AI-driven solutions. Winner of multiple hackathons including Nairobi AI and Innovate 254.",
      image:
        "https://drive.google.com/open?id=16W-4asiQ-fKRQOmyapHteeodgBT6fduA",
    },
    {
      name: "June Katei Reeves",
      company: "Founder - Essai International",
      bio: "Founder & CEO of Essai International, a software testing and talent acquisition company. Over a decade of experience in software testing, building and leading QA departments.",
      image:
        "https://drive.google.com/open?id=1nCoJqFlHcEjn9FZxkq42VvMBwHrt5FHq",
    },
  ];

  React.useEffect(() => {
    const shuffled = [...speakers].sort(() => Math.random() - 0.5);
    setRandomizedSpeakers(shuffled);
  }, []);

  const displayedSpeakers = viewMore
    ? randomizedSpeakers
    : randomizedSpeakers.slice(0, 10);

  return (
    <>
      <div className="grid md:grid-cols-5 gap-5">
        {displayedSpeakers.map((speaker, index) => (
          <EventSpeaker
            key={index}
            name={speaker.name}
            company={speaker.company}
            bio={speaker.bio}
            image={speaker.image}
          />
        ))}
      </div>

      <div className="flex justify-center py-8">
        <button
          onClick={() => setViewMore(!viewMore)}
          className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          {viewMore ? "View Less" : "View More"}
        </button>
      </div>
    </>
  );
};

export default EventSpeakerSection;
