import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import adithyaImg from "@/assets/team/adithya.png";
import yohanImg from "@/assets/team/yohan.png";
import mahalakshmiImg from "@/assets/team/mahalakshmi.png";
import chiranjeeviImg from "@/assets/team/chiranjeevi.png";
import srisanthImg from "@/assets/team/srisanth.png";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image: string;
}

const leadership: TeamMember[] = [
  { name: "K. Sree Adithya", role: "Founder & CEO", initials: "KS", image: adithyaImg },
];

const coreTeam: TeamMember[] = [
  { name: "G. Yohan Raju", role: "Head of Marketing", initials: "GY", image: yohanImg },
];

const researchTeam: TeamMember[] = [
  { name: "B. Maha Lakshmi", role: "AI Research and Development Intern", initials: "BM", image: mahalakshmiImg },
  { name: "S. Srisanth", role: "AI Research and Innovation Intern", initials: "SS", image: srisanthImg },
  { name: "Y. Chiranjeevi", role: "AI Research and Innovation Intern", initials: "YC", image: chiranjeeviImg },
];

const MemberCard = ({ member }: { member: TeamMember }) => (
  <div className="reveal flex flex-col items-center text-center border border-border rounded-2xl bg-card p-6 md:p-8">
    <Avatar className="h-28 w-28 mb-4">
      <AvatarImage src={member.image} alt={member.name} className="object-cover object-top" />
      <AvatarFallback className="bg-foreground text-background font-bold text-lg">
        {member.initials}
      </AvatarFallback>
    </Avatar>
    <h3 className="font-semibold tracking-tight text-lg">
      {member.name}
    </h3>
    <p className="text-muted-foreground text-sm mt-1">{member.role}</p>
  </div>
);

const TeamSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="team" className="py-20 md:py-32 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="reveal text-3xl md:text-5xl font-bold tracking-tight mb-4">Our Team</h2>
          <p className="reveal text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            At Vyoman AI Solutions, we bring together visionary leadership and talented minds passionate about pushing the boundaries of artificial intelligence.
          </p>
        </div>

        {/* Leadership & Core Team */}
        <div className="mb-8">
          <p className="reveal text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center">Leadership & Core Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[...leadership, ...coreTeam].map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

        {/* Research Team */}
        <div className="mb-12">
          <p className="reveal text-xs uppercase tracking-widest text-muted-foreground mb-4 text-center">AI Research & Innovation Team</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {researchTeam.map((m) => <MemberCard key={m.name} member={m} />)}
          </div>
        </div>

        <p className="reveal text-center text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
          Our team combines strong technical expertise with fresh perspectives to deliver cutting-edge AI research and innovative solutions that matter.
        </p>
      </div>
    </section>
  );
};

export default TeamSection;
