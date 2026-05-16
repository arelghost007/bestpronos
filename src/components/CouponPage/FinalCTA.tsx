import { SquareArrowRightEnter } from "lucide-react";
import Link from "next/link";

// components/FinalCTA.js
export default function FinalCTA({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="final-cta">
      <h2 className="">
        Le coupon du jour
        <br />
        est encore <span>disponible 🔥</span>
      </h2>
      <p className="" style={{ marginTop: '12px' }}>
        Rejoins le canal maintenant ou crée ton compte pour commencer à gagner dès ce soir.
      </p>
      <div className="cta-group " style={{ maxWidth: '360px', margin: '0 auto' }}>
        <Link href={whatsappLink} className="btn btn-wa">
          <span className="btn-icon"><SquareArrowRightEnter /></span>
           Rejoindre WhatsApp
        </Link>
      </div>
    </section>
  )
}