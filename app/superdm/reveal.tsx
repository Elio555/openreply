"use client";

import { useEffect } from "react";

/** Adds `is-visible` to `.sd-reveal` sections the first time they scroll in. */
export default function Reveal() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>(".sd-reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
  return null;
}
