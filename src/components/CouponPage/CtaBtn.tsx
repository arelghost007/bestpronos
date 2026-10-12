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
  if (typeof window !== "undefined" && (window as any).fbq) {
    // 1. Créer un ID unique pour cette interaction spécifique
    const eventId = `contact_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;

    // 2. Envoyer l'événement Pixel côté client avec l'eventID
    (window as any).fbq(
      "track",
      "Contact",
      {
        content_name: "Rejoindre le groupe WhatsApp",
        content_category: "Community",
      },
      { eventID: eventId },
    ); // <--- Clé de déduplication ajoutée ici

    // 3. Si tu envoies aussi via CAPI côté serveur, passe le MÊME `eventId` à ton API :
    /*
    fetch('/api/meta-conversions', {
      method: 'POST',
      body: JSON.stringify({ eventName: 'Contact', eventId: eventId })
    });
    */
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
        Rejoindre la chaîne WhatsApp
      </a>
    </div>
  );
}

export default CtaBtn;