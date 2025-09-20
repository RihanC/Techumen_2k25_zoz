import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: "individual" | "team";
}

const EventCard = ({ title, subtitle, description, image, category }: EventCardProps) => {
  return (
    <div className="event-card max-w-md mx-auto">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gradient-cosmic p-2">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-accent font-medium">
            {subtitle}
          </p>
        </div>
      </div>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        {description}
      </p>
      
      <div className="flex space-x-3">
        <Button 
          variant="outline" 
          className="flex-1 border-card-border hover:bg-card hover:border-accent"
        >
          RULEBOOK
        </Button>
        <Button className="flex-1 btn-cosmic">
          Register
        </Button>
      </div>
    </div>
  );
};

export default EventCard;