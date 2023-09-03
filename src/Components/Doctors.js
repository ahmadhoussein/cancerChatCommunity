import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

function Doctors() {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>التقي بعضا منا</span>
        </h3>

        <p className="dt-description">
          
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Diana"
          title=" لأصحاب الأيادي البيضاء، لمساعدتها في تأمين مبلغ مالي قيمته 700 دولار فقط لا غير، لتغطية نفقات العلاج لهذا الأسبوع."
          stars="700$"
          reviews="76425387"
        />
        <DoctorCard
          img={profile2}
          name="dr.jhonny"
          title="مريض في ​مستشفى جبل لبنان​ بحاجة ماسة الى ​بلاكيت دم​ من فئة O+"
          stars="0$"
          reviews="70233568"
        />
        <DoctorCard
          img={profile3}
          name="tio azzar"
          title="الطفل تيو عازار عمره سنة وشهرين مريض سرطان بالدم في مستشفى جبل لبنان بحاجة الى بلاكات دم فئة AB"
          stars="0$"
          reviews="email"
        />
        <DoctorCard
          img={profile4}
          name="assinat"
          title="في #مستشفى الزهراء الجامعي. واليوم، يُناشد والدها أصحاب الأيادي البيضاء للمساعدة في تأمين مبلغ 800 دولار أميركي لسداد تكلفة العلاج،"
          stars="800$"
          reviews="01 851 040"
        />
      </div>
    </div>
  );
}

export default Doctors;
