import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faPersonMilitaryPointing } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>ماذا نقدم لك</span>
        </h3>
        <p className="info-description">
         مرحبا بكم في موقعنا المخصص لدعم مرضى السرطان ومجتمعهم. نحن نتفهم التحديات التي تواجهها،
          ولهذا السبب قمنا بتصميم منصة توفر الرعاية الصحية في متناول يدك.
           مجتمعنا هنا لتزويدك بمجموعة واسعة من الخدمات الطبية و الدعم وتلبية احتياجاتك الفريدة
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="الرعاية"
          description="داخل مجتمعنا، يمكنك التواصل بسهولة مع الأطباء المتمرسين عبر الإنترنت والمتخصصين في رعاية مرضى السرطان. إنهم على استعداد لتزويدك برؤىهم الطبية المتخصصة، وتقديم التوجيه، وحتى تقديم الوصفات الطبية عبر الإنترنت التي يمكنك الوصول إليها بسهولة عندما تحتاج إليها. رفاهيتك هي أولويتنا، ونحن ملتزمون بضمان حصولك بسلاسة على الرعاية التي تستحقها."
          icon={faTruckMedical}
        />

        <InformationCard
          title="نحن معك"
          description="يعد موقعنا الإلكتروني بمثابة رفيق ثابت للأفراد الذين يتغلبون على تحديات السرطان، ويعزز الشعور بالوحدة والتفاهم بين المرضى ومقدمي الرعاية وأحبائهم.كما انه اصبح باستطاعة التحدث و حل المشاكل بين بعض كما تقديم الدعم المعنوي و المادي."
          icon={faHeartPulse}
        />

        <InformationCard
          title="انضم الينا"
          description="في جمعية مجتمع مرضى السرطان، نحن لسنا مجرد موقع على شبكة الإنترنت - نحن عائلة من النفوس المتعاطفة الملتزمة بمرافقتك في كل خطوة من رحلتك. معًا، دعونا نبحر في مياه السرطان المجهولة بالقوة والمرونة والتأكيد على أن المساعدة دائمًا في متناول اليد."
          icon={faPersonMilitaryPointing}
        />
      </div>
    </div>
  );
}

export default Info;
