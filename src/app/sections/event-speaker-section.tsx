import React, { useState } from "react";
import { EventSpeaker } from "./event-speaker";

const EventSpeakerDemo = () => {
  const [viewMore, setViewMore] = useState(false);
  const [randomizedSpeakers, setRandomizedSpeakers] = useState<typeof speakers>(
    []
  );

  const speakers = [
    {
      name: "Jennifer D. Daniel",
      company: "SASIE.org",
      bio: "Founder of SASIE.org, an organization dedicated to empowering African women in technology. She is a mentor and speaker who has delivered sessions on women-led tech innovation at events like the African Women Conference and TEDx.",
      image: "https://drive.google.com/open?id=1ILUwNNZDqSxzX-4jnv6emcII9dxpCk-Y",
    },
   
    {
      name: "Sarah Muwanguzi",
      company: "Product Designer",
      bio: "Product designer, storyteller, and creative with a background in business administration. Passionate about helping others embrace change and trust their voice.",
      image: "https://drive.google.com/open?id=1DkPWrV0b7DZOKo1NnrA9maC4kwFs1pBJ",
    },
    {
      name: "Robinson Otochi",
      company: "Kisii University",
      bio: "Software engineering student at Kisii University and part-time Robotics and Automation student at JKUAT. Skilled in web development, mobile development, blockchain, and artificial intelligence.",
      image: "https://drive.google.com/open?id=1a93XGUc7YOywv167F0R5B6oLBPk39ZI-",
    },
    {
      name: "Alice Wangeci Gachii",
      company: "Tech Innovator",
      bio: 'Tech innovator with a diploma in Water and Environmental Engineering. Passionate about using data and technology for social good, focusing on empowering women and youth. Motto: "I use tech to speak for those who can\'t—and build for those who will."',
      image: "https://drive.google.com/open?id=17bu4EX-75xMeU0BWVFcLQpvd9SmG5ggo",
    },
    {
      name: "Macharia Mercy Wambui",
      company: "Meru National Polytechnic",
      bio: "Graduate of Meru National Polytechnic with a Diploma in Electrical and Electronic Engineering. Experienced in motor control systems and automation, passionate about applying technology to real-world problems.",
      image: null,
    },
    {
      name: "Chinaza Chukwunweike",
      company: "Software Engineer",
      bio: "Software Engineer passionate about building impactful software and leveraging technology to transform lives and communities.",
      image: "https://drive.google.com/open?id=1b3MszNwwG6eLietIVfmxn3fczAZdVmnq",
    },
    {
      name: "Osambo Cherise Fasey",
      company: "KCA University",
      bio: "Information Technology student at KCA University with experience in software development and digital literacy training. Advocate for women and youth in tech, committed to fostering digital inclusion through mentorship and community engagement.",
      image: "https://drive.google.com/open?id=15U3vsBUN8HKfKicapSwxDObvOO-m-IGh",
    },
    {
      name: "Linet Muriuki",
      company: "Partnership & Outreach Lead",
      bio: "Partnership & Outreach Lead, Data Analyst, and Tech Literacy Advocate.",
      image: "https://drive.google.com/open?id=18ukbI9AXZAnHIkrH9Sd8PWmpFkkpcLem",
    },
    {
      name: "Nkeiruka Ifeonu",
      company: "Product Designer",
      bio: "Award-winning product designer with over 3 years of experience in User Experience and User Interface. Enjoys community building, teaching, and mentoring.",
      image: "https://drive.google.com/open?id=1i75AQwpIAKa0t0NmaERHdBC_kC5qyye1",
    },
    {
      name: "Esther Oyoo",
      company: "Kenyatta University",
      bio: "Second-year student at Kenyatta University studying Mathematics and Computer Science. AWS Certified Cloud Practitioner and STEM advocate passionate about empowering young women in technology.",
      image: "https://drive.google.com/open?id=1fL4ytjtbybkzKKZp1FTMSFvleRSDcJxx",
    },
    {
      name: "Cynthia Kamau",
      company: "OpenMRS",
      bio: "Software developer and community leader contributing to OpenMRS 3.x. Advocates for responsible and ethical AI, shaping best practices in healthcare and high-stakes domains.",
      image: "https://drive.google.com/open?id=1ISeWdgrBSowu-3FFXlOU0MXsNaeHz5B3",
    },
    {
      name: "Kayuyu Mwaura",
      company: "Technology Researcher",
      bio: "Multidisciplinary technology leader and researcher leveraging AI and emerging technologies for human-centered innovation in Africa. Advocate for ethical AI and digital literacy.",
      image: "https://drive.google.com/open?id=1O_PQ42MxTFGQzf-yYNNDFrlhToqsJFG1",
    },
    {
      name: "Faith Wanyangu",
      company: "Cybersecurity Analyst",
      bio: "Cybersecurity Analyst specializing in threat monitoring and incident response in the financial sector. Focused on strengthening defenses and safeguarding critical systems.",
      image: null,
    },
    {
      name: "Saido Omar Noor",
      company: "TechniKam Hub",
      bio: "Software engineer, social entrepreneur, and founder of TechniKam Hub, a social enterprise empowering women with digital skills, mentorship, and job opportunities.",
      image: null,
    },
    {
      name: "Mary Maina",
      company: "Software Developer",
      bio: "Software developer experienced in Next.js, Node.js, TypeScript, and API integrations. Passionate about building scalable systems and impactful tech solutions.",
      image: null,
    },
    {
      name: "Jacqueline Kamadi",
      company: "Kiwami Tech",
      bio: "Software Quality Assurance Engineer and Test Engineering Advocate. Certified ISTQB Advanced Test Automation Engineer and ITIL V4 professional. Enthusiast for intelligent testing.",
      image: null,
    },
    {
      name: "Sally Musanga",
      company: "CMU-Africa",
      bio: "Research scientist and CMU-Africa MSIT graduate focusing on human-centered, responsible AI. Combines full-stack engineering and ML to deliver solutions in agriculture, climate, and social impact.",
      image: null,
    },
    {
      name: "Latifa Noor",
      company: "Lamu Tech Hub",
      bio: "Communications professional and founder of Lamu Tech Hub, a community-based organization for youth and women in STEAM. Background in program management and organizational communication.",
      image: null,
    },
    {
      name: "Bosibori Valeria",
      company: "Tech Sisters Kenya",
      bio: "Product and Project Manager, Community Builder, and Co-Founder of Tech Sisters Kenya. Empowered 1,700+ women in tech through mentorship and growth opportunities.",
      image: null,
    },
    {
      name: "Elizabeth Adhiambo Onyango",
      company: "Software Developer",
      bio: "Early-career technologist exploring Python, automation, and software development. Passionate about increasing women's participation in tech.",
      image: null,
    },
    {
      name: "Grace Ngari",
      company: "Pathways Technologies",
      bio: "Dynamic data scientist leveraging AI for real-world challenges. Experienced in ML, NLP, and AI-driven solutions. Winner of multiple hackathons including Nairobi AI and Innovate 254.",
      image: null,
    },
    {
      name: "June Katei Reeves",
      company: "Essai International",
      bio: "Founder & CEO of Essai International, a software testing and talent acquisition company. Over a decade of experience in software testing, building and leading QA departments.",
      image: null,
    },
    {
      name: "Tabitha Kavyuu",
      company: "AltSchool Africa",
      bio: "Tabitha Kavyu is a passionate community builder, educator, and advocate for women in technology, committed to using the power of education and opportunity to transform lives. She currently serves as the Senior Community Manager at AltSchool Africa, where she leads programs that support over 30,000 learners across the continent in acquiring in-demand tech skills.",
      image: null,
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

export default EventSpeakerDemo;
