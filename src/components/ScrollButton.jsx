import { useEffect, useState } from "react";
import Button from "./Button";
function ScrollButton() {
  const [showButton, setShowButton] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  });

  return (
    <>
      {showButton && (
        <div className={`scrollToTop`}>
          <Button className=" button__scroll" onClick={handleScrollToTop} />
        </div>
      )}
    </>
  );
}

export default ScrollButton;
