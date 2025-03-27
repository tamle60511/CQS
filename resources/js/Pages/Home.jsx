import CallToAction from '@/Components/Home/CallToAction'
import CoreValues from '@/Components/Home/CoreValues'
import EmailSubscription from '@/Components/Home/EmailSubscription'
import GlobalReach from '@/Components/Home/GlobalReach'
import Hero from '@/Components/Home/Hero'
import IndustriesSection from '@/Components/Home/IndustriesSection'
import MetalsSection from '@/Components/Home/MetalsSection'
import NewsResources from '@/Components/Home/NewsResources'
import OneStopService from '@/Components/Home/OneStopService'
import Layout from '@/Components/Layout/Layout'
import React from 'react'

function Home() {

  return (
    <>
    <Layout>
        <Hero />
        <CoreValues />
        <MetalsSection />
        <NewsResources />
        <IndustriesSection />
        <OneStopService />
        <GlobalReach />
        <CallToAction />
        <EmailSubscription />
    </Layout>
    </>
  )
}

export default Home
