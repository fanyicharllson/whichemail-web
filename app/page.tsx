import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { SecuritySection } from "@/components/landing/security-section"
import { AboutSection } from "@/components/landing/about-section"
import { CTASection } from "@/components/landing/cta-section"
import { Header } from "@/components/landing/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <AboutSection />
      <CTASection />
    </main>
  )
}
