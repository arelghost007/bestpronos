import { Activity, Bell, Zap } from "lucide-react"

// components/WhyJoin.js
export default function WhyJoin() {
  const reasons = [
    {
      icon: Zap,
      title: 'Coupons rapides',
      description: 'Reçois les coupons avant tout le monde, directement sur ton téléphone.',
    },
    {
      icon: Activity,
      title: 'Coupons analysés',
      description: 'Sélections optimisées quotidiennement par notre équipe d\'experts.',
    },
    {
      icon: Bell,
      title: 'Alertes instantanées',
      description: 'Notification directe sur WhatsApp avant le coup d\'envoi.',
    },
  ]

  return (
    <section id='whyJoinSection' className="section">
      <h2 className="section-title">
        Pourquoi nous <span>rejoindre ?</span>
      </h2>

      <div className="why-cards">
        {reasons.map((reason, idx) => (
          <div key={idx} className="why-card">
            <div className="why-icon">
              <reason.icon size={26} color="#F5A623" />
            </div>
            <div className="why-text">
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}