import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    
    // проверяет если библиотека  npm install react-router-hash-link  
    if (hash) {
      window.scrollTo(0, 0);
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
