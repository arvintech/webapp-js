"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import "@/styles/globals.css"
import Footer from "@/components/Footer"

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease"
      observer.observe(el)
    })

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/nvidia-blackwell-datacenter-night.jpg')",
        }}
      />
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="relative z-20 w-full px-8 py-6">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img src="/arvintech-cube-logo.png" alt="arvintech" className="h-24 w-auto" />
            </Link>
            <div className="flex space-x-8">
              <Link
                href="/support"
                className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Support
              </Link>
              <Link href="/about" className="text-white text-sm font-medium">
                About
              </Link>
              <Link
                href="/news"
                className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                News
              </Link>
              <Link
                href="/blog"
                className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Blog
              </Link>
              <Link
                href="/work-with-us"
                className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
              >
                Work with Us
              </Link>
            </div>
          </div>
        </nav>

        <div className="relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
          </div>

          <div className="relative z-10 text-center py-20 px-8">
            <div className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance font-poppins">arvintech</h1>
              <p className="text-2xl text-emerald-400 mb-8 font-light">
                An Innovative Attitude to AI—Collaboration, Not Replacement
              </p>
              <p className="text-lg text-slate-300 max-w-4xl mx-auto text-pretty">
                Unlearn to relearn. Measure intelligence by possibility. Prepare for new, exciting ways to live human
                lives amplified.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-8 py-16">
          {/* An Innovative Attitude to AI Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-8 relative">
              An Innovative Attitude to AI
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-emerald-500 rounded-full mt-4"></div>
            </h2>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                <span className="text-emerald-400 font-semibold">arvintech</span> represents a fundamental shift in how
                we approach artificial intelligence. We believe in collaboration, not replacement. Our philosophy
                centers on the courage to unlearn outdated paradigms and relearn new possibilities—measuring
                intelligence not by what machines can do alone, but by what humans and AI can achieve together.
              </p>
              <p>
                This is about possibility. This is about preparation. This is about discovering new, exciting ways to
                live human lives amplified. As a Bay Area-based IT consulting and digital innovation firm with a
                distributed support team in Manila, we don't just provide technology solutions—we forge partnerships
                that expand what it means to be human in an AI-enhanced world.
              </p>
              <p>
                Our approach combines the reliability of proven IT infrastructure with the transformative power of
                collaborative intelligence. Whether you're a growing business reimagining operational possibilities or
                an independent author exploring new creative frontiers, we partner with you to harness technology that
                amplifies your authentic vision while dramatically expanding your human potential.
              </p>
            </div>
          </div>

          {/* Core Offerings Section */}
          <div className="mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Core Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-1 w-full bg-emerald-500 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">Technology Consulting & Support</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    AI Model infrastructure strategic design
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Remote troubleshooting and systems administration
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Strategic technology roadmapping for SMBs
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Managed support and ongoing optimization
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-1 w-full bg-emerald-500 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Intelligence Amplification</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Custom AI integrations and workflow automations
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    WordPress and Next.js AI-powered plugins
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Business productivity amplifiers
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Decision-support dashboards and analytics
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-1 w-full bg-emerald-500 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">Digital Publishing & IP Development</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Author support tools and manuscript preparation
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Amazon KDP strategies and distribution
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Joint venture and IP buyout programs
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Interactive books and educational modules
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-1 w-full bg-emerald-500 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold text-white mb-4">Branding & Web Development</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Custom Next.js and WordPress websites
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Brand assets: logos, animations, pitch decks
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    AI-powered user engagement features
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">▸</span>
                    Landing pages optimized for conversion
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 md:p-12 mb-16 text-center animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-6">The Philosophy of Amplified Living</h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-4xl mx-auto">
              Intelligence isn't about replacement—it's about collaboration. It's the unlearning to relearn. It's
              measuring not what AI can do for you, but what you can become with AI as your partner in possibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">Collaboration Over Replacement</h4>
                <p className="text-emerald-100 text-sm">
                  We believe in human-AI partnerships where intelligence is multiplied, not substituted. Your creativity
                  remains uniquely yours—amplified.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">Unlearn to Relearn</h4>
                <p className="text-emerald-100 text-sm">
                  Breaking free from limiting beliefs about what's possible, we embrace the courage to reimagine how
                  intelligence can be measured and applied.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">Possibility-Centered</h4>
                <p className="text-emerald-100 text-sm">
                  We don't just solve problems—we expand horizons, preparing you for new and exciting ways to live your
                  human life amplified.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-3">Preparation for Tomorrow</h4>
                <p className="text-emerald-100 text-sm">
                  Strategic positioning for an AI-enhanced future where human potential is boundless and collaboration
                  unlocks unprecedented possibilities.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-16 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-8 relative">
              Why Choose arvintech as Your Intelligence Amplification Partner?
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-emerald-500 rounded-full mt-4"></div>
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Distributed Excellence</h3>
                <p className="text-slate-300 leading-relaxed">
                  Our Bay Area innovation hub drives strategic vision and cutting-edge development, while our Manila
                  support team ensures 24/7 operational excellence and cost-effective scalability. This global approach
                  delivers Silicon Valley innovation with worldwide efficiency.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Risk-Sharing Partnerships</h3>
                <p className="text-slate-300 leading-relaxed">
                  Unlike traditional IT vendors, we offer joint venture models and shared-risk approaches, especially in
                  our digital publishing and IP development services. Your success becomes our success, creating true
                  alignment and partnership.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Holistic Integration</h3>
                <p className="text-slate-300 leading-relaxed">
                  We seamlessly blend traditional IT reliability with innovative AI capabilities, ensuring your entire
                  technology ecosystem works as one cohesive Intelligence Amplification platform. No siloed
                  solutions—just integrated excellence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-emerald-400 mb-3">Proven Expertise Across Industries</h3>
                <p className="text-slate-300 leading-relaxed">
                  From small business operations to independent author success stories, we've helped diverse clients
                  amplify their potential through strategic technology integration. Our experience spans traditional IT,
                  emerging AI, and creative industries.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-slate-800/50 rounded-2xl p-8 md:p-12 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Amplify Your Potential?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
              Let's explore how our Intelligence Amplification approach can transform your business, creative projects,
              or operational efficiency.
            </p>
            <Link
              href="/support"
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg"
            >
              Start Your Amplification Journey
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}
