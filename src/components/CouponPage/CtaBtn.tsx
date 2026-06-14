"use client"; // 👈 OBLIGATOIRE dans l'App Router de Next.js pour utiliser onClick et window

import { SquareArrowRightEnter } from 'lucide-react'; // Utilisation d'une icône standard pour éviter les erreurs d'import
import React from 'react';

// Déclaration propre de fbq pour TypeScript
declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

interface CtaBtnProps {
  whatsappUrl: string;
}

function CtaBtn({ whatsappUrl }: CtaBtnProps) {

  const handleWhatsAppClick = () => {
    // Vérification propre si fbq est chargé dans le navigateur
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Contact", {
        content_name: "Rejoindre le groupe WhatsApp",
        content_category: "Community"
      }); 
      // console.log("Meta Pixel: Événement Contact envoyé !"); // Pour vos tests en local
    }
  };

  return (
    <div className="cta-group">
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-wa" 
        onClick={handleWhatsAppClick}
      >
        <span className="btn-icon"><SquareArrowRightEnter size={18} /></span>
        Rejoindre la chaine WhatsApp
      </a>
    </div>
  );
}

export default CtaBtn;