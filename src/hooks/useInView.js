import { useEffect, useRef, useState } from "react";

export default function useInView({ threshold = 0.15, rootMargin = "0px 0px -8% 0px", skip = false } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(skip);

  useEffect(() => {
    if (skip) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [skip, threshold, rootMargin]);

  return [ref, inView];
}
