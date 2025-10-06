import Link from 'next/link'

export default function Home(){
  return (
    <main>
      <section className="hero">
        <img src="/featured/1.jpg" className="active" alt="Featured 1"/>
        <img src="/featured/2.jpg" alt="Featured 2"/>
        <img src="/featured/3.jpg" alt="Featured 3"/>
        <img src="/featured/4.jpg" alt="Featured 4"/>
        <img src="/featured/5.jpg" alt="Featured 5"/>
        <img src="/featured/6.jpg" alt="Featured 6"/>
        <div className="overlay"></div>
        <div className="container" style={{position:'relative',zIndex:2,paddingTop:'28vh',paddingLeft:16,paddingRight:16}}>
          <h1>Jory Henry — Realism & Surrealism Tattoos</h1>
          <p className="mt-6" style={{color:'rgba(255,255,255,.8)',maxWidth:640}}>
            Large-scale work in black & grey and color, designed with deliberate intent and crafted to harmonize with the body.
            Each piece is a lasting story, unique to its wearer.
          </p>
          <div className="mt-8" style={{display:'flex',gap:12}}>
            <Link href="/book" className="btn btn-primary">Book a Consultation</Link>
            <Link href="/available-designs" className="btn">Available Designs</Link>
          </div>
        </div>
        <script dangerouslySetInnerHTML={{__html:`(function(){var i=0;var s=[...document.querySelectorAll('.hero img')];setInterval(function(){s[i]?.classList.remove('active');i=(i+1)%s.length;s[i]?.classList.add('active');},5000);})();`}}/>
      </section>
      <section className="container" style={{padding:'48px 16px'}}>
        <h2 className="text-xl font-semibold mb-2">Recent Work</h2>
        <p style={{color:'rgba(255,255,255,.7)',maxWidth:640}}>Narrative imagery designed with intent — realism and surrealism tailored to your body.</p>
      </section>
    </main>
  )
}