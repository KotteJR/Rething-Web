"use client";

import { useEffect, useState, useRef } from "react";

interface CarouselProps {
  gap?: "tight" | "normal";
}

export default function TrustedClientsSection({ gap = "normal" }: CarouselProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const cleanupRef = useRef<(() => void) | null>(null);
  
  const gapClasses = gap === "tight" 
    ? "gap-4 md:gap-6 lg:gap-8" 
    : "gap-10 md:gap-12 lg:gap-14";

  const clients = [
    { src: "/carousel/boksyse-CM0V_JHD.png", alt: "Boksy" },
    { src: "/carousel/eva-8zl3K3zU.png", alt: "EVA" },
    { src: "/carousel/futurecats.png", alt: "The Futurecats" },
    { src: "/carousel/kore-CAC0d5ba.png", alt: "KORE by KOROS" },
    { src: "/carousel/mZaednica-BG9oFf7f.png", alt: "mZaednica" },
    { src: "/carousel/Stabenfeldt-CX0cCLzr.png", alt: "Stabenfeldt Digital" },
    { src: "/carousel/zoion-logo-DTGNPLfg.png", alt: "ZOION" },
  ];

  // Duplicate clients for seamless loop (triple for smoother infinite scroll)
  const duplicatedClients = [...clients, ...clients, ...clients];

  useEffect(() => {
    // Cleanup previous animation if exists
    if (cleanupRef.current) {
      cleanupRef.current();
      cleanupRef.current = null;
    }
    
    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      if (!itemRef.current || !containerRef.current) return;

      const scrollSpeed = 0.5; // pixels per frame - slower for smoother animation
      let setWidth = 0;
      
      const calculateSetWidth = () => {
        const container = containerRef.current;
        const firstItem = itemRef.current;
        if (!container || !firstItem) return 0;
        
        // Calculate width of one complete set by measuring actual rendered width
        const itemWidth = firstItem.offsetWidth;
        const computedStyle = window.getComputedStyle(container);
        const gap = parseFloat(computedStyle.gap) || 40;
        
        // Calculate total width: itemWidth × clients.length + gap × (clients.length - 1)
        // This correctly accounts for gaps between items (not after the last item)
        const totalWidth = itemWidth * clients.length + gap * (clients.length - 1);
        
        return totalWidth;
      };
      
      // Initial calculation
      setWidth = calculateSetWidth();
      
      // Recalculate on resize
      const handleResize = () => {
        setWidth = calculateSetWidth();
      };
      window.addEventListener('resize', handleResize);
    
    const animate = () => {
      setScrollPosition((prev) => {
          // Recalculate if needed (in case of resize)
          const currentSetWidth = calculateSetWidth();
          if (currentSetWidth > 0) {
            setWidth = currentSetWidth;
          }
          
          if (setWidth === 0) return prev;
          
          let newPosition = prev - scrollSpeed;
          
          // Reset seamlessly when we've scrolled through exactly one complete set
          // Since we have triple duplication, we can reset when we've moved one set width
          // This ensures every loop is identical - the second loop matches the first exactly
          while (newPosition <= -setWidth && setWidth > 0) {
            // Reset to the equivalent position in the next set
            // Using while loop ensures we handle edge cases where position might be way off
            newPosition = newPosition + setWidth;
          }
          
          return newPosition;
      });
        animationRef.current = requestAnimationFrame(animate);
    };

      animationRef.current = requestAnimationFrame(animate);
      
      // Store cleanup function
      cleanupRef.current = () => {
        window.removeEventListener('resize', handleResize);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
      };
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [clients.length, gap]);

  return (
    <section className="w-full bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center">
        <div className="relative w-full max-w-4xl overflow-hidden">
          {/* Blurred sides - transparent for contact section compatibility */}
          <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling carousel */}
          <div 
            ref={containerRef}
            className={`flex items-center ${gapClasses}`}
            style={{ 
              transform: `translateX(${scrollPosition}px)`,
              transition: 'none' // Disable CSS transitions for smooth animation
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                ref={index === 0 ? itemRef : null}
                className="group flex h-12 w-32 flex-shrink-0 items-center justify-center md:h-14 md:w-40"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-full w-full object-contain grayscale brightness-75 opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
