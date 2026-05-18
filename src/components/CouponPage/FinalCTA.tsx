
import { SquareArrowRightEnter } from "lucide-react";
import Link from "next/link";
import CtaBtn from "./CtaBtn";

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
        Rejoins le groupe maintenant et crée ton compte pour commencer à gagner dès ce soir.
      </p>
      <div className="flex justify-center items-center">
        <CtaBtn whatsappUrl={whatsappLink} />
      </div>
    </section>
  )
}