// components/Hero.js
import { COUPON_DATA } from '@/constants/data'
import { createClient } from '@/lib/clientSupabase'
import { CouponData } from '@/types/dataTypes'
import { SquareArrowRightEnter, SquareCheckBig, Users } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {

  const currentCoupon: CouponData = COUPON_DATA

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
      <div className='mb-3!'>
        <Image src="/logo1.png" alt="Logo BestPronos" width={150} height={30} className='object-cover'/>
      </div>
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