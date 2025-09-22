"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import Footer from "@/components/Footer"

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business Intelligence",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing data analysis and decision-making processes in modern enterprises.",
      author: "Dr. Sarah Chen",
      date: "December 15, 2024",
      category: "AI & Technology",
      readTime: "8 min read",
      image: "/ai-business-intelligence-dashboard.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable Cloud Infrastructure",
      excerpt: "Best practices for designing and implementing cloud solutions that grow with your business needs.",
      author: "Michael Rodriguez",
      date: "December 12, 2024",
      category: "Cloud Computing",
      readTime: "6 min read",
      image: "/cloud-infrastructure-servers.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      excerpt: "Real-world case studies of companies that successfully navigated their digital transformation journey.",
      author: "Jennifer Park",
      date: "December 10, 2024",
      category: "Digital Strategy",
      readTime: "10 min read",
      image: "/digital-transformation-office.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "Cybersecurity in the Age of Remote Work",
      excerpt:
        "Essential security measures and best practices for protecting your organization in a distributed workforce.",
      author: "Alex Thompson",
      date: "December 8, 2024",
      category: "Security",
      readTime: "7 min read",
      image: "/cybersecurity-remote-work.png",
      featured: false,
    },
    {
      id: 5,
      title: "Machine Learning for Small Businesses",
      excerpt: "How small and medium enterprises can leverage machine learning to compete with larger corporations.",
      author: "Dr. Sarah Chen",
      date: "December 5, 2024",
      category: "AI & Technology",
      readTime: "9 min read",
      image: "/machine-learning-small-business.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "The Evolution of Web Development",
      excerpt: "From static HTML to modern frameworks: a journey through the changing landscape of web development.",
      author: "David Kim",
      date: "December 3, 2024",
      category: "Web Development",
      readTime: "5 min read",
      image: "/web-development-coding.png",
      featured: false,
    },
  ]

  const categories = ["All", "AI & Technology", "Cloud Computing", "Digital Strategy", "Security", "Web Development"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.1),transparent_50%)]" />

      {/* Navigation */}
      <nav className="relative z-20 w-full px-8 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/arvintech-cube-logo.png"
              alt="ArvinTech Logo"
              width={120}
              height={40}
              className="h-24 w-auto"
            />
          </Link>
          <div className="flex space-x-8">
            <Link href="/support" className="text-slate-300 hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/news" className="text-slate-300 hover:text-white transition-colors">
              News
            </Link>
            <Link href="/blog" className="text-white font-medium">
              Blog
            </Link>
            <Link href="/work-with-us" className="text-slate-300 hover:text-white transition-colors">
              Work with Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 px-8">
        <div className={`transition-all duration-1000 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance font-poppins">
            <span className="arvintech-brand">ArvinTech</span> Blog
          </h1>
          <p className="text-2xl text-emerald-400 mb-8 font-light">Insights, Innovation, and Intelligence</p>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto text-pretty">
            Stay ahead of the curve with expert insights on AI, technology trends, and digital transformation strategies
            from our team of industry professionals.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="relative z-10 px-8 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white backdrop-blur-sm"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && (
        <section className="relative z-10 px-8 mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Article</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 group">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-emerald-400 text-sm font-medium">{featuredPost.category}</span>
                    <span className="text-slate-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-slate-300 mb-6 text-pretty">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-sm">
                          {featuredPost.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{featuredPost.author}</p>
                        <p className="text-slate-400 text-sm">{featuredPost.date}</p>
                      </div>
                    </div>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === "All" ? regularPosts : filteredPosts).map((post, index) => (
              <article
                key={post.id}
                className={`bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 group ${
                  isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-48">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-slate-400 text-sm">{post.readTime}</span>
                    <span className="text-slate-400 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 mb-4 text-sm text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-medium text-xs">
                          {post.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="text-slate-400 text-sm">{post.author}</span>
                    </div>
                    <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="relative z-10 px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm rounded-2xl border border-emerald-500/20 p-12">
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-slate-300 mb-8 text-pretty">
              Subscribe to our newsletter and never miss the latest insights on AI, technology, and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
