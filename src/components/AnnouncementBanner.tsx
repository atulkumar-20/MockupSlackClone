import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export const AnnouncementBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { currentUser } = useAuth();

  if (!isVisible || currentUser) return null;

  return (
    <div className="bg-[#1264A3] text-white px-6 py-4 relative rounded-lg mx-4 my-2">
      <div className="flex items-center justify-center text-center">
        <p className="pr-8">
          Slack is your digital HQ. Meet the new features keeping teams
          connected in a work-from-anywhere world.
          <Link
            to="/signin"
            className="underline ml-1 font-medium hover:text-gray-200 transition-colors"
            onClick={() => setIsVisible(false)}
          >
            Let's go →
          </Link>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 text-white"
          aria-label="Close banner"
        >
          ×
        </button>
      </div>
    </div>
  );
};
