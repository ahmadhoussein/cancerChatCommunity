import React from "react";
import childcan2 from "../Assets/childcan2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={childcan2} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>لماذا اخترنا الرعاية الصحية"</span>
        </h3>
        <p className="ba-description">
        اكتشف الأسباب لاختيار "رعاية الصحة" لاحتياجاتك الصحية. احصل على رعاية متخصصة، وراحة، وحلول مُخصصة من اجلك , كما المساعدات الخيرية ، حيث نجعل رفاهيتك أولويتنا القصوى. انضم إلينا في رحلة نحو صحة أفضل وحياة أكثر سعادة 
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} />أفضل الأطباء المحترفين عبر الانترنت
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> المساعدة الفورية
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> دعم و مجتمع متاح  24\24
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#1E8FFD" }} /> عملية التسجيل سهلة وسريعة
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
