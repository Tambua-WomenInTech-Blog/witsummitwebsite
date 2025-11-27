"use client";

import { EventSpeaker } from "./event-speaker";

const KeynoteSpeakersSection: React.FC = () => {
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
      image:
        "https://drive.google.com/open?id=1gOE5W3rMVRoDWZaUMKrwYx29YVfCT5uk",
    },
     {
      name: "Lilian Nyawira",
      company: "Senior Tech Leader at Safaricom | Cloud Infrastructure & Women in Tech Advocate",
      bio: "Lilian Nyawira Kiambati stands out as a senior tech leader at Safaricom who blends digital service delivery expertise, cloud infrastructure strategy, and active advocacy for women in tech. Her public roles, moderating tech forums, leading panels, and mentoring, highlight her commitment to steering Kenya’s digital transformation inclusively. A visible mentor for Women in Technology initiatives within Safaricom and the broader industry—helping to close the gender gap in tech.",
      image: "https://drive.google.com/open?id=1TCeIvsOcqWU5qRHHVFQq5F5aoA8vu2bf",
    },

    {
      name: "Vyrone Ochola",
      company: "Trade and Economic Inclusion Officer at TISA",
      bio: "Vyrone Ochola empowers women and youth through inclusive economic pathways and governance engagement.",
      image:
        "https://drive.google.com/open?id=1ICwOfmOp5DQ8p87Q-_0KXK2uz5k54JhB",
    },
  ];

  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">
        Keynote Speakers
      </h2>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl">
        "I'm building the space I wish existed when I was starting out." –
        Maureen Josephine
      </p>

      <>
        <div className="grid md:grid-cols-5 gap-5">
          {keynoteSpeakers.map((speaker, index) => (
            <EventSpeaker
              key={index}
              name={speaker.name}
              company={speaker.company}
              bio={speaker.bio}
              image={speaker.image}
            />
          ))}
        </div>
      </>
    </div>
  );
};

export default KeynoteSpeakersSection;
