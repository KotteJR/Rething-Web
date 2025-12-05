"use client";

import { useEffect, useState } from "react";
import Carousel from "./carousel";

export default function clients() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const clients = [
    { src: "/clients/eslovs.png", alt: "Eslövs Kommun" },
    { src: "/clients/kavlinge.png", alt: "Kävlinge" },
    { src: "/clients/peab.png", alt: "PEAB" },
    { src: "/clients/ncc.png", alt: "NCC" },
    { src: "/clients/hoor.png", alt: "Hoor" },
    { src: "/clients/jm.png", alt: "JM" },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per frame
    const itemWidth = 200; // approximate width of each logo + gap
    
    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev - scrollSpeed;
        // Reset when we've scrolled through one complete set
        return newPosition <= -itemWidth * clients.length ? 0 : newPosition;
      });
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [clients.length]);

  return (
    <section id="about" className="w-full bg-white py-6 sm:py-10 mt-4 md:mt-0 md:py-18">
      <div className="text-center space-y-3 sm:space-y-4 px-4 sm:px-0">
        <div className="inline-flex items-center justify-center bg-white px-3 sm:px-4 py-1 text-[11px] sm:text-[14px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase text-zinc-500">
          The wide range of clients we work with /
        </div>
        <Carousel />
      </div>
    </section>
  );
}
