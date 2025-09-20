import EventCard from "./EventCard";
import webnaticIcon from "@/assets/webnatic-icon.jpg";
import codeblastIcon from "@/assets/codeblast-icon.jpg";
import compileIcon from "@/assets/compile-icon.jpg";
import puzzleIcon from "@/assets/puzzle-icon.jpg";

const EventsSection = () => {
  const individualEvents = [
    {
      title: "Java Bootcamp",
      subtitle: "Stepping into the World of Java",
      description: "A two-day workshop where you'll learn to code in Java from scratch. Perfect for beginners, this bootcamp covers the fundamentals of Java programming, object-oriented concepts, and hands-on coding exercises to kickstart your programming journey.",
      image: webnaticIcon,
      category: "individual" as const,
    },
    {
      title: "CPP Bootcamp",
      subtitle: "Master the Basics of C++",
      description: "A comprehensive two-day workshop designed for beginners to learn C++ programming. This bootcamp covers essential concepts, syntax, and practical coding exercises to help you build a strong foundation in C++.",
      image: codeblastIcon,
      category: "individual" as const,
    },
  ];

  // const teamEvents = [
  //   {
  //     title: "Compile It",
  //     subtitle: "Two Brains, One Breakthrough",
  //     description: "In this duo-based event, teams analyze, debug, and solve coding challenges together. It's a test of teamwork and technical skills, where speed and synergy lead to success.",
  //     image: compileIcon,
  //     category: "team" as const,
  //   },
  //   {
  //     title: "Puzzle Vault",
  //     subtitle: "Crack the Puzzle, Uncover the Mystery",
  //     description: "A thrilling team-based mystery challenge where participants solve complex puzzles, decode cryptographic messages, and unravel digital mysteries. Perfect for teams who love brain teasers and logical challenges.",
  //     image: puzzleIcon,
  //     category: "team" as const,
  //   },
  // ];

  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Individual Events */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Individual Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {individualEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>

        {/* Team Events
        <div>
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">
            Team Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {teamEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default EventsSection;