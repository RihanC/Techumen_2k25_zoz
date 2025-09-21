import cosmicBg from "@/assets/cosmic-bg.jpg";
import AnimatedText from "@/components/AnimatedText";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cosmicBg})` }}
      />

      <div className="absolute inset-0 bg-background/40" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full float opacity-60" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full float opacity-40" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/50 rounded-full float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6">
          <p className="text-muted-foreground text-lg mb-2">
            Association of Computer Science and Engineering Students
          </p>
          <p className="text-accent text-xl font-medium mb-8">
            Presents
          </p>
        </div>
        
        <AnimatedText text="TECHUMEN 2k25" />
        
        <div className="glass-card p-4 mb-8 inline-block pulse-glow">
          <p className="text-accent text-xl font-semibold">
            Time's up!
          </p>
        </div>
        
        <p className="relative inline-block">
          <span className="absolute inset-0 bg-gradient-to-r from-blue-900/60 to-purple-900/60 blur-md rounded-lg"></span>
          <p className="relative text-white text-lg md:text-xl leading-relaxed">
          Techumen is an annual student-driven tech fest designed by ACSES to inspire every tech enthusiast. 
          It's a perfect blend of competition, creativity, and learning, offering coding contests, puzzles, 
          workshops, and more. Techumen is about making memories, building skills, and having fun together.
          </p>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-cosmic text-lg px-8 py-4">
            View Events
          </button>
          
          <button className="glass-card px-8 py-4 text-lg font-medium hover-glow">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;