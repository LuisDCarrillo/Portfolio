export const fadeIn = (direction = "up") => {
    return {
      initial: {
        y: direction === "up" ? 40 : -60,
        opacity: 0
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        }
      }
    };
  };
  
  export const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  export const scaleIn = {
    initial: {
      scale: 0.8,
      opacity: 0
    },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };