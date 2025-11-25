"use client";
import React, { useState } from "react";
import Image from "next/image";
import EventSpeakerSection from "./event-speaker-section";
import { EventSpeaker } from "./event-speaker";

interface SpeakerCardProps {
  name: string;
  title: string;
  bgColor: string;
  image?: string | null;
  comingSoon?: boolean;
}

export const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  title,
  image,
  comingSoon = false,
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className={`h-60 relative overflow-hidden`}>
        {!comingSoon ? (
          image ? (
            <Image src={image} alt={name} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full"></div>
            </div>
          )
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 bg-purple-500 rounded-2xl flex items-center justify-center mb-4 mx-auto relative transform rotate-12">
                <div className="absolute -top-2 -right-2">
                  <div className="w-3 h-3 bg-purple-500 transform rotate-45"></div>
                  <div className="w-2 h-2 bg-purple-500 transform rotate-45 absolute -top-1 -right-1"></div>
                  <div className="w-4 h-4 bg-purple-500 transform rotate-45 absolute -top-2 right-1"></div>
                </div>
                <svg
                  className="w-10 h-10 text-white transform -rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.17 0-.33.06-.46.14-.85.29-1.76.46-2.66.46-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 1.57-.45 3.03-1.24 4.26-.14.22-.22.48-.22.74 0 .78.63 1.41 1.41 1.41.35 0 .68-.13.93-.37C20.55 16.17 22 14.21 22 12c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
                </svg>
              </div>

              <div className="relative">
                <div className="bg-purple-500 text-white px-4 py-2 rounded-lg font-bold text-sm transform -rotate-3 shadow-lg">
                  COMING
                </div>
                <div className="bg-gray-800 text-white px-4 py-2 rounded-lg font-bold text-sm transform rotate-3 shadow-lg -mt-2">
                  SOON!
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="bg-purple-800 text-white p-4 relative">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            {comingSoon ? (
              <div className="mb-2 flex items-center space-x-2">
                <div className="w-48 h-3 bg-purple-500/50 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <p className="text-sm text-purple-200 mb-1">{title}</p>
            )}
            {comingSoon ? (
              <div className="flex items-center space-x-2">
                <div className="w-24 h-3 bg-purple-500/50 rounded-full animate-pulse"></div>
              </div>
            ) : (
              <h3 className="text-lg font-bold">{name}</h3>
            )}
          </div>
          {/* <ArrowUpRight className="w-5 h-5 text-purple-200" /> */}
        </div>
      </div>
    </div>
  );
};

const SpeakersSection: React.FC = () => {
  const [viewMore, setViewMore] = useState(false);
  const [randomizedSpeakers, setRandomizedSpeakers] = useState<
    typeof keynoteSpeakers
  >([]);
  const keynoteSpeakers = [
    {
      name: "Maureen Josephine",
      company: "Founder - Tambua Women In Tech | Software Engineer | GDE",
      bio: "Founder - Tambua Women In Tech | WIT Summit Host | Software Engineer | GDE",
     image: "/speakers/mj.png",
    },

    
    {
      name: "Anie Akpe",
      company: "Founder and Executive Director of AWIT | Fintech Leader",
      bio: "Anie Akpe is a visionary operator, fintech leader, and founder committed to building inclusive, future-focused learning ecosystems. She is the Founder of Lumo Hubs, a creative and vocational development model that partners with universities and communities to deliver hands-on studios, digital skills, and entrepreneurship pathways. With more than two decades of experience in financial systems and mortgage operations, Anie has driven transformational portfolio growth, scaling one mortgage portfolio from $259 million to $1.2 billion and another from $120 million to $700 million during her tenure with the U.S. Department of Commerce Federal Credit Union. Her leadership spans digital transformation, system conversions, and cross-sector partnership development. Anie is also the Founder and Executive Director of African Women in Technology (AWIT), a global platform that has served 8,000+ women across five countries through conferences, technical training, and career programming. Her work sits at the intersection of technology, culture, and community empowerment.",
      image: "https://drive.google.com/open?id=1gOE5W3rMVRoDWZaUMKrwYx29YVfCT5uk",
    },

    {
      name: "Laura Tich",
      company: "Founder and Executive Director of BOLTECH",
      bio: "Laura Tich is a cybersecurity enthusiast and digital safety advocate dedicated to strengthening Africa’s cyber resilience and advancing women’s participation in technology. She is the Co-founder of SheHacks_KE (shehackske.com), one of Africa’s largest community of women ethical hackers. Laura is also the Founder and Executive Director of BOLTECH (boltech.global), a cybersecurity consultancy that helps non-profits protect themselves from digital threats by developing tailored, context-specific security solutions. Through SheHacks_KE and BOLTECH, Laura is advancing an inclusive, secure, and equitable digital future for the global majority.",
      image: "https://drive.google.com/open?id=1NB0ahUCawQv3BTgfF7tNXRJCsvTNA-VP",
    },
    {
      name: "Catherine Wanjiru",
      company: "Research Engineer - IBM Research Africa",
      bio: "Wanjiru is a Software Engineer at IBM Research Africa. She is part of the Algorithms and Applications team - Space Partnerships. Her work involves conducting research on the implementation of Geospatial Foundation Models in climate enabling her to deploy multiple solutions into production and develop automated software processes. She is actively involved in the tech ecosystem with an interest in women in STEM.  She holds a masters degree from Carnegie Mellon University in Information Technology and a bachelors in Computer Science from Masinde Muliro University, Kenya",
      image: "https://drive.google.com/open?id=1J-pJgN9KnVeOwXpUGGCfRXYlnezC37sW",
    },
    {
      name: "Faith Wanyangu",
      company: "SOC Analyst",
      bio: "Cybersecurity Analyst specializing in threat monitoring and incident response in the financial sector. Focused on strengthening defenses and safeguarding critical systems.",
      image: "https://drive.google.com/open?id=1K74UGZD7F8SBFqab8AR54Upo-e7cmgRp",
    },
    {
      name: "Dorcas Mutunga",
      company: "Business Development Lead",
      bio: "I describe myself as a well-rounded sales and marketing professional with an interest in AI and machine learning.",
      image: "https://drive.google.com/open?id=1EIev12xEjCjiV-Sq8mDEo6maY-F_pefY",
    },


    {
      name: "Phyian Karinge",
      company: "Founder of Youngtechiez",
      bio: "Phyian Karinge is the founder of YoungTechiez, a thriving tech community of over 15,000 young Africans. She is obsessed with the intersection of people and technology. She channels that obsession through the YoungTechiez Show, where she spotlights the most tech inspiring stories with a focus on their failures; to document Africa's stories and learnings for future generations. She also leads the YoungTechiez School, a school focused on supporting non-technical professionals transition into tech, reskill, and stay relevant in the digital age. She was recently recognized among Kenya's Top 40 Under 40 change-makers, and won the WomenTechGlobal award.",
      image: "https://drive.google.com/open?id=1AGVFOWtW7uPK_qjVAlAjy1g2IavJCuZT",
    },
    {
      name: "Anne Kamunyu",
      company: "Regional Product/Project Leader",
      bio: "High-impact Product/Project Leader shaping AgriTech, Climate Tech, and FinTech solutions across Africa, while now expanding her expertise into the fast-growing EV space. I have built practical, scalable products at the intersection of technology, field operations, and financial inclusion. I'm known for turning complex challenges into simple, user-centric solutions that deliver real value on the ground.",
      image: "https://drive.google.com/open?id=1TWlSo-VRtMSDAr7wU_7wxT1JjhDY77Qw",
    },
    {
      name: "Virginia Wawira",
      company: "Product Manager at M-PESA - Safaricom PLC",
      bio: "With over 8 years of experience in digital payments and fintech innovation, currently leading innovations across the consumer payments space at Safaricom. Virginia has been instrumental in the development and growth of M-PESA GO, Safaricom's youth-focused digital finance and learning platform. She's passionate about building inclusive products that connect technology, learning, and empowerment for the young generation.",
      image: "https://drive.google.com/open?id=1eybWewn6lD7L0lfylPC5jqlIFs57Jqsf",
    },

    {
      name: "Faith Ngogoyo",
      company: "CEO and Founder Tanda Tech Hub",
      bio: "Faith Ngogoyo-Mwangi, is a visionary leader in the African EdTech and innovation space. She has over nine years of experience leading transformative education and technology programs across East, West, and Southern Africa. Faith has served as Country Director, Co-Founder, and Program Director in several forward-thinking organizations, designing scalable, high-impact solutions that prepare teachers, youth, and entrepreneurs for the future of work. Her work has reached thousands of learners and educators, and she has been featured on Citizen TV, Nation Media Group, The SA Summit, and Online Education forums for her contributions to digital transformation and education reform.",
      image: "https://drive.google.com/open?id=1TFyS-Mwz_6KqpZW00fnL14ZWZryPH3s2",
    },
    {
      name: "Faith Kimanzi",
      company: "Solution Architect & Women in Tech Advocate",
      bio: "Eng. Mueni Faith is blazing trails in Kenya's telecom sector as a Solution Architect and Women in Tech Advocate. With a strong background in enterprise technology and mentorship, she is passionate about creating pathways for women and youth to thrive in Africa's digital economy. Having led and participated in over 50 empowerment events, she continues to mentor and inspire young women in STEM — championing leadership, inclusion, and innovation to drive Africa's digital transformation.",
      image: "https://drive.google.com/open?id=1SKln2qIf37TH_FeNXjxJ5nrfiBojP3at",
    },
    {
      name: "Khadija Abdul",
      company: "Non Executive Board Director AWIT & AMREF Flying Doctors",
      bio: "With over 12 years of experience spanning the technology and media industries, Khadija is an entrepreneurial, results-oriented leader who is passionate about improving lives and livelihoods in Africa. A seasoned strategist, she excels at delivering complex programs at scale, nurturing inclusive, high-impact teams, and delivering strategic partnerships that drive transformative action. As Android Business Development Manager, Khadija manages the deals that keep driving Android's growth in Africa. Previous, in her role as Technical Programs Manager for Goggle for Developers in Africa, Khadija's worked to educate & advocate for 10,000+ African developers at Google Product Offerings through content focused community building.",
      image: "https://drive.google.com/open?id=1U3K5XClmy3ySk81U42sDAZHLbZzux0Em",
    },
    {
      name: "Victoria Mutai",
      company: "Software Engineer",
      bio: "Victoria Mutai is a Software Engineer passionate about building scalable products and empowering the next generation of women in technology. She has worked in agritech, and automation, leading initiatives in frontend engineering, system integrations, and test automation. Beyond engineering, Victoria actively mentors young women transitioning into tech and builds community programs that bridge knowledge, confidence, and opportunity for girls in underserved areas.",
      image: "https://drive.google.com/open?id=1sM75VPShm6NB0irEQfk8VyZoV1nEzk57",
    },

    
    {
      name: "Nashon Garvey",
      company: "Co-Founder & CFO, Siscom",
      bio: "Nashon Garvey is a tech entrepreneur building Siscom into a leading cloud and digital infrastructure company in Africa. He focuses on creating scalable solutions, driving innovation, and enabling the next wave of African founders through reliable digital infrastructure.",
      image: "https://drive.google.com/open?id=1KQDZypi8wTa0Xj9O4NFI454ihrjx-6bA",
    },
    {
      name: "Patricia Okelo",
      company: "Founder Candid Conversations",
      bio: "Patricia is passionate about entrepreneurship and empowering women. She is a strong believer that women entrepreneurs will be in the frontline in changing Africa for the better. She is the Co-Author of – A Candid Handbook for Women doing Business in Kenya, primarily to encourage women to venture into entrepreneurship, as she believes that this will empower them into leadership roles. She is the founder of Candid Conversations: Circles for Women in Business. This is a community of female entrepreneurs who believe in the principle of abundance. It's a space where knowledge is shared through candid conversations held through curated networking events.",
      image: "https://drive.google.com/open?id=18vVtTGDh0t1WrMuKcYBcJXM6S9ZW1olH",
    },

 
    {
      name: "Joy Phoebe",
      company: "Software Developer & Mental Health Advocate",
      bio: "I enjoy using technology to help businesses have easy workflows. And that sense of ease is the same energy I share in my mental health advocacy.",
      image: "https://drive.google.com/open?id=18l7hwnZyZOv9YljZdzGebFKRZhsmEwyt",
    },
    {
      name: "Latifa Noor",
      company: "Founder & Executive Director",
      bio: "",
      image: "https://drive.google.com/open?id=14-TmJFpzN3aFcuFsmKsPlSq8dSRzyVnF",
    },

    // Day 2 - Mentorship Panel
    {
      name: "Daisy Faith",
      company: "Software Developer",
      bio: "Daisy Auma is a software developer and content creator passionate about AI, data, and digital innovation. She is the co-founder of Lux Dev HQ, where she helps mentor the next generation of data scientists. Through YouTube and TikTok, she shares insights on AI and data, inspiring others to explore the world of technology.",
      image: "https://drive.google.com/open?id=1vY5KfagCzau7e7fnrZOLN3wr7QGgXjDI",
    },
    {
      name: "Sumaiya Nalukwago",
      company: "IT Professional | Tech Community Lead",
      bio: "Sumaiya Nalukwago is an experienced IT Professional currently working with Mbarara University of Science and Technology, a Tech Community Lead with over six years of proven success in leveraging technology to drive economic development and  innovation across Uganda. A recognized voice in the continental tech landscape, Sumaiya has been a volunteer for PyCon Uganda since its inception and has spoken at major international conferences. This experience underscores her deep commitment to the open-source movement and her ability to engage diverse global audiences. As a Community Lead for  Google Developer Groups Cloud Mbarara and an Ambassador for Google Women Techmakers, Sumaiya actively skills and mentors thousands of youth and women entrepreneurs in digital literacy, business development, and tech-solution design. She specializes in translating complex technological concepts into accessible, actionable skills, enabling grassroots enterprises to thrive in the digital economy and confidently bridge the digital skills gap.Sumaiya has also been internationally recognized for her work in tech by the US embassy in Uganda, Women Tech Global Network among other platforms",
      image: "https://drive.google.com/open?id=1nGnXA84tO27_g-NxFZbDwb3QP7YHmzkI",
    },
    {
      name: "Hannah Ogega",
      company: "Head Of Product (D365 BC) - Platcorp Group",
      bio: "Hannah Ogega is a project and IT leader with experience managing large, complex portfolios across multiple subsidiaries. She has overseen more than 200 projects, led cross-functional teams across five regions, and introduced structures that improved delivery speed, reduced backlogs, and strengthened collaboration between technical and non-technical teams.Hannah has managed major ERP implementations, including D365 and Business Central, and has guided organisations through process improvements that have increased efficiency, accuracy, and transparency. She has also delivered automation initiatives, cut operational costs, and supported teams through system changes and new ways of working. She holds an MSc in Mobile Telecommunications and Innovation, a PMP certification, and has completed multiple leadership programmes focused on practical, people-centred management.",
      image: "https://drive.google.com/open?id=14s9hVXbGQfuUI-x6IyXvcpKXldbvmbKA",
    },
    {
      name: "Violet Awuor",
      company: "Head Of Engineering - Platcorp Group",
      bio: "Violet Awuor is a technology leader with experience driving digital transformation, IT service excellence, and secure, scalable systems across Africa. She has led ERP implementations, AI-driven automation, multi-system integrations, and strong IT governance frameworks in more than seven countries. As Group Solutions Architect & Head of Software Development at Platcorp Group, Violet guides teams in building human-centred digital platforms that improve efficiency and resilience. She holds a Master of Science degree in IT Management and is certified in PMP, CISA, and ITIL. Violet is passionate about inclusive leadership, mentorship, and empowering young women in technology.",
      image: "https://drive.google.com/open?id=1zhhgFpzv-3m0QDd5htYy8I8VPiUmKwyw",
    },
    {
      name: "Edith Nyaga",
      company: "Group Head of MIS and Innovation at Platcorp",
      bio: "Edith Nyaga is a seasoned technology leader and the Group Head of MIS and Innovation at Platcorp. With a career built on a strong technical foundation, she has progressed through diverse roles in software development, database administration, quality assurance (QA) and project management, IT governance, risk and compliance, setting up and leading technology teams, among others, giving her a holistic understanding of the digital ecosystem. At Platcorp, Edith drives digital transformation and IT product strategy. She is instrumental in leveraging fintech to foster financial inclusion, ensuring that technology serves as a bridge to empower underserved communities.",
      image: "https://drive.google.com/open?id=1c3r3ZAlP8vsmxU-WeIXJ-KI9d6uPw7di",
    },
  ];

  React.useEffect(() => {
    const shuffled = [...keynoteSpeakers].sort(() => Math.random() - 0.5);
    setRandomizedSpeakers(shuffled);
  }, []);

  const displayedSpeakers = viewMore
    ? randomizedSpeakers
    : randomizedSpeakers.slice(0, 10);

  return (
    <section
      id="speakers"
      className="pb-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Panelists & Keynote Speakers
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            "I'm building the space I wish existed when I was starting out." –
            Maureen Josephine
          </p>

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
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Speakers</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Real voices. Honest journeys. Everything they say will land
            differently—because they've walked where you're walking.
          </p>

          <EventSpeakerSection />
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;
