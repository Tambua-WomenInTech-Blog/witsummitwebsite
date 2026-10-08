import React, { useState } from "react";
import { EventSpeaker } from "./event-speaker";

const EventSpeakerSection = () => {
  const [viewMore, setViewMore] = useState(false);
  const [randomizedSpeakers, setRandomizedSpeakers] = useState<typeof speakers>(
    [],
  );

  const speakers = [
    {
      name: "Abigael Mukuru Zawadi",
      company: "Data Scientist & ML Engineer - Founder, Inua360",
      bio: "Abigael Zawadi Mukuru is a Nairobi-based Data Scientist and Machine Learning Engineer who builds AI systems grounded in African realities. She is the founder of Inua360, an ML platform assessing SME eligibility and default risk that achieves ~85% predictive accuracy and is designed to process over 1,000 applications per day — directly impacting access to funding for Kenyan small businesses.\nHer engineering experience spans recommendation systems, demand forecasting, predictive logistics, and FastAPI-powered ML deployments. As a Machine Learning Engineer Intern at Uamuzi, she shipped a hybrid recommendation engine serving 5,000+ active users on a live civic engagement platform.\nBeyond building, Abigael organises ML/AI workshops through Google Developer Groups across three cities, has won three hackathon awards, and writes applied ML tutorials reaching 100+ readers monthly on Medium.",
      image:
        "https://drive.google.com/open?id=1f7l1Y6FXsFi34SkhCJGjOeE6fL_A__Rf",
    },
    {
      name: "Esther Sumba",
      company: "Project & Change Lead, Security Monitoring",
      bio: "Esther is a banking technology and product management professional with over 8 years of experience spanning product and project management, business analysis, IT risk management, technology audit, and digital transformation. She is currently serving as a Project and Change Lead in Security Monitoring, where she drives strategic initiatives, manages cross functional change programs and supports secure and resilient technology operations within the fintech space.\n\nCertified as a Scrum Product Owner (CSPO®) and SAFe® 6 Product Owner/Product Manager, Esther has successfully led and delivered multiple projects using Agile methodologies, ensuring efficient execution and timely product launches. Her strong analytical mindset, stakeholder management expertise and adaptability enable her to thrive in dynamic and multicultural environments.\n\nBeyond her corporate experience, Esther is also an Educational Technologist passionate about blending technology into classroom learning. Her passion for education has seen her build technology curriculums for the International University of Applied Sciences in Berlin and United Nations Migration (IOM). She is deeply interested in innovation, digital transformation and empowering others through knowledge sharing and mentorship.",
      image:
        "https://drive.google.com/open?id=15-AyLm0YPswYCZA3UVSnu3pQoZwjzLrr",
    },
    {
      name: "Lydiah Ng'ang'a",
      company: "Cloud & DevOps Engineer",
      bio: "I'm a Cloud & DevOps Engineer based in Nairobi, currently interning as an SRE/DevOps Engineer at a telecom infrastructure company, where I work on security monitoring, Ansible automation, and log pipeline migrations for production systems. I'm a career transitioner from finance I've built my technical skills through AWS re/Start, the StegHub Cloud & DevOps Apprenticeship, and the Tech4Dev Fellowship. I'm AWS Cloud Practitioner and KCNA certified. I write about what I'm learning as I go, mistakes included.",
      image:
        "https://drive.google.com/open?id=1bddXuA5eZ8qD1wxQXjLrsxxpHhauQ-yJ",
    },
    {
      name: "Julie Ojwaya",
      company: "Advocate & Regulatory Affairs Specialist",
      bio: "I'm an advocate, and a regulatory affairs specialist of over 13 years' expertise. I'm also passionate about professional development and mentorship, of women, especially. I'm deeply passionate about technology, payments and fintech and Africans building solutions for Africa.\nFun fact, I was to speak in the 2019 summit but was pulled into a work engagement and I've been looking forward to another opportunity since. I'm truly looking forward to the session.",
      image:
        "https://drive.google.com/open?id=12pxgCT8nud9QqnidDPq7hpGFe3o-ha_l",
    },
    {
      name: "Morara Millicent",
      company: "Data Scientist & MLOps Engineer",
      bio: "I am a full stack Data Scientist and MLOps Engineer specializing in building scalable ML pipelines, full-stack AI products and cloud architectures like Google Cloud, Azure & Docker.\nI am passionate about community leadership and sustainable tech.\nI bridge robust backend engineering with user-friendly AI solutions.",
      image:
        "https://drive.google.com/open?id=1KoF4wdhhbm35n7kYTav5TWjM9Q1UGCAr",
    },
    {
      name: "Alfonce Micah Yano",
      company: "Applications Developer & Health Systems Architect",
      bio: "I became a health-tech developer because I believe that good data saves lives, and in much of Kenya, that data is still sitting in a handwritten diary.\n\nFor the past five years, I have been building systems that sit at the intersection of clinical care and technology. Right now, I work as an Applications Developer and Health Systems Architect at Aga Khan University Hospital in Nairobi, where I develop EHR integrations and clinical workflow systems in one of the most demanding and compliance-driven healthcare environments in East Africa.\n\nAt the same time, my MSc research at Moi University is taking me back to the problem that drives me: why do well-funded digital health systems get quietly abandoned? My research develops a prototype-based digital transformation framework specifically for maternal and child health records in Kisumu County by building an offline-first, FHIR-aligned mobile system designed around the real constraints of rural facilities, not the ideal ones.\n\nA year spent with CorpsAfrica in Kitui, facilitating community-led projects through Human-Centered Design, changed how I think about technology. The best solution is not the most sophisticated one. It is the one the community actually uses.\n\nI build with Flutter, .NET, Node.js, Python, and FHIR-standard integrations. I am passionate about interoperable health systems, digital transformation in low-resource settings, and design that puts users first.\nIf you are working on similar problems in African health systems, I would love to connect.",
      image:
        "https://drive.google.com/open?id=1eW-CMSXlr7tDmROEc5HNBMn70jBD5I1i",
    },
    {
      name: "Blossom Dugbatey",
      company: "Software Engineer",
      bio: "Blossom Dugbatey is a software engineer based in Ghana with experience building secure systems across IT business solutions, banking systems, and startup environments. She is passionate about designing secure, scalable systems and actively contributes to developer communities across Ghana.\n\nShe is a Community Manager at Everything Open Source and an admin at DevCongress, where she supports developer growth through events, workshops, system design sessions, and mentorship.\n\nShe has mentored over 200 developers into tech, spoken at 15 tech events, organized a hackathon with MEST and UNICEF, and is focused on bridging the gap between software engineering, open source, and cybersecurity in Africa through advocacy and practical implementation.",
      image:
        "https://drive.google.com/open?id=17L0ePR4bIRdMhWuUl0wqf07ESpF2h9tE",
    },
    {
      name: "Sarah Muwanguzi",
      company: "Product Owner",
      bio: "Sarah Muwanguzi is a Product Owner and former Product Designer passionate about building technology that solves real-world problems and helping people build meaningful careers in tech. She has worked across healthcare, HR, and enterprise software, leading cross-functional teams to deliver products that balance user needs, business goals, and operational impact.\n\nBeyond product development, Sarah is an educator, mentor, and speaker who has taught product design, facilitated career development sessions, and spoken at universities and technology communities across East Africa. She is particularly passionate about empowering women in tech, championing intentional career growth, and helping professionals develop the skills that extend beyond technical expertise.\n\nThrough her talks, Sarah combines practical insights, personal stories, and actionable frameworks that inspire audiences to lead with curiosity, take initiative, and create opportunities for themselves and others.",
      image:
        "https://drive.google.com/open?id=1PfzjJZ5M3PBLo1itn9sg4XoA6-xa3XAm",
    },
    {
      name: "Tabitha Margaret",
      company: "AI & Data Practitioner",
      bio: "Tabitha Margaret is an AI & Data practitioner transitioning from UI/UX and Graphic design to build user-centered, intelligent tech solutions. She's a passionate community builder; she actively contributes to Nairobi DevOps Community, Cursor Kenya, Write the Docs Kenya, and took part in organizing Kenya's first-ever UbuCon (Ubuntu Conference) that took place at USIU Africa. She is driven by a mission to blend human experience design with cutting-edge technology while empowering the African tech ecosystem to thrive.",
      image:
        "https://drive.google.com/open?id=1iVTyDj8yguttkdEgg6lIkS3U8rmtgNoY",
    },
    {
      name: "Tabitha Kavyu",
      company: "Head of Learner Success - AltSchool Africa",
      bio: "Head of Learner Success at AltSchool Africa, where I lead community, retention, and career readiness across engineering, product, and data programs serving learners across the continent. I am also an organizer with GDG Nairobi, where I have helped design and deliver flagship developer events including DevFest Nairobi and Google I/O Extended Nairobi. My work sits at the intersection of community design and career development: building the systems that help African tech talent not just enter the industry, but stay and rise in it.",
      image:
        "https://drive.google.com/open?id=1GyJtlEvQ_--F5_q2GDHUojdv6ANKEi2P",
    },
    {
      name: "Brenda Mwaura",
      company: "IT Product Development - First Assurance, Absa Group",
      bio: "Brenda Mwaura is an IT Product Development professional at First Assurance, Absa Group Africa and a community leader passionate about empowering women in technology across Africa. She has led and supported technology communities through mentorship, events and programs that foster learning, collaboration and career growth. She is also an AnitaB.org Kenya Community Leader and Youth Ambassador for Women in Tech Global, Kenya Chapter. Brenda is committed to creating inclusive spaces where women can connect, develop technical and leadership skills and thrive in the tech ecosystem. She enjoys building impactful products, growing communities and helping others unlock opportunities in technology.",
      image:
        "https://drive.google.com/open?id=12AVH_A7ELikYNZWAECnu3ya-2gImV7lR",
    },
    {
      name: "Depha Anns Okal",
      company: "Country Manager, Uganda - Boxleo Courier",
      bio: "Depha Anns Okal is a results-driven operations leader, data analytics professional, and emerging voice in leadership development. She currently serves as Country Manager-Uganda at Boxleo Courier & Fulfillment Services, where she oversees business operations, performance management, customer experience, merchant relations, and strategic growth initiatives across the Ugandan market.\n\nHer career journey is a testament to the power of data-driven leadership. Beginning as a Data Analyst, Depha built a reputation for transforming operational data into actionable business insights. Through her analytical expertise, commitment to continuous improvement, and ability to translate numbers into strategy, she rose through the ranks to executive leadership, becoming one of the youngest country managers within the organization.\n\nWith experience spanning operations management, business performance analysis, logistics, customer service optimization, workforce management, and stakeholder engagement, Depha has successfully led initiatives focused on improving delivery performance, increasing operational efficiency, strengthening merchant partnerships, and driving sustainable business growth.\n\nBeyond her professional responsibilities, Depha is passionate about leadership development and mentoring young professionals. Through her content series, Thoughts of a Young Leader, she shares practical lessons on leadership, workplace culture, career growth, and the realities of transitioning from technical roles into people leadership. She is particularly interested in helping young professionals leverage data, critical thinking, and emotional intelligence to become effective leaders.\n\nDepha believes that leadership is not about authority over people but about understanding the responsibility leaders have toward people. Her leadership philosophy combines analytical thinking with a people-centered approach, enabling her to drive performance while building trust, accountability, and high-performing teams.\n\nAs she continues her leadership journey, Depha remains committed to learning, mentoring others, and contributing to conversations around leadership, governance, operational excellence, and the future of work in Africa.",
      image:
        "https://drive.google.com/open?id=1DCGUthuGkKoysNNr_svnI9XD8bnmV_eO",
    },
    {
      name: "Eng Mueni Faith",
      company: "Network Solution Architect - Huawei",
      bio: "Graduated from The Technical University of Kenya in December 2022 with a Bachelor of Technology in Electrical and Electronics Engineering (Telecommunications and Information Technology).\n\nCurrently serving as a Network Solution Architect at Huawei, contributing to solution design, technical proposals, and collaboration with account managers and engineers to deliver effective networking solutions.\n\nExpertise includes project management, technical solution design and development, with a focus on SD-WAN, WLAN, DCN and cybersecurity solutions. Actively involved in technical demonstrations, bid responses, customer engagement, partnerships management, marketing and training stakeholders. Passionate about leveraging technology to drive impactful solutions.\n\nAdditionally, Eng. Mueni Faith has great passion for empowering women and girls in technology which has led her to actively participate in 70+ digital skills and empowerment events at Huawei and Outside Huawei through Women Initiatives Programmes.\n\nShe believes in the importance of creating inclusive spaces that support the growth and development of women in the tech industry. As a strong advocate for gender equality and diversity, she works tirelessly to inspire the next generation of female leaders in technology. She serves as part of leadership for Women In Tech Huawei.\n\nThrough her exceptional expertise, leadership, and advocacy, she continues to make a significant impact in the tech community, championing change and empowering women to seize opportunities in the digital world Services.",
      image:
        "https://drive.google.com/open?id=1BF3KEkXR5tHq5fiZDpxfR89-YAg3D0cA",
    },
    {
      name: "Beth Njeri",
      company: "ML Engineer - Founder, Axene.io",
      bio: "Beth Njeri Kimani is a Google Certified Professional Machine Learning Engineer, Founder of Axene.io, and the AI/ML Lead for GDG Chuka and She Code Africa Chuka. Passionate about bridging the gap between innovative research and practical infrastructure, Beth specializes in MLOps, autonomous multi-agent systems, and AI-driven fintech integrations. As a visionary developer, she is dedicated to building scalable AI solutions for the African digital economy and mentoring the next generation of tech leaders.",
      image:
        "https://drive.google.com/open?id=1l6Vh3U8fL9ZYQOnYXJqCY3JpMXAFDl8g",
    },
    {
      name: "Kyendereta Chantelle",
      company: "Senior Product Designer - Founder, KDK",
      bio: "Kyendereta is a senior product designer and the founder of Kenyan Design Konversations (KDK), a design community and platform with 3,400+ members across East Africa. Her work sits at the intersection of empathy-driven design and real business outcomes, building products and systems that actually work for African users, not just African markets on paper.\nThrough KDK, she has spent three years growing one of Kenya's most active design communities, producing content, programming, and resources that meet designers where they are. She also leads Kreative Cirkuit, a boutique design consultancy, and is an emerging voice on AI, UX, and financial literacy for creatives in the Silicon Savannah.\nKyendereta believes that the next generation of African tech will be built by people who feel first and are paid well enough to keep building.",
      image:
        "https://drive.google.com/open?id=1ho6gdVo0mxKXiaZHpSsQJnN3jo33f2Kz",
    },
    {
      name: "Mercy Chore",
      company: "Advocate - CM Advocates LLP",
      bio: "Mercy Cheredi Chore is an Advocate of the High Court of Kenya and a specialist in Intellectual Property, Technology and Commercial Law with over five years' experience. She is currently practising at CM Advocates LLP, where she advises on digital compliance, telecommunications, technology transactions, commercial contracts, platform governance and cross-border digital services.\n\nHer work involves advising startups, financial institutions, regulators and technology companies on regulatory compliance and risk management, with a focus on data protection, cybersecurity, intellectual property enforcement in digital environments and commercial structuring for technology-driven businesses.\n\nShe holds an LL. B (Hons) and a Postgraduate Diploma in Law from the Kenya School of Law, as well as certifications in data protection, copyright law, patent law and alternative dispute resolution for IP and technology matters.\n\nShe is a member of ICANN's Intellectual Property Constituency and the IP/ICT Liaison Committee- Nairobi Branch, and is committed to advancing a secure, inclusive and rights-respecting digital ecosystem across Africa.",
      image:
        "https://drive.google.com/open?id=1hu2LnS3WMlCDZ6l97mhjjOA5Dy_f124l",
    },
    {
      name: "Eunice Eze",
      company: "Senior Product Designer",
      bio: "Eunice is a Senior Product Designer, international speaker, and mentor who believes great careers are built through intentional impact, not just technical expertise. She has led product teams, designed products used by thousands, mentored thousands of aspiring designers, and spoken at technology conferences across Africa. Through her work at the intersection of design, leadership, and community, she helps women build the visibility, credibility, and career capital needed to lead, influence, and thrive in the technology industry.",
      image:
        "https://drive.google.com/open?id=1nALgkHOq7Y1LMQes34wBTgKvMp5-zpMY",
    },
    {
      name: "Christal Riziki",
      company: "Software Developer",
      bio: "Christal Riziki is a passionate technology enthusiast, aspiring software developer, and community-focused innovator dedicated to using technology to create meaningful social impact. With a growing background in web and mobile application development, Christal has been actively building skills in modern technologies such as Angular, React, Flutter, and AI-powered solutions.\n\nDriven by a strong passion for youth empowerment and women in technology, she is committed to creating inclusive digital solutions that address real-world community challenges in areas such as healthcare, education, and economic empowerment. Her work reflects a deep interest in product innovation, human-centered design, and using technology as a tool for positive change across African communities.\n\nChristal is also passionate about mentorship, continuous learning, and inspiring young people especially women and girls to pursue opportunities in technology and innovation. Through community initiatives, collaborative projects, and public speaking sessions, she advocates for accessible digital knowledge and the power of innovation to transform lives.\n\nHer vision is to contribute to a future where technology is not only advanced, but also inclusive, impactful, and community-driven.",
      image:
        "https://drive.google.com/open?id=1qU5SI56wPlqLHwYpJlw_o4fWSfdq_OdA",
    },
    {
      name: "Amen Divine Ikamba",
      company: "Founder & CEO - PACIN",
      bio: "Amen is the founder and CEO of PACIN (Pan-African Credit Intelligence Network), a B2B API platform selected for the inaugural UNICEF AI Ventures Accelerator and backed by the NVIDIA Inception Program. PACIN aggregates mobile money, BNPL, and savings group data across Africa to return explainable AI credit scores for the 500M+ people with no formal credit record.\n\nAmen grew up in Kigali, Rwanda, watching her mother, a loan officer, turn away creditworthy people because the system gave her no way to prove what she already knew. That experience is the origin of PACIN. She is a senior at Pitzer College studying Data Science and Mathematical Economics and competed as the youngest national finalist at Black Is Tech Conference 2026. She speaks from the middle of building something the world has not yet confirmed is possible.",
      image:
        "https://drive.google.com/open?id=1S23XzdRZXAFI8EsGYhZz9MFK1WsbRzsa",
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
