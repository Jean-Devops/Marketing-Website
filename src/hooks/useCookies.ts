import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export function useCookies(cookieName: string) {
  const [cookie, setCookieState] = useState<string | null>(() => Cookies.get(cookieName) || null);

  useEffect(() => {
    setCookieState(Cookies.get(cookieName) || null);
  }, [cookieName]);

  const setCookie = (value: string, options?: Cookies.CookieAttributes) => {
    Cookies.set(cookieName, value, { expires: 7, ...options });
    setCookieState(value);
  };

  const removeCookie = () => {
    Cookies.remove(cookieName);
    setCookieState(null);
  };

  return { cookie, setCookie, removeCookie };
}