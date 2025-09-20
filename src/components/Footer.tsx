const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-card-border mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-cosmic rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A</span>
              </div>
              <div>
                <div className="text-lg font-bold text-foreground">ACSES</div>
                <div className="text-sm text-muted-foreground">Tech Club</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              Association of Computer Science and Engineering Students - Inspiring tech enthusiasts through innovation and learning.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#events" className="text-muted-foreground hover:text-accent transition-colors">Events</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#register" className="text-muted-foreground hover:text-accent transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">LinkedIn</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">GitHub</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Discord</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-card-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 ACSES - Techumen 2k25. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;