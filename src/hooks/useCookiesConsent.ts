import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const COOKIE_NAME = "cookieConsent";

export function useCookiesConsent() {
  const [consent, setConsent] = useState<string | null>(() => Cookies.get(COOKIE_NAME) || null);

  useEffect(() => {
    setConsent(Cookies.get(COOKIE_NAME) || null);
  }, []);

  const acceptCookies = () => {
    Cookies.set(COOKIE_NAME, "accepted", { expires: 30 }); // 30 days
    setConsent("accepted");
  };

  const rejectCookies = () => {
    Cookies.set(COOKIE_NAME, "rejected", { expires: 30 });
    setConsent("rejected");
  };

  return { consent, acceptCookies, rejectCookies };
}
