import { Navigation } from "./modules/navigation"
import { Hero } from "./modules/hero"
import { Reviews } from "./modules/reviews"
import { WhoWeAre } from "./modules/whoWeAre"
import { CallOut } from "./modules/callOut"
import { AboutUs } from "./modules/aboutUs"
import { Footer } from "./modules/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Reviews />
      <WhoWeAre />
      <AboutUs />
      <CallOut />
      <Footer />
    </main>
  )
}
