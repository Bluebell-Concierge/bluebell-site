import Image from "next/image"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <Image
        src="/images/bluebell-logo.png"
        alt="Bluebell Concierge Logo"
        width={90}
        height={50}
        className="hover:scale-105 transition-transform duration-300"
        priority
      />
      <strong className="-ml-2.5 text-[1.75rem]/6 text-primary font-bold font-serif leading-tight/6">
        <p>Bluebell</p>
        <p className="text-[1.625rem]">Concierge</p>
      </strong>
    </div>
  )
}
