import React from 'react';
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const HeroFooterSection: React.FC = () => {
  const ussdCode = "*384*88462#";

  return (
    <div className="font-sans text-foreground">
   

      <footer className="bg-brown-50">
        
        <div className="flex items-center justify-center border-t border-[#4f1808] mt-10 pt-6 text-center text-[#6b4a40] text-base select-none">
          <span className="text-base mr-1">&#169;</span>
          2025 KaziLink. Connecting Fields with Hands.
        </div>
      </footer>
    </div>
  );
};

export default HeroFooterSection;