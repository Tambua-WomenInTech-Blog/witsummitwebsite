"use client";
import React, { useState } from "react";
import Image from "next/image";
import { X, User } from "lucide-react";

interface EventSpeakerProps {
  name: string;
  company: string;
  bio: string;
  image?: string | null;
}

export const EventSpeaker: React.FC<EventSpeakerProps> = ({
  name,
  company,
  bio,
  image,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
        onClick={() => setIsDialogOpen(true)}
      >
        <div className="h-60 relative overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
          {image ? (
            <Image src={image} alt={name} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-purple-500/20 rounded-full flex items-center justify-center">
                <User className="w-12 h-12 text-purple-500" />
              </div>
            </div>
          )}

        </div>

        <div className="bg-purple-800 text-white p-4">
          <h3 className="text-lg font-bold mb-1">{name}</h3>
          <p className="text-sm text-purple-200">{company}</p>
        </div>
      </div>

      {isDialogOpen && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setIsDialogOpen(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-gradient-to-r from-purple-800 to-pink-600 text-white p-6 rounded-t-2xl">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{name}</h2>
                  <p className="text-purple-100">{company}</p>
                </div>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="text-white hover:bg-white/20 rounded-full p-2 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex gap-6 mb-6">
                <div className="flex-shrink-0">
                  <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-spin" style={{ animationDuration: '3s' }}></div>
                    <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100">
                      {image ? (
                        <Image src={image} alt={name} width={120} height={120} className="object-cover w-full h-full" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-white">
                          <User className="w-16 h-16 text-purple-500" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Biography</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{bio}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Demo usage
const EventSpeakerDemo = () => {
  const [viewMore, setViewMore] = useState(false);
  const [randomizedSpeakers, setRandomizedSpeakers] = useState<typeof speakers>([]);

  const speakers = [
    {
      name: "Jennifer D. Daniel",
      company: "SASIE.org",
      bio: "Founder of SASIE.org, an organization dedicated to empowering African women in technology. She is a mentor and speaker who has delivered sessions on women-led tech innovation at events like the African Women Conference and TEDx.",
      image: null,
    },
    {
      name: "Jessica Randall",
      company: "Mentorlst",
      bio: "Master's graduate in Mathematics and Android developer Co-lead at Mentorlst. She is a Zindi Ambassador advocating for data science and ML, and an organizer for GDG Cape Town. Her interest in AI was sparked as a Google Crowdsource Influencer.",
      image: null,
    },
    {
      name: "Sarah Muwanguzi",
      company: "Product Designer",
      bio: "Product designer, storyteller, and creative with a background in business administration. Passionate about helping others embrace change and trust their voice.",
      image: null,
    },
    {
      name: "Robinson Otochi",
      company: "Kisii University",
      bio: "Software engineering student at Kisii University and part-time Robotics and Automation student at JKUAT. Skilled in web development, mobile development, blockchain, and artificial intelligence.",
      image: null,
    },
    {
      name: "Alice Wangeci Gachii",
      company: "Tech Innovator",
      bio: "Tech innovator with a diploma in Water and Environmental Engineering. Passionate about using data and technology for social good, focusing on empowering women and youth. Motto: \"I use tech to speak for those who can't—and build for those who will.\"",
      image: null,
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
      image: null,
    },
    {
      name: "Osambo Cherise Fasey",
      company: "KCA University",
      bio: "Information Technology student at KCA University with experience in software development and digital literacy training. Advocate for women and youth in tech, committed to fostering digital inclusion through mentorship and community engagement.",
      image: null,
    },
    {
      name: "Linet Muriuki",
      company: "Partnership & Outreach Lead",
      bio: "Partnership & Outreach Lead, Data Analyst, and Tech Literacy Advocate.",
      image: null,
    },
    {
      name: "Nkeiruka Ifeonu",
      company: "Product Designer",
      bio: "Award-winning product designer with over 3 years of experience in User Experience and User Interface. Enjoys community building, teaching, and mentoring.",
      image: null,
    },
    {
      name: "Esther Oyoo",
      company: "Kenyatta University",
      bio: "Second-year student at Kenyatta University studying Mathematics and Computer Science. AWS Certified Cloud Practitioner and STEM advocate passionate about empowering young women in technology.",
      image: null,
    },
    {
      name: "Cynthia Kamau",
      company: "OpenMRS",
      bio: "Software developer and community leader contributing to OpenMRS 3.x. Advocates for responsible and ethical AI, shaping best practices in healthcare and high-stakes domains.",
      image: null,
    },
    {
      name: "Kayuyu Mwaura",
      company: "Technology Researcher",
      bio: "Multidisciplinary technology leader and researcher leveraging AI and emerging technologies for human-centered innovation in Africa. Advocate for ethical AI and digital literacy.",
      image: null,
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

  // Randomize speakers on component mount
  React.useEffect(() => {
    const shuffled = [...speakers].sort(() => Math.random() - 0.5);
    setRandomizedSpeakers(shuffled);
  }, []);

  const displayedSpeakers = viewMore ? randomizedSpeakers : randomizedSpeakers.slice(0, 5);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Event Speakers</h1>
        <p className="text-lg text-gray-600 mb-8">Click on any speaker card to read their full biography</p>
        
        <div className="grid md:grid-cols-5 gap-4">
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
      </div>
    </div>
  );
};

export default EventSpeakerDemo;