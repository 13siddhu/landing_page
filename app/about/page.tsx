"use client"

import AboutHero from '@/components/about/AboutHero'
import BuiltForSection from '@/components/about/BuiltForSection'
import PhilosophySection from '@/components/about/PhilosophySection'
import SuccessMetricsSection from '@/components/about/SuccessSection'
import WhyNovaSection from '@/components/about/WhyNovaSection'



const page = () => {
  return (
    <div className='bg-linear-to-br from-slate-950 via-blue-950 to-slate-900'>
      <AboutHero />
      <PhilosophySection />
      <BuiltForSection />
      <WhyNovaSection />
      <SuccessMetricsSection />
    </div>
  )
}

export default page
