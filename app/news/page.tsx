"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function NewsPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Sample news articles data
  const featuredArticle = {
    id: 1,
    title: "ArvinTech Launches Revolutionary AI-Powered Business Intelligence Platform",
    excerpt:
      "Our latest innovation combines machine learning with human expertise to deliver unprecedented insights for enterprise decision-making.",
    date: "December 15, 2024",
    category: "Product Launch",
    image: "/ai-business-intelligence-dashboard.jpg",
    readTime: "5 min read",
  }

  const newsArticles = [
    {
      id: 2,
      title: "The Future of Human-AI Collaboration in Enterprise",
      excerpt:
        "Exploring how artificial intelligence amplifies human capabilities rather than replacing them in modern business environments.",
      date: "December 12, 2024",
      category: "Industry Insights",
      readTime: "3 min read",
    },
    {
      id: 3,
      title: "ArvinTech Partners with Leading Universities for AI Research",
      excerpt:
        "New collaboration aims to advance ethical AI development and create next-generation intelligent systems.",
      date: "December 10, 2024",
      category: "Partnerships",
      readTime: "4 min read",
    },
    {
      id: 4,
      title: "Digital Transformation Success Stories: Client Spotlight",
      excerpt:
        "How our intelligence amplification solutions helped Fortune 500 companies achieve 300% productivity gains.",
      date: "December 8, 2024",
      category: "Case Studies",
      readTime: "6 min read",
    },
    {
      id: 5,
      title: "Cybersecurity in the Age of AI: Best Practices",
      excerpt: "Essential security considerations when implementing AI systems in enterprise environments.",
      date: "December 5, 2024",
      category: "Security",
      readTime: "4 min read",
    },
    {
      id: 6,
      title: "ArvinTech Wins 'Innovation of the Year' Award",
      excerpt: "Recognition for our groundbreaking work in human-centric artificial intelligence solutions.",
      date: "December 1, 2024",
      category: "Awards",
      readTime: "2 min read",
    },
  ]

  const categories = [
    "All",
    "Product Launch",
    "Industry Insights",
    "Partnerships",
    "Case Studies",
    "Security",
    "Awards",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />

      {/* Navigation */}
      <nav className="relative z-20 w-full px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/arvintech-logo-white.png"
              alt="ArvinTech Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <div className="flex space-x-8">
            <Link href="/support" className="text-slate-300 hover:text-white transition-colors duration-300">
              Support
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors duration-300">
              About
            </Link>
            <Link href="/news" className="text-white font-medium">
              News
            </Link>
            <Link href="/blogs" className="text-slate-300 hover:text-white transition-colors duration-300">
              Blogs
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-20 px-8">
        <div className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance font-poppins">
            Latest News & Updates
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto text-pretty">
            Stay informed about <span className="arvintech-brand">ArvinTech</span>'s latest innovations, industry
            insights, and company milestones
          </p>
        </div>
      </div>

      {/* Featured Article */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-16">
        <div className={`transition-all duration-1000 delay-300 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredArticle.image || "/placeholder.svg"}
                  alt={featuredArticle.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-slate-400 text-sm">{featuredArticle.category}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">{featuredArticle.title}</h2>
                <p className="text-slate-300 mb-6 text-pretty">{featuredArticle.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>
                  <button className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all duration-300 hover:scale-105">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 mb-12">
        <div className={`transition-all duration-1000 delay-500 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? "bg-emerald-600 text-white"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article, index) => (
            <div
              key={article.id}
              className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${700 + index * 100}ms` }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-balance group-hover:text-emerald-400 transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-300 mb-6 text-pretty flex-grow">{article.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <button className="text-emerald-400 hover:text-emerald-300 transition-colors duration-300 font-medium">
                    Read →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="relative z-10 max-w-4xl mx-auto px-8 pb-20">
        <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-6">
              Subscribe to our newsletter for the latest news, insights, and product updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
