import './About.css'

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>درباره من</h1>
        <p>
          من یک توسعه‌دهنده‌ی خلاق هستم که به تکنولوژی و طراحی علاقه‌مندم. با ترکیب این دو، تجربه‌های کاربری منحصر به فردی خلق می‌کنم.
        </p>
        <div className="about-details">
          <div className="about-detail">
            <h3>نقش</h3>
            <p>توسعه‌دهنده فرانت‌اند</p>
          </div>
          <div className="about-detail">
            <h3>آژانس</h3>
            <p>مستقل</p>
          </div>
          <div className="about-detail">
            <h3>تاریخ</h3>
            <p>۱۴۰۳</p>
          </div>
        </div>
      </div>
    </div>
  )
}
