// components/Hero.js
import { COUPON_DATA } from '@/constants/data'
import { CouponData } from '@/types/dataTypes'
import { SquareCheckBig, Users } from 'lucide-react'
import Image from 'next/image'
import CtaBtn from './CtaBtn'

export default function Hero() {

  const currentCoupon: CouponData = COUPON_DATA

  // Valeurs de secours (fallback) si la table est vide pour éviter un crash
  const odds = currentCoupon?.odds ? currentCoupon.odds.toFixed(2) : "—"
  const stake = currentCoupon?.stake ? `${currentCoupon.stake.toLocaleString('fr-FR')} FCFA` : "—"
  const gain = currentCoupon?.gain ? `${currentCoupon.gain.toLocaleString('fr-FR')} FCFA` : "—"
  const couponImage = currentCoupon?.image_url || "/assets/image.png"
  const whatsappUrl = currentCoupon?.whatsapp_link || "https://chat.whatsapp.com/DTobg9SWau099IAdQ7WU4v"

  return (
    <section className="hero">
      <div className='mb-3!'>
        <Image src="/logo2.webp" alt="Logo BestPronos" width={150} height={30} className='object-cover' priority/>
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
        Coupon analysé • <strong>Cote élevée</strong> • Disponible uniquement dans notre groupe WhatsApp
      </p>

      <div className="ticket-wrap">
        <div className="ticket pb-5!">
          <div className="ticket-header">
            <div>
              <div className="label">Coupon VIP</div>
              <div className="val">{currentCoupon.date}</div>
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
              Rejoins le groupe <span>WhatsApp</span> pour débloquer les matchs
            </p>
          </div>
          <div className="ticket-glow"></div>
        </div>
      </div>

      <CtaBtn whatsappUrl={whatsappUrl} />

      <div className="proof-strip">
        <div className="proof-item">
          <span className="check"><SquareCheckBig size={18}/></span>
          <span>
            <strong>7</strong> coupons validés cette semaine
          </span>
        </div>
        <div className="proof-item">
          <span className="check"><Users size={18} /></span>
          <span>
            <strong>+2 500</strong> membres actifs
          </span>
        </div>
      </div>
    </section>
  )
}