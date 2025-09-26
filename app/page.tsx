export default function Page(){
  return (
    <section className="container-max grid md:grid-cols-2 gap-7 items-center py-10">
      <div className="card p-7" style={{background:'linear-gradient(160deg,rgba(255,210,123,.08),rgba(159,211,255,.06))', border:'1px solid rgba(255,255,255,.08)'}}>
        <span className="badge">BESPOKE LUXURY TRAVEL</span>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-3">Seamless journeys. Elevated stays.<br/>Tailored by Solstice Luxe Travel.</h1>
        <p className="text-[color:var(--muted,#b7b9c7)] mt-4">We craft one-of-a-kind itineraries with insider perks and stress-free planning.</p>
        <a href="/contact" className="inline-block mt-5 px-5 py-3 rounded-2xl font-semibold text-black" style={{background:'linear-gradient(135deg,#ffd27b,#ffc36b)'}}>Start Your Trip</a>
      </div>
      <div className="card p-0 overflow-hidden h-[360px] border border-white/10 rounded-3xl"/>
    </section>
  )
}
