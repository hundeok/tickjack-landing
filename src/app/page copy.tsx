'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// HypeChimp Constants
const NAVIGATION_ITEMS = [
  { name: 'Problem', href: '#problems' },
  { name: 'Solution', href: '#solution' },
  { name: 'Features', href: '#features' },
  { name: 'For You', href: '#target' },
  { name: 'Download', href: '#download' }
];

const SOCIAL_PLATFORMS = [
  { name: 'r/wallstreetbets', symbol: 'WSB', color: 'from-purple-500 to-violet-500' },
  { name: 'r/stocks', symbol: 'STKS', color: 'from-orange-500 to-amber-500' },
  { name: 'r/CryptoCurrency', symbol: 'CRPT', color: 'from-purple-600 to-pink-500' },
  { name: 'Polymarket', symbol: 'POLY', color: 'from-blue-500 to-cyan-500' },
  { name: 'Bitcoin', symbol: 'BTC', color: 'from-orange-400 to-yellow-500' },
  { name: 'Ethereum', symbol: 'ETH', color: 'from-purple-400 to-indigo-500' }
];

const PROBLEMS = [
  "Too much noise",
  "Can't find real signals",
  "FOMO decisions",
  "Scattered information",
  "No data validation",
  "Emotional trading"
];

const DASHBOARD_FEATURES = [
  {
    title: "Hype Score",
    value: "94.3%",
    change: "+18.2%",
    icon: "🔥",
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "Prediction Odds",
    value: "Real-time",
    change: "+99.9%",
    icon: "🎯",
    color: "from-purple-500 to-violet-500"
  },
  {
    title: "Signal Strength",
    value: "+87.4%",
    change: "+12.8%",
    icon: "📊",
    color: "from-pink-500 to-rose-500"
  }
];

const MAIN_FEATURES = [
  {
    icon: "🔥",
    gradient: "from-orange-500 to-amber-500",
    title: "Real-Time Hype Tracking",
    description: "Capture the most talked-about trends from Reddit's active investing communities like r/wallstreetbets, r/stocks, and r/CryptoCurrency. See what's actually buzzing right now."
  },
  {
    icon: "🎯",
    gradient: "from-purple-500 to-violet-500",
    title: "Prediction Odds Cross-Reference",
    description: "Instantly compare the Hype against live data from prediction markets like Polymarket. See the actual probability (the Odds) of a trend succeeding, based on where real money is."
  },
  {
    icon: "🐵",
    gradient: "from-pink-500 to-rose-500",
    title: "Filter the Noise",
    description: "Get insights based on actual probabilities, not just social buzz. HypeChimp cuts through the chaos and shows you what really matters."
  },
  {
    icon: "📈",
    gradient: "from-purple-600 to-indigo-500",
    title: "Make Data-Driven Decisions",
    description: "We bring scattered information into one place to help you make smarter investment choices. Where Hype meets Odds, you'll find the signal."
  }
];

const TARGET_USERS = [
  {
    icon: "🎮",
    gradient: "from-purple-500 to-violet-500",
    title: "Reddit Traders",
    description: "Active members of r/wallstreetbets and investing subreddits who want to validate social trends with real data"
  },
  {
    icon: "🪙",
    gradient: "from-orange-500 to-amber-500",
    title: "Crypto Investors",
    description: "Digital asset traders seeking to separate genuine market signals from social media noise"
  },
  {
    icon: "📊",
    gradient: "from-pink-500 to-rose-500",
    title: "Data-Driven Investors",
    description: "Smart traders who understand that the best opportunities lie where social hype meets probability data"
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Components
function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      style={{
        background: "rgba(123, 104, 238, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(155, 143, 238, 0.2)"
      }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/icon.png" 
                alt="HypeChimp Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl blur opacity-30"></div>
          </div>
          <div>
            <span className="text-white text-2xl font-bold">HypeChimp</span>
            <span className="text-purple-200 text-sm ml-2">Hype + Odds</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-purple-200 hover:text-white transition-colors duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        
        <motion.button
          className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 179, 71, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          Download
        </motion.button>
      </nav>
    </motion.header>
  );
}

function HeroSection({ heroScale, heroOpacity }) {
  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ 
        scale: heroScale,
        opacity: heroOpacity 
      }}
    >
      <div className="text-center z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              className="w-16 h-16 relative"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/icon.png" 
                  alt="HypeChimp Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            So much noise on social media.<br />
            <span className="text-3xl md:text-5xl lg:text-6xl" style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed, #6366f1)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              What's a real signal?
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            HypeChimp answers this question with data. Connect market "Hype" with "Odds" (prediction probabilities).
          </p>
          
          <div className="text-xl md:text-2xl font-semibold text-white mb-12">
            Discover where <span style={{color: "#a855f7"}} className="font-bold">Hype</span> becomes <span style={{color: "#fb923c"}} className="font-bold">Odds</span>.
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Download HypeChimp
            </motion.button>
            <motion.button 
              className="text-white px-10 py-4 rounded-xl text-lg font-semibold border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              See How It Works
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating social platforms */}
      {SOCIAL_PLATFORMS.map((platform, index) => (
        <motion.div
          key={platform.name}
          className="absolute"
          style={{
            left: `${15 + (index * 12)}%`,
            top: `${20 + (index % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: index * 0.5
          }}
        >
          <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl opacity-30`}>
            {platform.symbol}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

function ProblemsSection({ problemScale, problemOpacity }) {
  return (
    <motion.section 
      id="problems"
      className="min-h-screen flex items-center justify-center relative py-20"
      style={{
        scale: problemScale,
        opacity: problemOpacity
      }}
    >
      <div className="text-center max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Sound Familiar?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-orange-400 text-2xl mb-3 block">❌</span>
              <p className="text-white font-semibold">{problem}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
function SolutionSection({ solutionScale, solutionOpacity }, ref) {
  return (
    <section ref={ref} id="solution" className="flex items-center justify-center relative py-24">
      <motion.div
        className="text-center max-w-6xl mx-auto px-6"
        style={{
          scale: solutionScale,
          opacity: solutionOpacity
        }}
      >
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-12">
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "linear-gradient(45deg, rgba(168, 85, 247, 0.3), rgba(124, 58, 237, 0.3))",
                "linear-gradient(135deg, rgba(124, 58, 237, 0.3), rgba(99, 102, 241, 0.3))",
                "linear-gradient(225deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              borderRadius: "50%",
              filter: "blur(40px)"
            }}
          />
          
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="/icon.png" 
                alt="HypeChimp Logo" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          Connect <span style={{
            background: "linear-gradient(135deg, #a855f7, #7c3aed)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Hype + Odds</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          HypeChimp is a signal aggregator that connects market "Hype" (social trends)<br />
          with "Odds" (prediction probabilities). Filter the noise with data.
        </p>
      </motion.div>
    </section>
  );
}

const SolutionSectionForward = React.forwardRef(SolutionSection);

function FeaturesSection({ dashboardY, dashboardScale }, ref) {
  return (
    <section ref={ref} id="features" className="min-h-screen flex items-center justify-center relative py-20">
      <motion.div
        className="w-full max-w-7xl mx-auto px-6"
        style={{ y: dashboardY, scale: dashboardScale }}
      >
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Features
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Where social trends meet prediction markets
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl p-8 shadow-2xl mb-16 border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {DASHBOARD_FEATURES.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl relative overflow-hidden h-48 border border-purple-500/20 bg-purple-500/10 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                viewport={{ once: false }}
              >
                <div className="relative z-10 p-6 flex flex-col h-full">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 text-2xl`}>{item.icon}</div>
                  <div className="mt-auto">
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-bold text-white">{item.value}</span>
                      <span className="text-purple-400 font-semibold">{item.change}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50 z-20">
                  <motion.div 
                    className="w-full h-full bg-gradient-to-r from-purple-400 to-violet-400" 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-xl p-6 border border-purple-500/20 bg-purple-500/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">Live Signal Dashboard</h3>
            <div className="h-64 bg-gradient-to-r from-purple-500/10 to-violet-500/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-slate-400 text-lg">Hype + Odds Tracker</div>
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-2 bg-gradient-to-t from-purple-500 to-violet-500 rounded-full" 
                  style={{ left: `${20 + i * 15}%`, bottom: '20%' }} 
                  animate={{ height: [`${30 + Math.random() * 40}%`, `${20 + Math.random() * 50}%`] }} 
                  transition={{ duration: 2 + Math.random() * 2, repeat: Infinity, repeatType: "reverse" }} 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {MAIN_FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-8 transition-all duration-500 relative overflow-hidden border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02, boxShadow: "0 30px 60px rgba(168, 85, 247, 0.3)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6`}>
                  <span className="text-white text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

const FeaturesSectionForward = React.forwardRef(FeaturesSection);

function TargetSection() {
  return (
    <section id="target" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Built For You
          </h2>
        </motion.div>
        
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {TARGET_USERS.map((target, index) => (
            <motion.div
              key={index}
              className="text-center rounded-2xl p-8 transition-all duration-500 relative overflow-hidden border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-r ${target.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white text-4xl">{target.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{target.title}</h3>
                <p className="text-slate-300">{target.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="download" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          className="rounded-3xl p-12 border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              background: "linear-gradient(45deg, #a855f7, #7c3aed, #6366f1)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Download HypeChimp<br />
            Discover Where Hype Becomes Odds
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Stop guessing. Start tracking real signals from Reddit communities<br />
            and prediction markets. Make smarter investment choices with data.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-violet-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              📱 App Store
            </motion.button>
            
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(255, 179, 71, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              🤖 Google Play
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: ["Hype Tracking", "Prediction Odds", "Signal Dashboard", "API Access"]
    },
    {
      title: "Support",
      links: ["User Guide", "Help Center", "FAQ", "Developer Docs"]
    },
    {
      title: "Community",
      links: ["Twitter", "Reddit", "Discord", "Blog"]
    }
  ];

  return (
    <motion.footer 
      className="relative z-10 px-6 py-16 border-t border-purple-500/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="grid md:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/icon.png" 
                  alt="HypeChimp Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white text-xl font-bold">HypeChimp</span>
                <span className="text-purple-200 text-sm ml-2">Hype + Odds</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Connect social trends<br />
              with prediction probabilities
            </p>
          </motion.div>
          
          {footerSections.map((section) => (
            <motion.div key={section.title} variants={fadeInUp}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3 text-slate-400">
                {section.links.map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="border-t border-purple-500/20 mt-12 pt-8 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">&copy; 2025 HypeChimp. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <motion.a 
              href="/terms" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              Terms of Service
            </motion.a>
            <span>|</span>
            <motion.a 
              href="/privacy" 
              className="hover:text-white transition-colors"
              whileHover={{ y: -1 }}
            >
              Privacy Policy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

// Main Landing Component
export default function HypeChimpLanding() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const solutionRef = useRef(null);
  const { scrollYProgress: solutionScrollProgress } = useScroll({
    target: solutionRef,
    offset: ["start end", "center center"] 
  });

  const featuresRef = useRef(null);
  const { scrollYProgress: featuresScrollProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "start center"]
  });

  // Scroll-based transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.9]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.3]);
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const problemScale = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);
  const problemOpacity = useTransform(scrollYProgress, [0.15, 0.25], [1, 0]);

  const solutionScale = useTransform(solutionScrollProgress, [0, 1], [0.8, 1]);
  const solutionOpacity = useTransform(solutionScrollProgress, [0, 1], [0, 1]);
  
  const dashboardY = useTransform(featuresScrollProgress, [0, 1], ['30%', '0%']);
  const dashboardScale = useTransform(featuresScrollProgress, [0, 1], [0.9, 1]);
  
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#1a0f2e", "#2d1b4e", "#3d2a5f", "#1a0f2e"]
  );

  return (
    <div ref={containerRef} className="relative">
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(135deg, #a855f7 0%, #7c3aed 50%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-30px) rotate(180deg);
            opacity: 0.5;
          }
        }
        
        .floating-bg {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes pulse-hype {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        .hype-float {
          animation: pulse-hype 3s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic background */}
      <motion.div 
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: bgColor }}
      />

      {/* Parallax background */}
      <motion.div 
        className="fixed inset-0 pointer-events-none overflow-hidden -z-5"
        style={{ y: backgroundY }}
      >
        <div className="floating-bg absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-violet-500/20 rounded-full filter blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-bg absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
      </motion.div>

      <Header />
      
      <HeroSection 
        heroScale={heroScale} 
        heroOpacity={heroOpacity} 
      />
      
      <ProblemsSection 
        problemScale={problemScale} 
        problemOpacity={problemOpacity} 
      />
      
      <SolutionSectionForward
        ref={solutionRef}
        solutionScale={solutionScale} 
        solutionOpacity={solutionOpacity} 
      />
      
      <FeaturesSectionForward
        ref={featuresRef}
        dashboardY={dashboardY} 
        dashboardScale={dashboardScale} 
      />
      
      <TargetSection />
      
      <CTASection />

      <Footer />
    </div>
  );
}