import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          CSL <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">معلومات عامة</p>
        <p className="legal-description">
          
مرحبًا بك في مجتمعنا الخاص لمرضى السرطان في لبنان، منصتك الصحية العبرية الإلكترونية الموثوقة. مهمتنا هي توفير خدمات رعاية صحية سهلة الوصول وشخصية للأفراد الذين يبحثون عن نصائح طبية وعلاج. باستخدام منصتنا، فإنك توافق على الشروط المبينة في سياسة الخصوصية وشروط الخدمة لدينا.
        </p>

        <p className="legal-title">سياسة الخصوصية</p>
        <p className="legal-description">
        خصوصيتك تأتي في المقام الأول بالنسبة لنا. توضح سياسة الخصوصية لدينا كيفية جمعنا واستخدامنا وحماية معلوماتك الشخصية والطبية. نحن نضمن التعامل الآمن مع البيانات، ويمكنك الوثوق بأن معلوماتك يتم التعامل معها بسرية قصوى.
        </p>

        <p className="legal-title">شروط الخدمة</p>
        <p className="legal-description">
        عند استخدام موقعنا، فإنك توافق على شروط الخدمة لدينا. وهذا يشمل إرشادات استخدام منصتنا، والتفاعل مع الأطباء، ومسؤوليات الطرفين. من الضروري فهم هذه الشروط لضمان تجربة سلسة لجميع المستخدمين.
        </p>

        <p className="legal-title">الاستشارات</p>
        <p className="legal-description">
        تربطك منصتنا بأطباء خبراء يقدمون استشارات عبر الإنترنت. هذه الاستشارات لا تعوض الزيارات الطبية الشخصية ولكنها تعتبر خيارًا ملائمًا للحصول على نصائح طبية ووصفات وتوجيه. من المهم تقديم معلومات دقيقة وشاملة لتلقي أفضل رعاية ممكنة.
        </p>

        <p className="legal-title">كيفية العمل</p>
        <p className="legal-description">
        تم تصميم الموقع  لتبسيط وصولك إلى الرعاية الصحية. يمكنك ان تساعد عن طريق 'التقي بعضا منا' التي تحدث كل فترة، وتحديد موعد و ملىء البينات المطلوبة ، والمشاركة في استشارة عبر الدردشة مع الاخرين غير دردشة الان.  يُرجى تذكر أن حالات الطوارئ تتطلب رعاية طبية فورية ويجب إحالتها إلى الايمايل الخاص بنا
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
