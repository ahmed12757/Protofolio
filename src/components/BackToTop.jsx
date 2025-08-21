import { useEffect, useState, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // لو المستخدم نزل أكتر من 300px
      if (window.scrollY > 300) {
        setVisible(true);

        // إعادة ضبط العداد كل مرة المستخدم يعمل Scroll
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // الزر يختفي بعد 5 ثواني
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
        }, 5000);
      } else {
        setVisible(false);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-gray-300/50 hover:bg-gray-400/50 text-black p-4 rounded-full shadow-lg hover:transition-all hover:duration-300"
        aria-label="Back to top"
      >
        <IoIosArrowUp className=" text-2xl font-bold animate-bounce " />
      </button>
    )
  );
};

export default BackToTop;
