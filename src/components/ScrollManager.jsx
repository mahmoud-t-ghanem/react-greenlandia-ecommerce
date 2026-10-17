import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import { scrollToSection } from "../utils/scroll";

export default function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (!hash) {
      if (navigationType !== "POP") {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
      return;
    }

    const timer = setTimeout(() => scrollToSection(hash.slice(1)), 60);
    return () => clearTimeout(timer);
  }, [pathname, hash, key, navigationType]);

  return null;
}
