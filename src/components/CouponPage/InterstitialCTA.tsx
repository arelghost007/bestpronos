import { Lock, SquareArrowRightEnter } from "lucide-react";

// components/InterstitialCTA.js
export default function InterstitialCTA({ whatsappLink }: { whatsappLink: string }) {
  return (
    <section className="section" style={{ paddingTop: '32px', paddingBottom: '32px' }}>
      <div className="inter-cta">
        <div className="mb-10! flex justify-center items-center"><Lock size={28} color="#F5A623" strokeWidth={3}/></div>
        <h2 style={{ fontSize: '24px', marginBottom: '10px', lineHeight: '1.1' }}>
          Prochains coupons
          <br />
          <span style={{ color: 'var(--gold)' }}>publiés en avant-première</span>
        </h2>
        <p>
          Les sélections sont partagées <strong>directement sur WhatsApp</strong> avant le début des
          matchs. Ne rate pas le prochain.
        </p>
        <div className="cta-group">
          <a href={whatsappLink} className="btn btn-wa">
            <SquareArrowRightEnter /> Rejoindre WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}