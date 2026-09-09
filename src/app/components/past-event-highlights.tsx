import Image from "next/image";
import Link from "next/link";

interface HighlightCard {
  title: string;
  description: string;
  image: string;
  href?: string;
  span: string;
}

const highlights: HighlightCard[] = [
  {
    title: "Highlights from 2025",
    description:
      "Relive the moments, sessions, and energy from the Nairobi edition.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    span: "md:col-span-3",
  },
  {
    title: "Speaker Spotlights",
    description: "Meet the voices who took the stage last year.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    span: "md:col-span-2",
  },
  {
    title: "Community Moments",
    description:
      "Attendees, ambassadors, and the connections made along the way.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1200&auto=format&fit=crop",
    href: "#",
    span: "md:col-span-2",
  },
  {
    title: "Our 2025 Partners",
    description: "Thank you to the organisations who made the summit possible.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    href: "#",
    span: "md:col-span-3",
  },
];

const PastEventHighlights: React.FC = () => {
  return (
    <div className="relative z-10 px-6 md:px-12 py-16 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-space-grotesk text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 mb-4">
          WITSummit 2025
        </h1>
        <p className="text-white/80 text-lg max-w-2xl mx-auto">
          Placeholder text — recap content for the 2025 edition coming soon.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {highlights.map((card) => (
          <Link
            key={card.title}
            href={card.href ?? "#"}
            className={`group relative overflow-hidden rounded-3xl h-72 md:h-80 ${card.span} block`}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold font-space-grotesk mb-2">
                {card.title}
              </h3>
              <p className="text-white/85 text-sm md:text-base max-w-md">
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PastEventHighlights;
