import { FaPhoneAlt, FaTelegramPlane, FaEnvelope } from "react-icons/fa"; // npm install react-icons

export default function SocialFixed() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
      {/* Телефон */}
      <a href="tel:+380731606731" className="bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/30 transition-colors transform hover:scale-110">
        <FaPhoneAlt className="text-white w-5 h-5"/>
      </a>

      {/* Telegram */}
      <a href="https://t.me/jenyatarsenko" target="_blank" rel="noopener noreferrer" className="bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/30 transition-colors transform hover:scale-110">
        <FaTelegramPlane className="text-white w-5 h-5"/>
      </a>

      <a href="https://t.me/jenyatarsenko" className="bg-white/20 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-white/30 transition-colors transform hover:scale-110">
        <FaEnvelope className="text-white w-5 h-5" />
      </a>
    </div>
  );
}
