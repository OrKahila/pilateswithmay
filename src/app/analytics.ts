// ─── ANALYTICS ────────────────────────────────────────────────────────────────
// Google Analytics 4 + Meta Pixel. Each one loads only once its ID is filled in.
const GA_ID = "G-8S8HPPELV4";
const PIXEL_ID = ""; // e.g. "1234567890123456"

const COURSE_PRICE = 369.9;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: ((...args: unknown[]) => void) & { callMethod?: (...args: unknown[]) => void; queue: unknown[]; loaded: boolean; version: string; push: unknown };
    _fbq: unknown;
  }
}

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

export function initAnalytics() {
  if (GA_ID) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
    loadScript(`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  }

  if (PIXEL_ID) {
    const fbq: any = function (...args: unknown[]) {
      fbq.callMethod ? fbq.callMethod(...args) : fbq.queue.push(args);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }
}

function track(gaEvent: string, gaParams: Record<string, unknown>, pixelEvent: string, pixelParams: Record<string, unknown> = {}, custom = false) {
  if (GA_ID && window.gtag) window.gtag("event", gaEvent, gaParams);
  if (PIXEL_ID && window.fbq) window.fbq(custom ? "trackCustom" : "track", pixelEvent, pixelParams);
}

// "אני רוצה את הקורס!" clicked – health declaration opens
export const trackCourseInterest = (location: string) =>
  track("course_cta_click", { location }, "CourseCtaClick", { location }, true);

// Health declaration confirmed – visitor sent to the purchase page
export const trackCheckout = () =>
  track(
    "begin_checkout",
    { currency: "ILS", value: COURSE_PRICE, items: [{ item_name: "קורס פילאטיס להריון", price: COURSE_PRICE }] },
    "InitiateCheckout",
    { currency: "ILS", value: COURSE_PRICE }
  );

// WhatsApp button clicked
export const trackWhatsApp = () =>
  track("contact_whatsapp", {}, "Contact");
