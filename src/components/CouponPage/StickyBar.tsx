import CtaBtn from "./CtaBtn";

// components/StickyBar.js
export default function StickyBar({ whatsappLink }: { whatsappLink: string }) {
  return (
    <div className="sticky-bar">
      <CtaBtn whatsappUrl={whatsappLink} />
    </div>
  )
}