"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function WorkWithUs() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-poppins">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 relative z-10">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/arvintech-logo-white.png" alt="arvintech" width={40} height={40} className="rounded-lg" />
          <span className="arvintech-brand text-white text-xl font-bold">arvintech</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link
            href="/support"
            className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
            Support
          </Link>
          <Link
            href="/about"
            className="text-slate-300 hover:text-white transition-colors duration-300 text-sm font-medium"
          >
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
            Blogs
          </Link>
          <Link
            href="/work-with-us"
            className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 text-sm font-medium"
          >
            Work with Us
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-6 py-20 text-center">
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Work with <span className="text-emerald-400">us</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            You were never meant to be replaced. We're collaborating with industry leaders to deliver exceptional
            solutions.
          </p>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-200 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why Work with arvintech?</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              We're not just another tech company. We're pioneers in Intelligence Amplification, creating a workplace
              where human creativity meets AI innovation.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-emerald-400 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
              <p className="text-slate-300">
                Work on cutting-edge AI projects that push the boundaries of what's possible while keeping humans at the
                center of every solution.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-emerald-400 text-3xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration Culture</h3>
              <p className="text-slate-300">
                Join a team that values diverse perspectives and believes that the best solutions come from human-AI
                collaboration, not competition.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <div className="text-emerald-400 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Growth & Learning</h3>
              <p className="text-slate-300">
                Continuous learning opportunities with access to the latest AI tools and technologies to amplify your
                skills and career potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Producer Position Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            className={`bg-gradient-to-r from-emerald-600/20 to-emerald-400/20 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/30 transition-all duration-1000 delay-600 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Producer Position - Walla Walla, WA</h2>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm">Full-time</span>
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">On-site</span>
                  <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm">Walla Walla, WA</span>
                </div>
              </div>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 mt-4 md:mt-0">
                Apply Today
              </button>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              We're seeking a talented copywriter with a passion for classical literature to join our team. This unique
              role combines traditional literary expertise with cutting-edge AI tools to create compelling content that
              bridges human creativity and artificial intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4 text-lg">What We're Looking For:</h3>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Strong background in classical literature
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Excellent writing and communication skills
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Interest in AI and emerging technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Willingness to relocate to Walla Walla, WA
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h3 className="text-white font-semibold mb-4 text-lg">What You'll Do:</h3>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Develop AI-enhanced content strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Create compelling narratives for our clients
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    Research and integrate classical literary techniques
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-600/10 to-emerald-400/5 backdrop-blur-sm rounded-xl p-8 border border-emerald-400/20 shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                  <span className="text-emerald-400 mr-3 text-3xl">⚡</span>
                  How You'll Be Amplified
                </h3>
                <p className="text-slate-400 text-sm">Unlock your potential with cutting-edge tools and mentorship</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-emerald-400 text-sm">🛠️</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Access to cutting-edge AI writing tools</h4>
                      <p className="text-slate-400 text-sm">Latest AI technologies at your fingertips</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-emerald-400 text-sm">👥</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Mentorship from industry veterans</h4>
                      <p className="text-slate-400 text-sm">Learn from experienced professionals</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-emerald-400 text-sm">🎨</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Creative freedom to blend tradition with innovation
                      </h4>
                      <p className="text-slate-400 text-sm">Balance classical techniques with modern AI</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-emerald-400 text-sm">🚀</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Pioneer the future as a leader in AI-amplified literary creation
                      </h4>
                      <p className="text-slate-400 text-sm">Shape the future of AI-enhanced writing</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 bg-white/5 rounded-lg border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-600/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-emerald-400 text-sm">👑</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">
                        Establish yourself as a visionary leader in AI-enhanced literature
                      </h4>
                      <p className="text-slate-400 text-sm">Build your reputation as an industry pioneer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Walla Walla Section */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-800 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Discover Walla Walla, WA</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Whether you're local or considering a move, Walla Walla offers the perfect blend of small-town charm and
              big opportunities.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-emerald-400 mr-3">🏠</span>
                For Locals
              </h3>
              <ul className="text-slate-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Exceptional home-grown career opportunity
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Work with a forward-thinking team in your backyard
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Be part of putting Walla Walla on the tech map
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-emerald-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="text-emerald-400 mr-3">✈️</span>
                For Relocators
              </h3>
              <ul className="text-slate-300 space-y-3">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Discover tranquility and peace in wine country
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Experience authentic Americana in a charming college town
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Enjoy affordable living with big-city innovation
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Four-season beauty with outdoor recreation at your doorstep
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Amplification Philosophy */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 delay-1200 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Philosophy: Intelligence Amplification</h2>
            <p className="text-slate-300 text-lg">
              At the heart of everything we do is the belief that AI should amplify human intelligence, not replace it.
            </p>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-1400 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-emerald-400 text-3xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">Human-Centered Design</h3>
              <p className="text-slate-300">
                Every solution we create starts with understanding human needs, capabilities, and aspirations.
                Technology serves humanity, not the other way around.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-emerald-400 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">Amplified Potential</h3>
              <p className="text-slate-300">
                We believe in augmenting human capabilities rather than automating them away. Our AI tools make people
                more creative, more productive, and more fulfilled.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-emerald-400 text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">Ethical AI Development</h3>
              <p className="text-slate-300">
                We're committed to developing AI systems that are transparent, fair, and aligned with human values.
                Ethics isn't an afterthought—it's built into our process from day one.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="text-emerald-400 text-3xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">Continuous Innovation</h3>
              <p className="text-slate-300">
                The field of AI is rapidly evolving, and so are we. We foster a culture of continuous learning and
                experimentation to stay at the forefront of Intelligence Amplification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-6 py-16">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 delay-1600 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to amplify your literary talents?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Join us in building a future where human creativity and AI innovation work together to create something
            extraordinary.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
            Apply Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <div className="space-y-2">
                <Link href="/about" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/work-with-us" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/news" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  News
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Resources</h3>
              <div className="space-y-2">
                <Link href="/blog" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
                <Link href="/support" className="block text-slate-400 hover:text-white transition-colors text-sm">
                  Support
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <div className="text-slate-400 text-sm space-y-2">
                <p>Walla Walla, WA</p>
                <p>careers@arvintech.com</p>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2025 <span className="arvintech-brand font-semibold">arvintech</span>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
