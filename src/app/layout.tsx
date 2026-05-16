// app/layout.js
import './globals.css'
import { Bebas_Neue, Outfit } from 'next/font/google'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas-neue',
})

const outfit = Outfit({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata = {
  title: 'Coupons VIP – Récupère le coupon du jour',
  description: 'Coupons analysés à forte cote, disponibles uniquement via notre canal WhatsApp',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  )
}