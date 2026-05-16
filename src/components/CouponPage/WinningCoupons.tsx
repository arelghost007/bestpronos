// components/WinningCoupons.js
// Pas de 'use client' ici, ce composant s'exécute côté serveur

import ScaleCarousel from '../Embla-carousel/ScaleCarousel'
import { Activity } from 'lucide-react'
import { createClient } from '@/lib/clientSupabase' // Assurez-vous que ce client fonctionne côté serveur (createServerComponentClient)

export default async function WinningCoupons({ whatsappLink }: { whatsappLink: string }) {
  const supabase = createClient()
  
  // Récupération des données côté serveur
  const { data: coupons } = await supabase
    .from('won')
    .select('*')
    .order('id', { ascending: true })

  return (
    <section className="py-10">
      <h2 className="section-title flex justify-center items-center gap-2">
        <Activity size={46} color="#F5A623" /> Derniers coupons <span className="text-amber-500">gagnants</span>
      </h2>
      
      {/* On passe les données au composant client */}
      <ScaleCarousel winCoupons={coupons || []} whatsappLink={whatsappLink} />
    </section>
  )
}