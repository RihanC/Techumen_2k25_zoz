import Asteroid from "public/asteroids/asteroid1.png";
// Removed incorrect import of Image component

const asteroidPositions = [
  { top: "10%", left: "5%", size: 60 },
  { top: "30%", left: "80%", size: 50 },
  { top: "60%", left: "20%", size: 70 },
  { top: "80%", left: "65%", size: 40 },
];

export default function Asteroids() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {asteroidPositions.map((pos, i) => (
        <div
          key={i}
          className="absolute animate-spin-slow"
          style={{ top: pos.top, left: pos.left }}
        >
          <img
            src={Asteroid}
            alt="asteroid"
            width={pos.size}
            height={pos.size}
          />
        </div>
      ))}
    </div>
  );
}
