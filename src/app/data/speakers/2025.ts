import type { Speaker, SpeakerLineup } from "./types";

const keynotes: Speaker[] = [
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
    image:
      "https://drive.google.com/open?id=1gOE5W3rMVRoDWZaUMKrwYx29YVfCT5uk",
  },
  {
    name: "Lilian Nyawira",
    company:
      "Senior Tech Leader at Safaricom | Cloud Infrastructure & Women in Tech Advocate",
    bio: "Lilian Nyawira Kiambati stands out as a senior tech leader at Safaricom who blends digital service delivery expertise, cloud infrastructure strategy, and active advocacy for women in tech. Her public roles, moderating tech forums, leading panels, and mentoring, highlight her commitment to steering Kenya’s digital transformation inclusively. A visible mentor for Women in Technology initiatives within Safaricom and the broader industry—helping to close the gender gap in tech.",
    image:
      "https://drive.google.com/open?id=1TCeIvsOcqWU5qRHHVFQq5F5aoA8vu2bf",
  },

  {
    name: "Vyrone Ochola",
    company: "Trade and Economic Inclusion Officer at TISA",
    bio: "Vyrone Ochola empowers women and youth through inclusive economic pathways and governance engagement.",
    image:
      "https://drive.google.com/open?id=1ICwOfmOp5DQ8p87Q-_0KXK2uz5k54JhB",
  },
];

const panelists: Speaker[] = [
  {
    name: "Laura Tich",
    company: "Founder and Executive Director of BOLTECH",
    bio: "Laura Tich is a cybersecurity enthusiast and digital safety advocate dedicated to strengthening Africa’s cyber resilience and advancing women’s participation in technology. She is the Co-founder of SheHacks_KE (shehackske.com), one of Africa’s largest community of women ethical hackers. Laura is also the Founder and Executive Director of BOLTECH (boltech.global), a cybersecurity consultancy that helps non-profits protect themselves from digital threats by developing tailored, context-specific security solutions. Through SheHacks_KE and BOLTECH, Laura is advancing an inclusive, secure, and equitable digital future for the global majority.",
    image:
      "https://drive.google.com/open?id=1NB0ahUCawQv3BTgfF7tNXRJCsvTNA-VP",
  },
  {
    name: "Catherine Wanjiru",
    company: "Research Engineer - IBM Research Africa",
    bio: "Wanjiru is a Software Engineer at IBM Research Africa. She is part of the Algorithms and Applications team - Space Partnerships. Her work involves conducting research on the implementation of Geospatial Foundation Models in climate enabling her to deploy multiple solutions into production and develop automated software processes. She is actively involved in the tech ecosystem with an interest in women in STEM.  She holds a masters degree from Carnegie Mellon University in Information Technology and a bachelors in Computer Science from Masinde Muliro University, Kenya",
    image:
      "https://drive.google.com/open?id=1J-pJgN9KnVeOwXpUGGCfRXYlnezC37sW",
  },
  {
    name: "Faith Wanyangu",
    company: "SOC Analyst",
    bio: "Cybersecurity Analyst specializing in threat monitoring and incident response in the financial sector. Focused on strengthening defenses and safeguarding critical systems.",
    image:
      "https://drive.google.com/open?id=1xZcDmqqfIrh6wb_u_HHZhLrfZYRc_Yt-",
  },
  {
    name: "Dorcas Mutunga",
    company: "Business Development Lead",
    bio: "I describe myself as a well-rounded sales and marketing professional with an interest in AI and machine learning.",
    image:
      "https://drive.google.com/open?id=1EIev12xEjCjiV-Sq8mDEo6maY-F_pefY",
  },

  {
    name: "Phyian Karinge",
    company: "Founder of Youngtechiez",
    bio: "Phyian Karinge is the founder of YoungTechiez, a thriving tech community of over 15,000 young Africans. She is obsessed with the intersection of people and technology. She channels that obsession through the YoungTechiez Show, where she spotlights the most tech inspiring stories with a focus on their failures; to document Africa's stories and learnings for future generations. She also leads the YoungTechiez School, a school focused on supporting non-technical professionals transition into tech, reskill, and stay relevant in the digital age. She was recently recognized among Kenya's Top 40 Under 40 change-makers, and won the WomenTechGlobal award.",
    image:
      "https://drive.google.com/open?id=1AGVFOWtW7uPK_qjVAlAjy1g2IavJCuZT",
  },
  {
    name: "Anne Kamunyu",
    company: "Regional Product/Project Leader",
    bio: "High-impact Product/Project Leader shaping AgriTech, Climate Tech, and FinTech solutions across Africa, while now expanding her expertise into the fast-growing EV space. I have built practical, scalable products at the intersection of technology, field operations, and financial inclusion. I'm known for turning complex challenges into simple, user-centric solutions that deliver real value on the ground.",
    image:
      "https://drive.google.com/open?id=1TWlSo-VRtMSDAr7wU_7wxT1JjhDY77Qw",
  },
  {
    name: "Virginia Wawira",
    company: "Product Manager at M-PESA - Safaricom PLC",
    bio: "With over 8 years of experience in digital payments and fintech innovation, currently leading innovations across the consumer payments space at Safaricom. Virginia has been instrumental in the development and growth of M-PESA GO, Safaricom's youth-focused digital finance and learning platform. She's passionate about building inclusive products that connect technology, learning, and empowerment for the young generation.",
    image:
      "https://drive.google.com/open?id=1eybWewn6lD7L0lfylPC5jqlIFs57Jqsf",
  },

  {
    name: "Faith Ngogoyo",
    company: "CEO and Founder Tanda Tech Hub",
    bio: "Faith Ngogoyo-Mwangi, is a visionary leader in the African EdTech and innovation space. She has over nine years of experience leading transformative education and technology programs across East, West, and Southern Africa. Faith has served as Country Director, Co-Founder, and Program Director in several forward-thinking organizations, designing scalable, high-impact solutions that prepare teachers, youth, and entrepreneurs for the future of work. Her work has reached thousands of learners and educators, and she has been featured on Citizen TV, Nation Media Group, The SA Summit, and Online Education forums for her contributions to digital transformation and education reform.",
    image:
      "https://drive.google.com/open?id=1TFyS-Mwz_6KqpZW00fnL14ZWZryPH3s2",
  },
  {
    name: "Faith Kimanzi",
    company: "Solution Architect & Women in Tech Advocate",
    bio: "Eng. Mueni Faith is blazing trails in Kenya's telecom sector as a Solution Architect and Women in Tech Advocate. With a strong background in enterprise technology and mentorship, she is passionate about creating pathways for women and youth to thrive in Africa's digital economy. Having led and participated in over 50 empowerment events, she continues to mentor and inspire young women in STEM — championing leadership, inclusion, and innovation to drive Africa's digital transformation.",
    image:
      "https://drive.google.com/open?id=1SKln2qIf37TH_FeNXjxJ5nrfiBojP3at",
  },
  {
    name: "Khadija Abdul",
    company: "Non Executive Board Director AWIT & AMREF Flying Doctors",
    bio: "With over 12 years of experience spanning the technology and media industries, Khadija is an entrepreneurial, results-oriented leader who is passionate about improving lives and livelihoods in Africa. A seasoned strategist, she excels at delivering complex programs at scale, nurturing inclusive, high-impact teams, and delivering strategic partnerships that drive transformative action. As Android Business Development Manager, Khadija manages the deals that keep driving Android's growth in Africa. Previous, in her role as Technical Programs Manager for Goggle for Developers in Africa, Khadija's worked to educate & advocate for 10,000+ African developers at Google Product Offerings through content focused community building.",
    image:
      "https://drive.google.com/open?id=1U3K5XClmy3ySk81U42sDAZHLbZzux0Em",
  },
  {
    name: "Victoria Mutai",
    company: "Software Engineer",
    bio: "Victoria Mutai is a Software Engineer passionate about building scalable products and empowering the next generation of women in technology. She has worked in agritech, and automation, leading initiatives in frontend engineering, system integrations, and test automation. Beyond engineering, Victoria actively mentors young women transitioning into tech and builds community programs that bridge knowledge, confidence, and opportunity for girls in underserved areas.",
    image:
      "https://drive.google.com/open?id=1sM75VPShm6NB0irEQfk8VyZoV1nEzk57",
  },

  {
    name: "Nashon Garvey",
    company: "Co-Founder & CFO, Siscom",
    bio: "Nashon Garvey is a tech entrepreneur building Siscom into a leading cloud and digital infrastructure company in Africa. He focuses on creating scalable solutions, driving innovation, and enabling the next wave of African founders through reliable digital infrastructure.",
    image:
      "https://drive.google.com/open?id=1KQDZypi8wTa0Xj9O4NFI454ihrjx-6bA",
  },
  {
    name: "Patricia Okelo",
    company: "Founder Candid Conversations",
    bio: "Patricia is passionate about entrepreneurship and empowering women. She is a strong believer that women entrepreneurs will be in the frontline in changing Africa for the better. She is the Co-Author of – A Candid Handbook for Women doing Business in Kenya, primarily to encourage women to venture into entrepreneurship, as she believes that this will empower them into leadership roles. She is the founder of Candid Conversations: Circles for Women in Business. This is a community of female entrepreneurs who believe in the principle of abundance. It's a space where knowledge is shared through candid conversations held through curated networking events.",
    image:
      "https://drive.google.com/open?id=18vVtTGDh0t1WrMuKcYBcJXM6S9ZW1olH",
  },

  {
    name: "Joy Phoebe",
    company: "Software Developer & Mental Health Advocate",
    bio: "I enjoy using technology to help businesses have easy workflows. And that sense of ease is the same energy I share in my mental health advocacy.",
    image:
      "https://drive.google.com/open?id=18l7hwnZyZOv9YljZdzGebFKRZhsmEwyt",
  },
  {
    name: "Latifa Noor",
    company: "Founder & Executive Director",
    bio: "",
    image:
      "https://drive.google.com/open?id=1wsTuXtUSq_LmKh2crgufryBXJZG4XPYp",
  },

  // Day 2 - Mentorship Panel
  {
    name: "Daisy Faith",
    company: "Software Developer",
    bio: "Daisy Auma is a software developer and content creator passionate about AI, data, and digital innovation. She is the co-founder of Lux Dev HQ, where she helps mentor the next generation of data scientists. Through YouTube and TikTok, she shares insights on AI and data, inspiring others to explore the world of technology.",
    image:
      "https://drive.google.com/open?id=1vY5KfagCzau7e7fnrZOLN3wr7QGgXjDI",
  },
  {
    name: "Sumaiya Nalukwago",
    company: "IT Professional | Tech Community Lead",
    bio: "Sumaiya Nalukwago is an experienced IT Professional currently working with Mbarara University of Science and Technology, a Tech Community Lead with over six years of proven success in leveraging technology to drive economic development and  innovation across Uganda. A recognized voice in the continental tech landscape, Sumaiya has been a volunteer for PyCon Uganda since its inception and has spoken at major international conferences. This experience underscores her deep commitment to the open-source movement and her ability to engage diverse global audiences. As a Community Lead for  Google Developer Groups Cloud Mbarara and an Ambassador for Google Women Techmakers, Sumaiya actively skills and mentors thousands of youth and women entrepreneurs in digital literacy, business development, and tech-solution design. She specializes in translating complex technological concepts into accessible, actionable skills, enabling grassroots enterprises to thrive in the digital economy and confidently bridge the digital skills gap.Sumaiya has also been internationally recognized for her work in tech by the US embassy in Uganda, Women Tech Global Network among other platforms",
    image:
      "https://drive.google.com/open?id=1nGnXA84tO27_g-NxFZbDwb3QP7YHmzkI",
  },
  {
    name: "Hannah Ogega",
    company: "Head Of Product (D365 BC) - Platcorp Group",
    bio: "Hannah Ogega is a project and IT leader with experience managing large, complex portfolios across multiple subsidiaries. She has overseen more than 200 projects, led cross-functional teams across five regions, and introduced structures that improved delivery speed, reduced backlogs, and strengthened collaboration between technical and non-technical teams.Hannah has managed major ERP implementations, including D365 and Business Central, and has guided organisations through process improvements that have increased efficiency, accuracy, and transparency. She has also delivered automation initiatives, cut operational costs, and supported teams through system changes and new ways of working. She holds an MSc in Mobile Telecommunications and Innovation, a PMP certification, and has completed multiple leadership programmes focused on practical, people-centred management.",
    image:
      "https://drive.google.com/open?id=14s9hVXbGQfuUI-x6IyXvcpKXldbvmbKA",
  },
  {
    name: "Violet Awuor",
    company: "Head Of Engineering - Platcorp Group",
    bio: "Violet Awuor is a technology leader with experience driving digital transformation, IT service excellence, and secure, scalable systems across Africa. She has led ERP implementations, AI-driven automation, multi-system integrations, and strong IT governance frameworks in more than seven countries. As Group Solutions Architect & Head of Software Development at Platcorp Group, Violet guides teams in building human-centred digital platforms that improve efficiency and resilience. She holds a Master of Science degree in IT Management and is certified in PMP, CISA, and ITIL. Violet is passionate about inclusive leadership, mentorship, and empowering young women in technology.",
    image:
      "https://drive.google.com/open?id=1zhhgFpzv-3m0QDd5htYy8I8VPiUmKwyw",
  },
  {
    name: "Edith Nyaga",
    company: "Group Head of MIS and Innovation at Platcorp",
    bio: "Edith Nyaga is a seasoned technology leader and the Group Head of MIS and Innovation at Platcorp. With a career built on a strong technical foundation, she has progressed through diverse roles in software development, database administration, quality assurance (QA) and project management, IT governance, risk and compliance, setting up and leading technology teams, among others, giving her a holistic understanding of the digital ecosystem. At Platcorp, Edith drives digital transformation and IT product strategy. She is instrumental in leveraging fintech to foster financial inclusion, ensuring that technology serves as a bridge to empower underserved communities.",
    image:
      "https://drive.google.com/open?id=1c3r3ZAlP8vsmxU-WeIXJ-KI9d6uPw7di",
  },
];

const speakers: Speaker[] = [
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

export const lineup2025: SpeakerLineup = {
  year: 2025,
  keynotes: { speakers: keynotes },
  panelists: { speakers: panelists },
  speakers: { speakers },
};
