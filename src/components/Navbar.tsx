import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card m-4 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-cosmic rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <div>
            <div className="text-sm font-medium text-foreground">ACSES</div>
            <div className="text-xs text-muted-foreground">Tech Club</div>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#events" className="text-foreground hover:text-accent transition-colors">
            Events
          </a>
          <a href="#about" className="text-foreground hover:text-accent transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </a>
        </div>
        
        <Button className="btn-cosmic">
          Register Now
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;