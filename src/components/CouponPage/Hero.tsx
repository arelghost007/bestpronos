// components/Hero.js
import { createClient } from '@/lib/clientSupabase'
import { SquareArrowRightEnter, SquareCheckBig, Users } from 'lucide-react'
import Image from 'next/image'

interface CouponData {
  id: number
  odds: number | null
  stake: number | null
  gain: number | null
  date: string | null
  whatsapp_link: string | null
  image_url: string | null
}

export default async function Hero() {
  const supabase = createClient()
  
  // Récupération du tout dernier coupon enregistré (le coupon du jour)
  const { data } = await supabase
    .from('coupons')
    .select('*')
    .order('id', { ascending: false })
    .limit(1)
    .single()

  const currentCoupon: CouponData | null = data

  // Valeurs de secours (fallback) si la table est vide pour éviter un crash
  const formattedDate = currentCoupon?.date 
    ? new Date(currentCoupon.date).toLocaleDateString('fr-FR') 
    : "Disponible"
    
  const odds = currentCoupon?.odds ? currentCoupon.odds.toFixed(2) : "—"
  const stake = currentCoupon?.stake ? `${currentCoupon.stake.toLocaleString('fr-FR')} FCFA` : "—"
  const gain = currentCoupon?.gain ? `${currentCoupon.gain.toLocaleString('fr-FR')} FCFA` : "—"
  const couponImage = currentCoupon?.image_url || "/assets/image.png"
  const whatsappUrl = currentCoupon?.whatsapp_link || "#"

  return (
    <section className="hero">
      <div className="hero-glw"></div>

      <div className="badge">
        <span className="dot"></span>
        Coupon VIP disponible aujourd'hui
      </div>

      <h1>
        Récupère le coupon
        <br />
        <span>du jour</span>
      </h1>

      <p className="sub">
        Coupon analysé • <strong>Cote élevée</strong> • Disponible uniquement via notre canal WhatsApp
      </p>

      <div className="ticket-wrap">
        <div className="ticket pb-5!">
          <div className="ticket-header">
            <div>
              <div className="label">Coupon VIP</div>
              <div className="val">{formattedDate}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div className="label">Cote totale</div>
              <div className="val" style={{ fontSize: '26px', color: 'var(--gold-light)' }}>
                {odds}
              </div>
            </div>
          </div>

          <div className="ticket-row" style={{ borderBottom: 'none' }}>
            <Image 
              src={couponImage} 
              alt="Match du jour" 
              style={{ objectFit: 'contain' }} 
              width={800} 
              height={300} 
              priority
              unoptimized
            />
          </div>

          <div className="ticket-footer">
            <div>
              <div className="total-label">Mise : {stake}</div>
            </div>
            <div>
              <div className="total-label" style={{ textAlign: 'right' }}>
                Gain potentiel
              </div>
              <div className="total-val">{gain}</div>
            </div>
          </div>

          <div className="ticket-overlay">
            <p className="unlock-hint">
              Rejoins le canal <span>WhatsApp</span> pour débloquer les matchs
            </p>
          </div>
          <div className="ticket-glow"></div>
        </div>
      </div>

      <div className="cta-group">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa">
          <span className="btn-icon"><SquareArrowRightEnter /></span>
          Rejoindre le canal WhatsApp
        </a>
      </div>

      <div className="proof-strip">
        <div className="proof-item">
          <span className="check"><SquareCheckBig /></span>
          <span>
            <strong>18</strong> coupons validés cette semaine
          </span>
        </div>
        <div className="proof-item">
          <span className="check"><Users /></span>
          <span>
            <strong>+2 500</strong> membres actifs
          </span>
        </div>
      </div>
    </section>
  )
}