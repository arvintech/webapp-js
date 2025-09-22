import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <Link href="/" className="flex items-center">
          <Image src="/arvintech-cube-logo.png" alt="ArvinTech Logo" width={200} height={50} className="h-24 w-auto" />
        </Link>
        <div className="flex space-x-8">
          <Link href="/support" className="text-white hover:text-gray-300 transition-colors">
            Support
          </Link>
          <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
            News
          </Link>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/work-with-us" className="text-gray-400 hover:text-white transition-colors">
            Work with Us
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4 text-balance">How can we help you?</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty">
            Get the support you need to amplify your mind with <span className="arvintech-brand">ArvinTech</span>'s
            innovative solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles, guides, or FAQs..."
              className="w-full px-6 py-4 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-md text-white transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Remote Support Section */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border border-emerald-500/30 rounded-lg p-8 mb-16 text-center">
          <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3">Need Immediate Remote Support?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let our technical experts connect directly to your computer to resolve issues quickly and efficiently. Our
            secure remote support tool allows us to assist you in real-time.
          </p>
          <a
            href="https://secure.logmein.com/pullinstall_go.asp?page=addacomputer3_pull&lang=en&c=twk9htfslmi85dguy6rtdobpimhzsqkv1tomysuf&bnf=undefined"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            Connect for Remote Support
          </a>
          <p className="text-sm text-gray-400 mt-4">Secure connection powered by LogMeIn • Available 24/7</p>
        </div>

        {/* Support Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:bg-slate-800/70 transition-all">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Getting Started</h3>
            <p className="text-gray-300 mb-4">
              Learn the basics of our AI-powered tools and get up and running quickly.
            </p>
            <Link href="#getting-started" className="text-emerald-400 hover:text-emerald-300 font-medium">
              View guides →
            </Link>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:bg-slate-800/70 transition-all">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Technical Support</h3>
            <p className="text-gray-300 mb-4">
              Get help with technical issues, troubleshooting, and advanced features.
            </p>
            <Link href="#technical" className="text-emerald-400 hover:text-emerald-300 font-medium">
              Get help →
            </Link>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-8 hover:bg-slate-800/70 transition-all">
            <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Contact Us</h3>
            <p className="text-gray-300 mb-4">
              Reach out to our support team for personalized assistance and feedback.
            </p>
            <Link href="#contact" className="text-emerald-400 hover:text-emerald-300 font-medium">
              Contact support →
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                How do I get started with <span className="arvintech-brand">ArvinTech</span>'s AI tools?
              </h3>
              <p className="text-gray-300">
                Getting started is easy! Simply create an account, choose your preferred AI application (IA Books,
                Reimagined Cliff Notes, AI Apps, or our Author Program), and follow our step-by-step onboarding guide.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                What makes <span className="arvintech-brand">ArvinTech</span>'s AI different from other solutions?
              </h3>
              <p className="text-gray-300">
                Our AI is specifically designed to amplify human intelligence rather than replace it. We focus on
                enhancing your natural abilities in learning, writing, and creative thinking through innovative
                applications.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">Do you offer training or tutorials?</h3>
              <p className="text-gray-300">
                Yes! We provide comprehensive tutorials, video guides, and live training sessions to help you maximize
                the potential of our AI tools. Check our learning resources section for more details.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-3">How can I contact support for urgent issues?</h3>
              <p className="text-gray-300">
                For urgent technical issues, you can reach our priority support team via email at support@
                <span className="arvintech-brand">ArvinTech</span>.com or through our live chat feature available 24/7
                for premium users.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Support
            </button>
            <button className="border border-slate-600 hover:border-slate-500 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
