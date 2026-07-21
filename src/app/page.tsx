// @ts-nocheck
'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

// TickJack Constants
const NAVIGATION_ITEMS = [
  { name: '문제점', href: '#problems' },
  { name: '솔루션', href: '#solution' },
  { name: '주요 기능', href: '#features' },
  { name: '타겟 사용자', href: '#target' },
  { name: '다운로드', href: '#download' }
];

const INVESTMENT_ASSETS = [
  { name: 'Apple', symbol: 'AAPL', color: 'from-cyan-500 to-blue-500' },
  { name: 'Tesla', symbol: 'TSLA', color: 'from-red-500 to-rose-500' },
  { name: 'Microsoft', symbol: 'MSFT', color: 'from-blue-500 to-cyan-500' },
  { name: 'Google', symbol: 'GOOGL', color: 'from-purple-500 to-violet-500' },
  { name: 'Amazon', symbol: 'AMZN', color: 'from-orange-500 to-amber-500' },
  { name: 'NVIDIA', symbol: 'NVDA', color: 'from-lime-500 to-cyan-500' }
];

const PROBLEMS = [
  "지루한 모의투자",
  "복잡한 경제 지표", 
  "어려운 용어들",
  "재미없는 차트",
  "실전 트레이딩의 두려움",
  "게임처럼 즐길 수 없는 투자"
];

const DASHBOARD_FEATURES = [
  {
    title: "실시간 차트 게임",
    value: "1,247 Pts",
    change: "+15.7%",
    icon: "🎮",
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "가상 마진 트레이딩", 
    value: "100x",
    change: "+127.3%",
    icon: "⚡",
    color: "from-indigo-500 to-cyan-500"
  },
  {
    title: "랭킹 시스템",
    value: "Top 1%", 
    change: "🏆",
    icon: "📈",
    color: "from-blue-500 to-cyan-600"
  }
];

const MAIN_FEATURES = [
  {
    icon: "🎮",
    gradient: "from-cyan-500 to-blue-500",
    title: "게임처럼 즐기는 트레이딩",
    description: "복잡한 분석 없이 직관적인 UI로 캔들 차트를 예측하고 베팅하세요. 트레이딩이 짜릿한 게임이 됩니다."
  },
  {
    icon: "⚡",
    gradient: "from-indigo-500 to-cyan-500", 
    title: "안전한 가상 자산으로 실전 연습",
    description: "실제 돈을 잃을 걱정 없이 마진 거래와 청산의 짜릿함을 경험해보세요. 무한한 가상 자산으로 도전하세요."
  },
  {
    icon: "🏆", 
    gradient: "from-blue-500 to-cyan-600",
    title: "숨막히는 랭킹 경쟁",
    description: "전 세계 플레이어들과 수익률을 겨루고 최고의 트레이더 자리에 오르세요. 당신의 실력을 증명할 시간입니다."
  },
  {
    icon: "🚀",
    gradient: "from-lime-500 to-cyan-500",
    title: "실시간 시장 데이터 연동", 
    description: "실제 암호화폐 시장 데이터를 바탕으로 더욱 생동감 넘치는 트레이딩을 즐기세요. 현실과 게임이 만납니다."
  }
];

const TARGET_USERS = [
  {
    icon: "🌱",
    gradient: "from-cyan-500 to-indigo-500",
    title: "트레이딩 입문자",
    description: "투자를 처음 시작하며 가벼운 마음으로 감을 잡고 싶은 분들을 위한 최적의 놀이터"
  },
  {
    icon: "🕹️",
    gradient: "from-indigo-500 to-cyan-500", 
    title: "캐주얼 게이머",
    description: "차트를 보며 짜릿한 타이밍 게임과 예측의 묘미를 즐기고 싶은 게임 마니아"
  },
  {
    icon: "🔥",
    gradient: "from-blue-500 to-cyan-600",
    title: "모의투자 유저",
    description: "딱딱하고 지루한 기존의 모의투자가 지겨워진 예비 트레이더"
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
        background: "rgba(15, 23, 42, 0.9)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(56, 189, 248, 0.2)"
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
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
              <img 
                src="/tickjack_landing_icon.png" 
                alt="TickJack 로고" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-30"></div>
          </div>
          <div>
            <span className="text-white text-2xl font-bold">TickJack</span>
            <span className="text-cyan-200 text-sm ml-2">Where Real Traders Play</span>
          </div>
        </motion.div>
        
        <div className="hidden md:flex items-center space-x-8">
          {NAVIGATION_ITEMS.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-cyan-200 hover:text-white transition-colors duration-300"
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
          className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          App Store
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
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/tickjack_landing_icon.png" 
                  alt="TickJack 로고" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            지루한 트레이딩은 그만!<br />
            <span className="text-3xl md:text-5xl lg:text-6xl" style={{
              background: "linear-gradient(135deg, #06b6d4, #3b82f6, #4f46e5)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              이제 게임으로 짜릿하게 즐겨보세요
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            복잡한 차트와 어려운 경제 지표에 지치셨나요? 잃을 걱정 없이 안전하게 즐기는 실전 모의투자 게임!
          </p>
          
          <div className="text-xl md:text-2xl font-semibold text-white mb-12">
            <span style={{color: "#06b6d4"}} className="font-bold">TickJack</span>과 함께 진짜 게임을 시작하세요.
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              지금 바로 다운로드
            </motion.button>
            <motion.button 
              className="text-white px-10 py-4 rounded-xl text-lg font-semibold border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              데모 체험하기
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating investment assets */}
      {INVESTMENT_ASSETS.map((asset, index) => (
        <motion.div
          key={asset.name}
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
          <div className={`w-16 h-16 bg-gradient-to-r ${asset.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-xl opacity-30`}>
            {asset.symbol}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}

function ProblemsSection({ problemScale, problemOpacity }) {
  return (
    <motion.section 
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
          이런 고민들, 혹시 익숙하신가요?
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-red-500/30 bg-red-500/10 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="text-red-400 text-2xl mb-3 block">❌</span>
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
                "linear-gradient(45deg, rgba(6, 182, 212, 0.3), rgba(16, 185, 129, 0.3))",
                "linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.3))",
                "linear-gradient(225deg, rgba(5, 150, 105, 0.3), rgba(6, 182, 212, 0.3))"
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
            <div className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden">
              <img 
                src="/tickjack_landing_icon.png" 
                alt="TickJack 로고" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
          모든 차트를 <span style={{
            background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>게임처럼</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          리얼타임 시장 데이터를 기반으로,<br />
          차트의 다음 방향을 예측하고 베팅하세요!
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
            주요 기능
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            차트 분석 없이도 즐길 수 있는 가장 짜릿한 트레이딩
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl p-8 shadow-2xl mb-16 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {DASHBOARD_FEATURES.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl relative overflow-hidden h-48 border border-cyan-500/20 bg-cyan-500/10 backdrop-blur-sm"
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
                      <span className="text-cyan-400 font-semibold">{item.change}</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50 z-20">
                  <motion.div 
                    className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-400" 
                    animate={{ x: ["-100%", "100%"] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: index * 0.3 }} 
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-xl p-6 border border-cyan-500/20 bg-cyan-500/5"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <h3 className="text-xl font-semibold text-white mb-4">실시간 멀티플레이어 랭킹</h3>
            <div className="h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="text-slate-400 text-lg">글로벌 랭킹 보드</div>
              {[...Array(5)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="absolute w-2 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-full" 
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
              className="rounded-2xl p-8 transition-all duration-500 relative overflow-hidden border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{ y: -12, scale: 1.02, boxShadow: "0 30px 60px rgba(6, 182, 212, 0.3)" }}
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
            이런 분들을 위해 태어났습니다
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
              className="text-center rounded-2xl p-8 transition-all duration-500 relative overflow-hidden border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
              variants={fadeInUp}
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)"
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
          className="rounded-3xl p-12 border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm"
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
              background: "linear-gradient(45deg, #06b6d4, #3b82f6, #4f46e5)",
              backgroundSize: "400% 400%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            무미건조한 차트 분석은 끝,<br />
            지금 바로 랭킹에 도전하세요
          </motion.h2>
          
          <motion.p
            className="text-xl text-slate-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            지금 바로 TickJack를 다운로드하고, 짜릿한 타이밍 베팅과 함께<br />
            새로운 차원의 트레이딩 게임을 경험하세요.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(6, 182, 212, 0.4)"
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
              📱 App Store에서 다운로드
            </motion.button>
            
            <motion.button
              className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(20, 184, 166, 0.4)"
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
              🤖 Google Play에서 다운로드
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
      title: "서비스",
      links: ["게임 소개", "랭킹 보드", "플레이 방법", "이벤트"]
    },
    {
      title: "지원",
      links: ["사용 가이드", "고객 지원", "FAQ", "개발자 문서"]
    },
    {
      title: "커뮤니티",
      links: ["트위터", "링크드인", "유튜브", "블로그"]
    }
  ];

  return (
    <motion.footer 
      className="relative z-10 px-6 py-16 border-t border-cyan-500/20"
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
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden">
                <img 
                  src="/tickjack_landing_icon.png" 
                  alt="TickJack 로고" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-white text-xl font-bold">TickJack</span>
                <span className="text-cyan-200 text-sm ml-2">Where Real Traders Play</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed">
              짜릿한 트레이딩을<br />
              게임으로 즐겨보세요!
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
          className="border-t border-cyan-500/20 mt-12 pt-8 text-center text-slate-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">&copy; 2026 TickJack. All rights reserved.</p>
          <div className="flex justify-center items-center space-x-4 text-sm">
            <Link 
              href="/terms" 
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              서비스 이용약관
            </Link>
            <span>|</span>
            <Link 
              href="/privacy" 
              className="hover:text-white hover:-translate-y-0.5 transition-all duration-200 inline-block"
            >
              개인정보 처리방침
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

// Main Landing Component
export default function TickJackLanding() {
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
    ["#0f172a", "#172554", "#1e1b4b", "#0f172a"]
  );

  return (
    <div ref={containerRef} className="relative">
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #4f46e5 100%);
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
        
        @keyframes pulse-invest {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        .invest-float {
          animation: pulse-invest 3s ease-in-out infinite;
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
        <div className="floating-bg absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="floating-bg absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full filter blur-3xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-bg absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '4s' }}></div>
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