import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

const leadership: TeamMember[] = [
  { name: "K. Sree Adithya", role: "Founder & CEO", initials: "KS" },
];

const coreTeam: TeamMember[] = [
  { name: "G. Yohan Raju", role: "Head of Marketing", initials: "GY" },
];

const researchTeam: TeamMember[] = [
  { name: "B. Maha Lakshmi", role: "AI Research and Development Intern", initials: "BM" },
  { name: "S. Srisanth", role: "AI Research and Innovation Intern", initials: "SS" },
  { name: "Y. Chiranjeevi", role: "AI Research and Innovation Intern", initials: "YC" },
];

const MemberCard = ({ member, large }: { member: TeamMember; large?: boolean }) => (
  <div className={`reveal flex flex-col items-center text-center border border-border rounded-2xl bg-card p-6 ${large ? "md:p-10" : "md:p-8"}`}>
    <Avatar className={large ? "h-20 w-20 mb-4" : "h-14 w-14 mb-3"}>
      <AvatarFallback className="bg-foreground text-background font-bold text-lg">
        {member.initials}
      </AvatarFallback>
    </Avatar>
    <h3 className={`font-semibold tracking-tight ${large ? "text-xl md:text-2xl" : "text-lg"}`}>
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
