import { useState, useEffect } from "react";
import {
  Home,
  Infinity,
  MessageCircle,
  Music,
  Brain,
  Calendar,
  CheckSquare,
  ChevronDown,
  Play,
  Dumbbell,
  Baby,
  Sparkles,
  Activity,
  BatteryLow,
  Scale,
  AlertTriangle,
  HelpCircle,
  ShieldAlert,
  Phone,
  Mail,
  User,
  Heart,
  Shield,
  Wind,
  Leaf,
  Check,
} from "lucide-react";
import logoImg from "@/imports/Screenshot_2026-07-02_at_10.57.55.png";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";
import videoThumbnail from "@/imports/video.jpg";
import mayPhoto from "@/imports/unnamed.png";
import whySection from "@/imports/unnamed-2.png";
import coursesMockup from "@/imports/pilates_course_mockup_transparent.png";
import alonaImg from "@/imports/WhatsApp_Image_2026-07-14_at_23.19.26.jpeg";
import tairImg from "@/imports/WhatsApp_Image_2026-07-15_at_08.18.32.jpeg";
import ataliaImg from "@/imports/WhatsApp_Image_2026-07-15_at_15.45.46.jpeg";
import yardenImg from "@/imports/yarden-1.jpeg";
import hadasImg from "@/imports/hadas-1.jpeg";
import malkaImg from "@/imports/malka-1.jpeg";
import adarImg from "@/imports/adar-1.jpeg";
import rotemImg from "@/imports/rotem-1.jpeg";
import taliImg from "@/imports/tali-1.jpeg";

// ─── WAVE DIVIDER ─────────────────────────────────────────────────────────────
function WaveDivider({ flip = false, fill = "#fdf5f0" }: { flip?: boolean; fill?: string }) {
  return (
    <div
      className="w-full leading-none pointer-events-none"
      style={{ transform: flip ? "scaleY(-1)" : undefined, marginBottom: "-2px" }}
    >
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-16 md:h-20">
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

// ─── PLACEHOLDER IMAGE ────────────────────────────────────────────────────────
function PlaceholderImage({ className = "", label = "" }: { className?: string; label?: string }) {
  return (
    <div className={`bg-[#ecddd7] flex flex-col items-center justify-center gap-2 overflow-hidden ${className}`}>
      <div className="w-10 h-10 rounded-full bg-[#c08070]/25 flex items-center justify-center">
        <User className="w-5 h-5 text-[#c08070]/60" />
      </div>
      {label && <span className="text-xs text-[#8a6b62]">{label}</span>}
    </div>
  );
}

// ─── COUNTDOWN TIMER ──────────────────────────────────────────────────────────
function CountdownTimer() {
  const [time, setTime] = useState({ h: 23, m: 47, s: 12 });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) { h = 23; m = 59; s = 59; }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n: number) => String(n).padStart(2, "0");
  return (
    <div className="flex items-center justify-center gap-3 my-6">
      {[{ label: "שעות", val: time.h }, { label: "דקות", val: time.m }, { label: "שניות", val: time.s }].map(({ label, val }, i) => (
        <div key={label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="bg-[#3a2620] text-white rounded-xl w-16 h-16 flex items-center justify-center text-3xl font-bold tabular-nums">
              {pad(val)}
            </div>
            <span className="text-xs text-[#8a6b62] mt-1">{label}</span>
          </div>
          {i < 2 && <span className="text-[#c08070] text-2xl font-light mb-5">:</span>}
        </div>
      ))}
    </div>
  );
}

const COURSE_URL = "https://my.schooler.biz/s/110160/1771330032864";
const HEALTH_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLScVxQ_NcjV-gPrvXtSx4zONMo_geTJltge7Wc9I6uiP5H2fnw/viewform?embedded=true";

// ─── HEALTH DECLARATION MODAL ────────────────────────────────────────────────
function HealthDeclarationModal({ onClose }: { onClose: () => void }) {
  const [signed, setSigned] = useState(false);

  const handleProceed = () => {
    window.open(COURSE_URL, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(58,38,32,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-[#fdf5f0] rounded-[2rem] w-full max-w-lg flex flex-col shadow-2xl overflow-hidden" style={{ maxHeight: "90dvh" }}>
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e8cfc5] flex-shrink-0">
          <h2 className="text-xl font-bold text-[#3a2620]">הצהרת בריאות</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#8a6b62] hover:bg-[#ecddd7] transition-colors text-lg leading-none"
            aria-label="סגור"
          >
            ✕
          </button>
        </div>

        {/* Form iframe */}
        <div className="flex-1 overflow-hidden min-h-0">
          <iframe
            src={HEALTH_FORM_URL}
            className="w-full h-full border-0"
            style={{ minHeight: "420px" }}
            title="הצהרת בריאות"
          />
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-[#e8cfc5] flex-shrink-0 flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={signed}
              onChange={(e) => setSigned(e.target.checked)}
              className="w-5 h-5 accent-[#c08070] cursor-pointer flex-shrink-0"
            />
            <span className="text-sm text-[#3a2620] leading-snug">אני מאשרת כי קראתי את הצהרת הבריאות, הבנתי את תוכנה ואני מסכימה לכל האמור בה.</span>
          </label>
          <button
            onClick={handleProceed}
            disabled={!signed}
            className="w-full bg-[#c08070] text-white font-bold text-lg py-4 rounded-full transition-all hover:bg-[#b87060] hover:shadow-md disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-[#c08070] disabled:hover:shadow-none"
          >
            המשך לרכישה
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── CTA BUTTON ───────────────────────────────────────────────────────────────
function CtaButton({ label = "אני רוצה את הקורס!", secondary = false, className = "", large = false, onOpen }: { label?: string; secondary?: boolean; className?: string; large?: boolean; onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`inline-block font-semibold transition-all hover:shadow-lg hover:scale-[1.02] active:scale-100 rounded-full shadow-md ${
        large ? "text-xl px-12 py-5" : "text-lg px-10 py-4"
      } ${
        secondary
          ? "bg-transparent border-2 border-[#c08070] text-[#c08070] hover:bg-[#c08070]/10"
          : "bg-[#c08070] text-white hover:bg-[#b87060]"
      } ${className}`}
    >
      {label}
    </button>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const whyPoints = [
  { icon: Activity,      label: "כאבי גב ואגן" },
  { icon: BatteryLow,    label: "תחושת כובד ועייפות" },
  { icon: Scale,         label: "ירידה ביציבה ובשיווי המשקל" },
  { icon: AlertTriangle, label: "חשש מתנועה" },
  { icon: HelpCircle,    label: "חוסר ודאות" },
  { icon: ShieldAlert,   label: "חשש לפגוע בעובר" },
];

const courseFeatures = [
  { icon: Dumbbell,      title: "12 תרגולי פילאטיס מותאמים להריון", desc: "תרגולים שמחולקים לפי נושאים ומלווים אותך לאורך כל ההריון. כל תרגול באורך של 10-25 דקות, כך שתוכלי לשלב אותם בקלות ביומיום, בהתאם לזמן ולשלב שבו את נמצאת." },
  { icon: Home,          title: "מתרגלות בזמן ובמקום שנוח לך",     desc: "מהבית מהסלון ואפילו בפיג'מה, בלי להתחייב לשעות קבועות ובלי לצאת מהבית." },
  { icon: Infinity,      title: "גישה ללא הגבלת זמן",               desc: "מרגע הרכישה הקורס נשאר שלך, גם להריון הבא :)" },
  { icon: MessageCircle, title: "ליווי אישי ממני",                  desc: "אני זמינה עבורך לכל שאלה לאורך הדרך, כדי שתרגישי בטוחה ומלווה." },
];

const modules = [
  { label: "הקדמה",       title: "היכרות עם הקורס",           desc: "איך להשתמש בו בצורה טובה ביותר ומה צפוי לך לאורך הדרך." },
  { label: "שלב ראשון",   title: "חיבור והכנה",              desc: "להכיר את הגוף המשתנה, להתחבר לנשימה ולהניח את היסודות לתרגול בטוח ומדויק." },
  { label: "שלב שני",     title: "חיזוק שרירי הגוף ותמיכה", desc: "עבודה על שרירי הליבה, רצפת האגן, יציבה ויציבות כדי לתמוך בגוף לאורך ההריון." },
  { label: "שלב שלישי",   title: "שחרור והרפייה",            desc: "תרגולים עדינים שיוצרו להפחית עומסים, לשחרר מתחים ולהכין את הגוף והנפש לקראת לידה." },
];

const bonuses = [
  { icon: Dumbbell,    title: "מדריך דיגיטלי - כל מה שחשוב לדעת על הגוף בהריון", desc: "תלמדי לעומק על השינויים שהגוף עובר בתקופת ההריון, עקרונות מנחים לתרגול פילאטיס בהריון, חשביותה של רצפת האגן, מהי היפרדות בטנית ועוד נושאים חשובים שיעזרו לך להבין טוב יותר את הגוף המשתנה שלך." },
  { icon: Baby,        title: "ערכת תרגולים לקראת לידה",       desc: "אוסף תרגולים קצרים הכוללים עבודה עם כדור פיזיו, תנועת אגן, תנוחות ונשימה.\nכלים פרקטיים שתוכלי לשלב בשגרת ההריון כדי להכין את גופך ללידה." },
  { icon: Music,       title: "פלייליסט חדר לידה",               desc: "פלייליסט שנבנה במיוחד כדי ללוות אותך ברגעים המרגשים של הלידה, עם מוזיקה נעימה ומרגיעה שתעזור לך ליצור אווירה רגועה ומחברת." },
  { icon: Brain,       title: "סדרת דמיון מודרך להריון",        desc: "כי הכנה ללידה היא לא רק הכנה של הגוף - אלא גם של הלב והנפש.\nארבע הקלטות מקוריות שכתבתי והקלטתי במיוחד עבורך, שייקחו אותך למסע של חיבור לגוף, לרחם, לתינוק שבתוכך ולהכנה הרגשית לקראת הלידה\n• חיבור אל הרחם - מרכז הנשיות והחיים\n• אמא נולדת - הכנה רגשית ללידה\n• קשר ראשוני - דיאלוג שקט עם התינוק שבתוכי\n• מסע פנימי - חיבור לגוף המשתנה לאורך ההריון" },
  { icon: Calendar,    title: "לוח בדיקות הריון מותאם אישית",  desc: "כלי דיגיטלי שבניתי במיוחד עבורך!\nכל שעלייך לעשות הוא להזין את תאריך הווסת האחרונה, והלוח יתאים עבורך את כל בדיקות ההריון לפי תאריכים ושבועות רלוונטיים כדי שלא תצטרכי לחשב או לזכור בעצמך." },
  { icon: CheckSquare, title: "צ'קליסט ציוד ללידה",             desc: "רשימת ציוד מסודרת לבית החולים ולימים הראשונים שלאחר הלידה.\nכדי שתוכלי להתארגן בראש שקט ולא לחשוש ששכחת משהו." },
];

const testimonials = [
  { name: "עתליה", photo: alonaImg,   text: "אני ממליצה בחום על מאי כמדריכת פילאטיס. היא ליוותה אותי גם לפני ההיריון וגם במהלכו, ותמיד הרגשתי שאני בידיים מקצועיות ואכפתיות.\n\nמאי מעניקה יחס אישי לכל מתאמן ומתאמנת, מוודאת שכל אחד מבין את התרגילים בצורה נכונה ובטוחה. היא קשובה, סבלנית, ותמיד מקפידה להסביר עד שכולם מבינים.\n\nמעבר למקצועיות שלה, מאי היא אדם נעים, חם ומכיל, שיוצר אווירה נעימה ומזמינה בכל שיעור. היא הרבה יותר ממדריכת פילאטיס – היא חברה אמיתית שתומכת, מעודדת וגורמת לך לרצות להגיע לכל אימון מחדש. ממליצה עליה מכל הלב!" },
  { name: "תאיר",  photo: tairImg,    text: "אצל מאי, פעם ראשונה שהגעתי לשיעור ספורט כלשהו ולא הסתכלתי פעם אחת על השעון עד סוף השיעור. זה היה האות להבין שאיתה אני חייבת להמשיך.\n\nכשהמסע שלנו התחיל אני באתי בגלל כאבי גב ורק ״כי צריך״ ואחרי כמה מפגשים ושיפור ניכר, כבר הרגשתי שאני מחכה לשיעורים. לא חשבתי שאגיע לזה.\n\nמאי יודעת לזהות, לדייק ולשפר. מכירה את הגוף טוב כל כך.\n\nאני מתאמנת אצל מאי הרבה לפני ההיריון וגם בהיריון עצמו. מרגישה בטוחה, שהיא יודעת לכוון אותי גם אם זה בהנחייה מרחוק, ושאפשר לסמוך ולהתמסר." },
  { name: "מלכה",  photo: malkaImg,   text: "אני מתאמנת אצל מאי כשנתיים. הכרתי מדריכה שנכנסת לשיעור עם חיוך גדול ושמחה לאמן, מעבירה שיעור בצורה מקצועית ביותר. כמהנדסת אני יושבת שעות על כסא ומול מסך, שיעורי הפילאטיס עושים פלאים בשרירים ובגמישות! וכן כבר אין כאבי גב וצוואר. השיעורים חוויתיים ואני מצפה להם." },
  { name: "רותם",  photo: rotemImg,   text: "אצל מאי התחלתי לתרגל פילאטיס ופשוט התאהבתי! גם באימון וגם בה. היא יודעת לדייק ולשים לב לכל מתאמן שלה." },
  { name: "טלי",   photo: taliImg,    text: "התחלתי להתאמן אצל מאי אחרי תקופה שלא עשיתי פילאטיס, וכבר מהאימונים הראשונים הרגשתי שהגוף שלי מתחזק ומתעצב.\nמעבר לאימון עצמו, תמיד מרגישים שמאי רואה כל מתאמן. היא מסבירה את התרגילים בצורה ברורה כך שגם אם לא מבינים פילאטיס מבינים מה לעשות.\n\nתמיד הרגשתי בנוח ובידיים טובות, באווירה נעימה, רגועה ומקצועית, שגורמת ממש לחכות לכל אימון.\n\nלגמרי ממליצה לכל אחד שמחפש מדריכת פילאטיס מקצועית, קשובה ואכפתית, שבאמת עוזרת להתחזק ולהרגיש טוב יותר בגוף. ❤️" },
  { name: "אדר",   photo: adarImg,    text: "מאי גרמה לי להתאהב בפילאטיס.\nהאימונים הם בדיוק בעצימות הנכונה עם רמת דיוק וירידה לפרטים שלא חוויתי בשיעורים אחרים.\nתמיד שמה דגש על דברים שלא שמים לב אליהם, ככה שהתרגיל שנראה הכי פשוט הופך להיות התרגיל הכי מאתגר.\nבגלל שמאי מדויקת, תמיד הרגשתי בטוחה באימונים וכמובן נהנתי מאוד (למרות שלא תמיד פשוט!)\n🤍" },
  { name: "ירדן",  photo: yardenImg,  text: "אני התחלתי להתאמן כדי לחזק את הגוף שלי, לא ייחסתי חשיבות כל כך למדריכה אבל לא היה לי איתה חיבור, אחרי כמה זמן הגיעה מאי לשיעור והייתה פשוט מושלמת!\nהייתה אותנטית וזורמת, אחת משלנו ואז היא נשארה באופן קבוע והיה לי ממש כייף לבוא פעמיים בשבוע לשיעורים שלה ורק שלה!\nאחרי השיעור הייתי יוצאת בהרגשה ממש טובה.\nהיא מכווינה, מלווה ושמה לב לכל מתאמן.\nאהבתי שהיא מסבירה את התרגילים באופן שכולם מבינים ולא דווקא בשפת הפילאטיס.\nהיא פשוט מסורה למקצוע.\nבקיצור, אחלה גברת 100/100" },
  { name: "הדס",   photo: hadasImg,   text: "מאי היא מדריכת פילאטיס מקצועית, נעימה ומסורה. בכל שיעור היא מקפידה להסביר ולדייק כל תרגיל, תוך יחס אישי אמיתי לכל מתאמנת.\nהיא תמיד מתעניינת בשלומן של כולן ומקבלת כל אחת בחיוך ובאווירה חמה ומזמינה. פשוט כיף להגיע לשיעורים שלה – ובכל פעם מחכים כבר לשיעור הבא. ממליצה עליה מכל הלב!" },
  { name: "אלונה", photo: ataliaImg,  text: "מאוד נהנתי להתאמן אצל מאי, לא מצאתי הרבה מאמנות פילאטיס שיודעות להנחות ואת יכולה לסמוך עליהן. יצאתי תמיד בתחושה טובה אחרי האימון, אהבתי שמאי מאד מסבירה ומדייקת.\nמאי מלאה בידע חשוב ומעניין." },
];

const faqs = [
  { q: "האם הקורס מתאים גם אם מעולם לא תרגלתי פילאטיס?", a: "בהחלט. הקורס נבנה כך שיתאים גם לנשים שמתחילות את הדרך שלהן בפילאטיס. התרגולים מוסברים בצורה ברורה, הדרגתית ומותאמים במיוחד לתקופת ההריון." },
  { q: "מאיזה שבוע אפשר להתחיל לתרגל?",                  a: "ניתן להתחיל לתרגל בכל שלב של ההריון, כל עוד ההריון תקין וקיבלת אישור מהרופא המטפל שלך. התרגולים מותאמים לשינויים שהגוף עובר לאורך ההריון." },
  { q: "עד איזה שבוע אפשר לתרגל?",                       a: "אפשר להמשיך לתרגל לאורך כל ההריון, בהתאם להרגשה האישית ולהנחיות הרופא המטפל." },
  { q: "האם הקורס נשאר פתוח גם אחרי הרכישה?",            a: "כן. מרגע ההרשמה הקורס נשאר זמין עבורך ללא הגבלת זמן, כך שתוכלי לחזור אליו מתי שתרצי – גם בהריון הבא." },
  { q: "כמה זמן נמשך כל שיעור?",                         a: "אורך השיעורים נע בין 10 ל־25 דקות, כך שתוכלי לשלב אותם בקלות גם בימים עמוסים." },
  { q: "האם אני צריכה ציוד מיוחד?",                      a: "לא. אין צורך לרכוש ציוד מיוחד כדי להתחיל. רוב התרגולים מתבצעים עם מזרן בלבד, ובחלקם נשתמש באביזרים פשוטים שיש כמעט בכל בית, כמו כרית או כיסא. כשיהיה שימוש בכדור פיזיו או באביזר נוסף, אציין זאת מראש." },
  { q: "האם אפשר לחזור על השיעורים כמה פעמים שארצה?",   a: "כמובן. הקורס פתוח עבורך ללא הגבלה, כך שתוכלי לחזור על כל שיעור בקצב שלך ובכל זמן שנוח לך." },
  { q: "מה אם תהיה לי שאלה במהלך הקורס?",               a: "אני זמינה עבורך לאורך הדרך ואשמח לענות על שאלות שעולות במהלך התרגול, כדי שתרגישי בטוחה ומלווה." },
  { q: "האם הקורס מחליף קורס הכנה ללידה?",               a: "הקורס אינו מחליף קורס הכנה ללידה, אלא משלים אותו. הוא מתמקד בהכנת הגוף באמצעות פילאטיס מותאם להריון, ומעניק כלים נוספים שיכולים ללוות אותך לאורך ההריון ולקראת הלידה." },
  { q: "מאיפה ניתן לצפות בקורס?",                              a: "הקורס זמין לצפייה מהמכשיר שתבחרי – מחשב, טאבלט או טלפון נייד. הגישה לקורס היא אישית ומיועדת למשתתפת אחת בלבד. כך אוכל להעניק לכל אחת ליווי אישי, זמינות ומענה לאורך הדרך, ובמקביל לשמור על התוכן המקצועי של הקורס ועל זכויות היוצרים." },
  { q: "האם את בעצמך תרגלת את כל התרגילים במהלך ההריון?",    a: "כן. הקורס צולם במהלך ההריון שלי, וכל התרגולים שבו הם תרגולים שביצעתי בעצמי בתקופה הזו. היה לי חשוב שכל תרגיל יהיה בטוח, נעים ומותאם באמת לגוף המשתנה בהריון." },
  { q: "האם אוכל לעשות את הקורס גם אם אני לא בהריון?",       a: "בהחלט. אמנם הקורס נבנה במיוחד עבור נשים בהריון, אך התרגולים שבו מבוססים על עקרונות הפילאטיס ומתמקדים בחיזוק שרירי הליבה ורצפת האגן, שיפור היציבה, הגברת המודעות לגוף ותנועה נכונה. לכן גם נשים שאינן בהריון יכולות ליהנות ממנו, במיוחד אם הן מחפשות תרגול עדין, בטוח ומדויק." },
  { q: "האם אפשר להמשיך לתרגל את הקורס גם לאחר הלידה?",      a: "בהחלט. לאחר תקופת משכב הלידה, ובכפוף לאישור הרופא המטפל או פיזיותרפיסטית לרצפת האגן (במידת הצורך), תוכלי לחזור לתרגל את הקורס. התרגולים יכולים לסייע בחזרה הדרגתית לתנועה, בחיזוק שרירי הליבה ורצפת האגן ובהתחברות מחודשת לגוף לאחר הלידה." },
  { q: "האם מאוחר מדי להתחיל אם אני כבר בטרימסטר השני או השלישי?", a: "ממש לא. אפשר להתחיל את הקורס בכל שלב של ההריון. התרגולים מותאמים להתקדמות ההריון, כך שגם אם לא התחלת מההתחלה, עדיין תוכלי ליהנות מהיתרונות של פילאטיס בהריון ולחזק את הגוף לקראת הלידה. כמובן, מומלץ לתרגל לאחר אישור מהרופא המטפל." },
];

// ─── FAQ ACCORDION ────────────────────────────────────────────────────────────
function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {items.map(({ q, a }, i) => (
        <div key={i} className="bg-[#f7ede6] border border-[#e8cfc5] rounded-2xl overflow-hidden">
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-right gap-4 hover:bg-[#ecddd7]/50 transition-colors"
          >
            <span className="text-lg font-semibold text-right leading-snug">{q}</span>
            <ChevronDown
              className="w-5 h-5 text-[#c08070] flex-shrink-0 transition-transform duration-300"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[#8a6b62] leading-loose">{a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [healthModalOpen, setHealthModalOpen] = useState(false);

  return (
    <div dir="rtl" className="font-['Heebo'] bg-[#f7ede6] text-[#3a2620] overflow-x-hidden">
      {healthModalOpen && <HealthDeclarationModal onClose={() => setHealthModalOpen(false)} />}

      {/*══════════════════════════════════════════════════
          HERO — logo image as background
      ══════════════════════════════════════════════════*/}
      <section
        className="relative text-center px-6 pt-16 pb-20"
        style={{
          backgroundImage: `url(${logoImg})`,
          backgroundSize: "100% auto",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#f7ede6",
        }}
      >
        {/* Soft overlay so text stays readable over the illustration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(247,237,230,0.45) 0%, rgba(247,237,230,0.65) 40%, rgba(247,237,230,0.92) 70%, #f7ede6 100%)",
          }}
        />

        {/* All content centered on top of the image */}
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
          <h1 className="font-bold leading-snug mb-6 w-full" style={{ fontWeight: 800 }}>
            <span className="block text-xl md:text-2xl lg:text-3xl">הגוף שלך עושה את הדבר המדהים ביותר בעולם!</span>
            <span className="block text-xl md:text-2xl lg:text-3xl text-[#c08070]">עכשיו הגיע הזמן להכין אותו לזה.</span>
          </h1>

          <p className="text-base md:text-lg text-[#6b4c42] leading-relaxed mb-10 font-light">
            אני גאה להשיק את <span className="font-bold text-[#3a2620]">הקורס פילאטיס דיגיטלי הראשון מסוגו בישראל לנשים בהריון</span>.<br />הגיע הזמן ללוות את ההריון שלך עם תנועה נכונה, תרגול בטוח <span className="font-bold text-[#3a2620]">והכנה אמיתית לרגע הגדול והמרגש ביותר בחייך!</span> כאן תלמדי <span className="font-bold text-[#3a2620]">לחזק את הגוף</span>, לתמוך <span className="font-bold text-[#3a2620]">ברצפת האגן ובשרירי הליבה</span>, לנוע <span className="font-bold text-[#3a2620]">בביטחון</span> ולהעניק לעצמך את <span className="font-bold text-[#3a2620]">ההכנה שבאמת מגיעה לך</span> כדי להרגיש חזקה, בטוחה ומחוברת לגוף שלך בכל שלב בדרך.
          </p>

          <div className="relative w-full mb-10 rounded-[2rem] overflow-hidden shadow-xl aspect-video border border-[#e8cfc5]">
            {videoPlaying ? (
              <iframe
                src="https://player.vimeo.com/video/1211976156?badge=0&autopause=0&autoplay=1&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                className="absolute inset-0 w-full h-full"
                title="סרטון תצוגה - פילאטיס עם מאי"
              />
            ) : (
              <button
                onClick={() => setVideoPlaying(true)}
                className="absolute inset-0 w-full h-full group"
                aria-label="הפעל סרטון"
              >
                <img src={videoThumbnail} alt="תצוגה מקדימה של הסרטון" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#c08070] translate-x-0.5" fill="#c08070" />
                  </div>
                </div>
              </button>
            )}
          </div>

          <CtaButton large onOpen={() => setHealthModalOpen(true)} />
          <p className="mt-4 text-sm text-[#8a6b62]">מחיר השקה מיוחד · ₪369.90 בלבד</p>
          <p className="mt-2 text-base tracking-widest text-[#c08070] uppercase font-['Lora'] italic leading-relaxed">
            ניתן לקבל החזר כספי עבור הקורס מקופת החולים (סל הריון) או מביטוח בריאות פרטי, בכפוף לתנאי הזכאות והפוליסה.
          </p>
        </div>
      </section>

      <WaveDivider fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          SOCIAL PROOF STRIP
      ══════════════════════════════════════════════════*/}
      <section className="bg-[#fdf5f0] py-10 px-6">
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { num: "12", label: "שיעורי פילאטיס" },
            { num: "100%", label: "דיגיטלי ונגיש" },
            { num: "∞", label: "גישה לצמיתות" },
            { num: "♡", label: "ליווי אישי" },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl text-[#c08070] font-bold">{num}</div>
              <div className="text-sm text-[#8a6b62] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <WaveDivider flip fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          WHY PILATES
      ══════════════════════════════════════════════════*/}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8 -mx-6 md:-mx-12 lg:-mx-24">
            <ImageWithFallback src={whySection} alt="פילאטיס בהריון" className="w-full object-cover" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            אז למה בכלל פילאטיס בהריון?
          </h2>
          <p className="text-[#8a6b62] text-lg leading-loose mb-12 max-w-2xl mx-auto">
            במהלך ההריון הגוף שלך עובר את אחד השינויים הגדולים בחיים. עם כל שבוע שחולף, העומס על הגוף גדל, מרכז הכובד משתנה, שרירי הבטן נחלשים ורצפת האגן נדרשת לשאת עומס שרק הולך וגובר.
            <br /><br />
            לצד ההתרגשות נשים רבות מתחילות להרגיש:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-14">
            {whyPoints.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-3 bg-[#fdf5f0] rounded-2xl py-6 px-4 border border-[#e8cfc5]">
                <div className="w-12 h-12 rounded-full bg-[#c08070]/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#c08070]" />
                </div>
                <span className="text-sm text-[#3a2620] text-center leading-snug font-semibold">{label}</span>
              </div>
            ))}
          </div>

          <div className="relative bg-[#fdf5f0] border border-[#e8cfc5] rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl font-semibold text-[#3a2620] leading-relaxed mb-4">
              אבל דווקא בתקופה הזו, תנועה נכונה היא אחת המתנות הגדולות ביותר שאפשר להעניק לגוף.
            </p>
            <p className="text-[#8a6b62] leading-relaxed">
              <span className="font-bold">אני מכירה את התחושות האלה מקרוב!</span> בזמן ההריון שלי הבנתי עד כמה תרגול נכון יכול להשפיע על ההרגשה, על ההכנה ללידה ועל הביטחון בתנועה. מתוך החוויה האישית שלי, לצד הידע והניסיון המקצועי שלי, נולד הקורס הזה.
            </p>
          </div>
        </div>
      </section>

      <WaveDivider fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          GALLERY
      ══════════════════════════════════════════════════*/}
      <section className="bg-[#fdf5f0] py-0">
        <ImageWithFallback src={coursesMockup} alt="קורס פילאטיס בהריון" className="w-full object-contain" />
      </section>

      <WaveDivider flip fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          ABOUT MAY
      ══════════════════════════════════════════════════*/}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
            <div className="flex-shrink-0 text-center">
              <ImageWithFallback src={mayPhoto} alt="מאי צבי" className="w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem] object-cover shadow-lg" />
              <p className="mt-4 text-xl font-bold text-[#3a2620]">מאי צבי</p>
              <p className="text-sm text-[#8a6b62]">מדריכת פילאטיס | שיקום | הריון ולאחר לידה</p>
            </div>

            <div className="flex-1">
              <p className="text-sm tracking-[0.25em] text-[#c08070] uppercase font-['Lora'] italic mb-4">נעים מאד</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                אני מאי צבי
              </h2>
              <div className="space-y-4 text-[#8a6b62] leading-loose text-lg">
                <p>אמא של הלני ואשתו של אלעד, מדריכת פילאטיס מזרן, מכשירים ובר ומומחית לעבודה עם נשים בהריון ולאחר לידה.</p>
                <p>התנועה מלווה אותי מאז שאני זוכרת את עצמי. במשך שנים רקדתי באופן מקצועי, עד שפציעה בכתף הובילה אותי לעולם הפילאטיס.</p>
                <p>במהלך השיקום גיליתי שיטה שלא רק החזירה אותי לתפקוד מלא, אלא גם שינתה לחלוטין את הדרך שבה אני מבינה את הגוף. שם נולדה האהבה שלי לפילאטיס, וההחלטה להפוך אותו למקצוע ולשליחות.</p>
                <p>לאורך השנים המשכתי ללמוד, להתפתח ולהעמיק מתוך רצון להעניק לכל מתאמנת ליווי מקצועי, בטוח ומדויק. במהלך הדרך עברתי הכשרות והתמחויות בתחומי פילאטיס שיקומי, עבודה עם פתולוגיות, פילאטיס לגיל השלישי, פאוור פילאטיס וכמובן – פילאטיס לנשים בהריון ולאחר לידה.</p>
                <p>כשנכנסתי להריון עם הלני והפכתי בעצמי לאמא, כל הידע המקצועי שצברתי קיבל משמעות חדשה. חוויתי מקרוב את השינויים שהגוף עובר, את העומסים, את ההתרגשות וגם את השאלות שמלוות כל אישה בתקופה הזו.</p>
                <p className="text-lg font-semibold text-[#3a2620]">אני מאמינה שלכל אישה בהריון מגיע להרגיש בטוחה בגוף שלה, להבין מה נכון עבורה ולהמשיך לנוע בצורה מקצועית, בטוחה ומדויקת. וזו בדיוק הגישה שמלווה אותי בכל שיעור, בכל ליווי ובכל תרגול שתפגשי לאורך הקורס.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          COURSE FEATURES
      ══════════════════════════════════════════════════*/}
      <section className="bg-[#fdf5f0] py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm tracking-[0.25em] text-[#c08070] uppercase font-['Lora'] italic mb-4">מה בפנים</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-14">
            מה מחכה לך בתוך בקורס?
          </h2>

          <div className="grid grid-cols-2 gap-5 mb-14">
            {courseFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#f7ede6] rounded-3xl p-6 flex flex-col items-center text-center gap-3 border border-[#e8cfc5] hover:border-[#c08070]/40 hover:shadow-md transition-all">
                <div className="w-14 h-14 rounded-full bg-[#c08070]/15 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[#c08070]" />
                </div>
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm text-[#8a6b62] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <CtaButton onOpen={() => setHealthModalOpen(true)} />
        </div>
      </section>

      <WaveDivider flip fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          COURSE STRUCTURE
      ══════════════════════════════════════════════════*/}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold">מבנה הקורס</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {modules.map(({ label, title, desc }) => (
              <div key={label} className="bg-[#fdf5f0] rounded-2xl px-6 py-6 border border-[#e8cfc5] hover:border-[#c08070]/35 hover:shadow-sm transition-all">
                <p className="text-sm font-bold text-[#c08070] mb-1">{label}</p>
                {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
                <p className="text-sm text-[#8a6b62] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          BONUSES
      ══════════════════════════════════════════════════*/}
      <section className="bg-[#fdf5f0] py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-3xl block mb-3">🎁</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              מתנות שמחכות לך
              <br />
              <span className="text-[#c08070]">עם ההרשמה</span>
            </h2>
            <p className="text-[#8a6b62] mt-4">כי היה לי חשוב להעניק לך כמה שיותר...</p>

          </div>

          <div className="space-y-4">
            {bonuses.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-5 items-start bg-[#f7ede6] rounded-3xl p-6 border border-[#e8cfc5] hover:border-[#c08070]/35 hover:shadow-sm transition-all">
                <div className="w-12 h-12 rounded-full bg-[#c08070]/15 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#c08070]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{title}</h3>
                  <p className="text-[#8a6b62] leading-relaxed text-sm">{desc.split("\n").map((line, i) => <span key={i}>{line}{i < desc.split("\n").length - 1 && <br />}</span>)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <CtaButton onOpen={() => setHealthModalOpen(true)} />
          </div>
        </div>
      </section>

      <WaveDivider flip fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════*/}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.25em] text-[#c08070] uppercase font-['Lora'] italic mb-4">מה אומרות</p>
            <h2 className="text-3xl md:text-5xl font-bold">
              נשים שהתאמנו אצלי משתפות
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map(({ name, photo, text }) => (
              <div key={name} className="bg-[#fdf5f0] rounded-3xl p-6 border border-[#e8cfc5] flex flex-col gap-4">
                <div className="relative bg-[#dcf8c6] rounded-2xl rounded-br-none p-4 text-sm text-[#2c3e2d] leading-relaxed shadow-sm flex-1">
                  {text.split("\n").map((line, i) => (
                    <span key={i}>{line}{i < text.split("\n").length - 1 && <br />}</span>
                  ))}
                  <div className="absolute bottom-0 right-[-8px] w-0 h-0 border-l-8 border-l-[#dcf8c6] border-t-8 border-t-transparent" />
                </div>
                <div className="flex items-center gap-3 justify-end">
                  <p className="font-bold text-[#3a2620] text-sm">{name}</p>
                  {photo ? (
                    <ImageWithFallback src={photo} alt={name} className="w-10 h-10 rounded-full flex-shrink-0 object-cover" />
                  ) : (
                    <div className="w-10 h-10 rounded-full flex-shrink-0 bg-[#e8cfc5] flex items-center justify-center">
                      <User className="w-5 h-5 text-[#c08070]" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════*/}
      <section className="bg-[#fdf5f0] py-24 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm tracking-[0.25em] text-[#c08070] uppercase font-['Lora'] italic mb-4">שאלות</p>
            <h2 className="text-3xl md:text-5xl font-bold">שאלות נפוצות</h2>
          </div>

          <FaqAccordion items={faqs} />
        </div>
      </section>

      <WaveDivider flip fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          PRICING
      ══════════════════════════════════════════════════*/}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            מוכנה להתחיל את המסע שלך ביחד איתי?
          </h2>
          <p className="text-[#8a6b62] mb-6 leading-relaxed">
            <strong>ההריון שלך הוא תקופה חד־פעמית.</strong><br />תני לעצמך את ההזדמנות לעבור אותו עם גוף חזק יותר, מלא ביטחון, תנועה והכנה אמיתית לקראת הלידה.
          </p>

          <div className="bg-[#fdf5f0] rounded-[2.5rem] border border-[#e8cfc5] p-8 md:p-12 shadow-sm">
            <p className="text-base tracking-widest text-[#c08070] uppercase font-['Lora'] italic mb-1">מחיר השקה מיוחד</p>
            <p className="text-base tracking-widest text-[#c08070] uppercase font-['Lora'] italic mb-3">ל100 הנרשמות הראשונות</p>
            <div className="flex items-center justify-center gap-4 mb-1">
              <span className="text-2xl md:text-3xl font-medium text-[#8a6b62]/70 line-through decoration-[#c08070] decoration-2">499.90 ש"ח</span>
            </div>
            <div className="text-7xl font-extrabold text-[#3a2620] mb-1">369.90 ש"ח</div>
            <p className="text-base tracking-widest text-[#c08070] uppercase font-['Lora'] italic leading-relaxed mt-3 mb-3">
              ניתן לקבל החזר כספי עבור הקורס מקופת החולים (סל הריון) או מביטוח בריאות פרטי, בכפוף לתנאי הזכאות והפוליסה.
            </p>
            <p className="text-[#8a6b62] text-sm mb-8">תשלום חד-פעמי</p>

            <ul className="space-y-3 text-right mb-10">
              {[
                "גישה ללא הגבלת זמן",
                "ליווי אישי לאורך הדרך",
                "12 שיעורי פילאטיס מותאמים להריון",
                "כל המתנות שמחכות לך עם ההרשמה",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#c08070]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-[#c08070]" strokeWidth={3} />
                  </div>
                  <span className="text-[#3a2620] font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => setHealthModalOpen(true)}
              className="block w-full bg-[#c08070] text-white font-bold text-xl py-5 rounded-full shadow hover:bg-[#b87060] transition-all hover:shadow-lg hover:scale-[1.01] active:scale-100 text-center"
            >
              אני רוצה את הקורס!
            </button>
            <p className="text-xs text-[#8a6b62] mt-4">יש שאלות? אני כאן בשבילך ❤️</p>
          </div>
        </div>
      </section>

      <WaveDivider fill="#fdf5f0" />

      {/*══════════════════════════════════════════════════
          CONTACT FORM
      ══════════════════════════════════════════════════*/}
      <section className="bg-[#fdf5f0] py-24 px-6">
        <div className="max-w-md mx-auto text-center">
          <p className="text-sm tracking-[0.25em] text-[#c08070] uppercase font-['Lora'] italic mb-4">צרי קשר</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">יש לך שאלות?</h2>
          <p className="text-[#8a6b62] mb-10">השאירי פרטים ואחזור אלייך בהקדם</p>

          {submitted ? (
            <div className="bg-[#f7ede6] border border-[#e8cfc5] rounded-3xl p-10 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-2">קיבלתי!</h3>
              <p className="text-[#8a6b62]">אחזור אלייך בהקדם — מבטיחה 🌸</p>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              const subject = encodeURIComponent("פנייה מהאתר - " + formData.name);
              const body = encodeURIComponent(`שם: ${formData.name}\nאימייל: ${formData.email}\nטלפון: ${formData.phone}`);
              window.location.href = `mailto:Mayzvipilates@gmail.com?subject=${subject}&body=${body}`;
              setSubmitted(true);
            }}>
              {[
                { icon: User,  type: "text",  placeholder: "שם מלא",       field: "name"  },
                { icon: Mail,  type: "email", placeholder: "כתובת אימייל", field: "email" },
                { icon: Phone, type: "tel",   placeholder: "מספר טלפון",   field: "phone" },
              ].map(({ icon: Icon, type, placeholder, field }) => (
                <div key={field} className="relative">
                  <Icon className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8a6b62]" />
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full bg-[#f7ede6] border border-[#e8cfc5] rounded-2xl px-5 py-4 pr-11 text-[#3a2620] placeholder:text-[#8a6b62]/60 focus:outline-none focus:border-[#c08070]/60 transition-colors"
                  />
                </div>
              ))}
              <button type="submit" className="w-full bg-[#c08070] text-white font-bold py-4 rounded-full hover:bg-[#b87060] transition-all hover:shadow-md">
                שליחה
              </button>
            </form>
          )}
        </div>
      </section>

      {/*══════════════════════════════════════════════════
          SIGN-OFF
      ══════════════════════════════════════════════════*/}
      <section className="py-14 px-6 text-center border-t border-[#e8cfc5]">
        <ImageWithFallback
          src={logoImg}
          alt="Pilates with May"
          className="w-28 mx-auto mb-4 object-contain opacity-60"
        />
        <a
          href="https://www.instagram.com/may_zvi_pilates"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-[#8a6b62] hover:text-[#c08070] transition-colors mb-4"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
          @may_zvi_pilates
        </a>
        <p className="text-xs text-[#8a6b62]">© 2024 Pilates with May · כל הזכויות שמורות</p>
      </section>

    </div>
  );
}
