import { Lock } from "lucide-react";
import CtaBtn from "./CtaBtn";

// components/InterstitialCTA.js
export default function InterstitialCTA({
  whatsappLink,
}: {
  whatsappLink: string;
}) {
  return (
    <section
      id="interstitialCTASection"
      className="section"
      style={{ paddingTop: "32px", paddingBottom: "32px" }}
    >
      <div className="inter-cta">
        <div className="mb-10! flex justify-center items-center">
          <Lock size={28} color="#3B82F6" strokeWidth={3} />
        </div>
        <h2
          style={{ fontSize: "24px", marginBottom: "10px", lineHeight: "1.1" }}
        >
          Prochains coupons
          <br />
          <span style={{ color: "var(--gold)" }}>
            publiés en avant-première
          </span>
        </h2>
        <p>
          Les sélections sont partagées{" "}
          <strong>directement sur WhatsApp</strong> avant le début des matchs.
          Ne rate pas le prochain.
        </p>
        <CtaBtn whatsappUrl={whatsappLink} />
      </div>
    </section>
  );
}
