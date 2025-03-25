import { Link } from "react-router-dom";
import { useCookiesConsent } from "../hooks/useCookiesConsent";

export default function CookieBanner() {
  const { consent, acceptCookies, rejectCookies } = useCookiesConsent();

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center shadow-lg">
      <div className="max-w-4xl mx-auto">
        <p className="text-lg">
          🌟 Este site utiliza cookies para oferecer a melhor experiência possível. Ao continuar a navegar, você aceita nossa
          <Link to="/marketing-website/policies" className="text-blue-400 underline" target="_blank"><pre/>Políticas de Privacidade e Termos de Uso</Link>
        </p>
        <div className="mt-4 space-x-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition duration-300"
            onClick={acceptCookies}
          >
            Aceitar Cookies
          </button>
          <button
            className="bg-transparent border-2 border-gray-300 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition duration-300"
            onClick={rejectCookies}
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
}
