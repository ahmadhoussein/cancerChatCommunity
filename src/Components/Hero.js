import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ الصحة تأتي اولا</p>
          <h2 className="text-title">
            ابحث و ساعد مرضى السرطان
          </h2>
          <p className="text-descritpion">
          مرحبًا بك في CancerSocieteLebanese، مصدرك الشامل للمعلومات والدعم الذي يركز على المريض طوال الرحلة مع السرطان. موقعنا مخصص لتقديم رؤية وإرشادات وموارد قيمة للمرضى ومقدمي الرعاية والأحباء المصابين بالسرطان. بدءًا من فهم الأنواع المختلفة من السرطان وخيارات العلاج وحتى الرفاهية العاطفية والتواصل المجتمعي، فإن البرنامج  هنا لتزويدك بالمعرفة والأدوات التي تحتاجها للتغلب على تحديات السرطان بثقة ومرونة. انضم إلى مجتمعنا المتعاطف اليوم ودعنا نواجه السرطان معًا، خطوة بخطوة.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
       
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
