import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>من نحن</span>
        </h3>
        <p className="about-description">
        مرحبًا بك في مجتمع المصابين بالسلطان في لبنان ، شريكك الموثوق للرعاية الصحية المبسطة والشخصية. يقدم أطباؤنا المتخصصون استشارات عبر الإنترنت وخدمات متخصصة بالغة العربية، حيث نُولي اهتمامًا كبيرًا لرفاهيتك. انضم إلينا في هذه الرحلة نحو صحة أفضل
        </p>

        <h4 className="about-text-title">حلولنا</h4>

        <SolutionStep
          title="تعرف على اشخاص للمساعدة"
          description="يمكنك التواصل مع من هم يعانون من نفس المرض و تقديم النصائح لك كما استشارة الاطباء الموجودين"
        />

        <SolutionStep
          title=" تسجل معنا لادراج اسمك في قائمة تعرف على مرضانا"
          description="يتم ادراج اسمك و يتم تعميمه للمساعدة من قبل الخيريين و الموسسات اذ كنت تهتم في ذلك تسجل الان من خلال 'تسجل معنا'"
        />

        <SolutionStep
          title="يمكننا مساعدتك"
          description="لدينا فريق من الاطباء للاستشارات فلا تتردد في محادثتنا ,عبر البريد الالكتروني الخاص بنا "
        />
      </div>
    </div>
  );
}

export default About;
