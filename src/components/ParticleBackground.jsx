import Particles from "react-tsparticles";

export default function ParticleBackground() {
  return (
    <Particles
      options={{
        background: {
          color: "#020617",
        },
        particles: {
          number: {
            value: 80,
          },
          color: {
            value: "#38bdf8",
          },
          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 2,
          },
        },
      }}
    />
  );
}