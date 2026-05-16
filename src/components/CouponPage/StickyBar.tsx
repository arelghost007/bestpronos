// components/StickyBar.js
export default function StickyBar({ whatsappLink }: { whatsappLink: string }) {
  return (
    <div className="sticky-bar">
      <a href={whatsappLink} className="btn btn-wa" style={{ fontSize: '13px', padding: '13px 8px' }}>
        📲 Rejoindre WhatsApp
      </a>
    </div>
  )
}