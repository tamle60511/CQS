import { useEffect } from 'react';

const useAnimateOnScroll = (selectors = '.fade-up, .fade-right, .fade-left') => {
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(selectors);

      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerPosition = window.innerHeight * 0.8;

        if (elementTop < triggerPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    return () => window.removeEventListener('scroll', animateOnScroll);
  }, [selectors]);
};

export default useAnimateOnScroll;
