document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Hero section animations
    gsap.from(".hero-background", {
      duration: 2,
      scale: 1.2,
      ease: "power2.inOut",
      delay: 0.5
    });
  
    gsap.from(".hero-content h1", {
      duration: 1.5,
      y: -50,
      opacity: 0,
      ease: "power2.out",
      delay: 1
    });
  
    gsap.from(".hero-content p", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power2.out",
      delay: 1.2
    });
  
    // Animating Projects
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 100,
        duration: 1.5,
        delay: 0.3 * index,
        ease: "power2.out"
      });
    });
  });
  