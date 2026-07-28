import { useState } from "react";
import { X } from "lucide-react";

export default function CookieConsent() {
  const [showCookieBox, setShowCookieBox] = useState(() => {
    const cookieChoice = localStorage.getItem("cookieChoice");
    return cookieChoice ? false : true;
  });

  function handleAccept() {
    localStorage.setItem("cookieChoice", "accepted");
    setShowCookieBox(false);
  }

  function handleDecline() {
    localStorage.setItem("cookieChoice", "declined");
    setShowCookieBox(false);
  }

  if (!showCookieBox) return null;

  return (
    <div className="fixed left-6 right-6 bottom-6 z-[9999] p-5 bg-bg-dark text-white rounded-[14px] shadow-[0_6px_25px_rgba(0,0,0,0.35)] flex justify-between items-center gap-5 flex-wrap animate-slide-up">
      <div className="max-w-[800px]">
        <h3 className="m-0 mb-2 text-base font-bold flex items-center gap-2">
          🍪 This website uses cookies
        </h3>
        <p className="m-0 text-sm text-white/70 leading-relaxed">
          We use cookies to improve your browsing experience, remember your
          preferences and support salon booking features.
        </p>
      </div>

      <div className="flex gap-3 flex-wrap">
        <button
          onClick={handleAccept}
          className="px-5 py-2.5 bg-primary text-white border-none rounded-lg cursor-pointer font-bold text-sm hover:bg-primary-dark transition-colors"
        >
          Accept
        </button>
        <button
          onClick={handleDecline}
          className="px-5 py-2.5 bg-white text-bg-dark border-none rounded-lg cursor-pointer font-bold text-sm hover:bg-white/90 transition-colors"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
