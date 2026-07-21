'use client';
import { motion, useSpring, MotionValue } from 'framer-motion';
import Image from 'next/image';
import icon from '@/assets/icon.png';
import page4 from '@/assets/page4.png';
import { CRYPTO_COINS } from '@/lib/constants';

interface HeroSectionProps {
  heroScale: MotionValue<number>;
  heroOpacity: MotionValue<number>;
}

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

export default function HeroSection({ heroScale, heroOpacity }: HeroSectionProps) {
  const smoothScale = useSpring(heroScale, { stiffness: 300, damping: 30 });

  return (
    <motion.section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      style={{ 
        scale: smoothScale,
        opacity: heroOpacity 
      }}
    >
      {/* 썌끈한 백그라운드 이미지 */}
      <motion.div
        className="absolute right-16 top-1/2 transform -translate-y-1/2 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 100, scale: 0.9 }}
        animate={{ opacity: 0.6, x: 0, scale: 1 }}
        transition={{ 
          duration: 1.5, 
          delay: 0.4,
          ease: [0.25, 0.1, 0.25, 1]
        }}
      >
        {/* 플로팅 애니메이션 래퍼 */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative"
        >
          {/* 메인 이미지 */}
          <Image
            src={page4}
            alt="TickJack 앱 백그라운드"
            width={500}
            height={620}
            className="rounded-3xl shadow-2xl"
            priority
          />
          
          {/* 다중 글로우 효과 */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-3xl -z-10"></div>
          <div className="absolute -inset-6 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl blur-2xl -z-10"></div>
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 via-purple-300/20 to-pink-300/20 rounded-3xl blur-xl -z-10"></div>
          
          {/* 펄스 효과 */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl"
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* 회전하는 액센트들 */}
          <motion.div
            className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.6, 0.9, 0.6]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-sm"
            animate={{
              rotate: [360, 0],
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </motion.div>
      </motion.div>

      {/* 기존 중앙 정렬 텍스트 */}
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
              <Image 
                src={icon} 
                alt="TickJack 로고" 
                width={64} 
                height={64}
                className="rounded-2xl shadow-2xl"
                onError={(e) => {
                  const target = e.currentTarget;
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) {
                    target.style.display = 'none';
                    fallback.style.display = 'flex';
                  }
                }}
              />
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl" style={{display: 'none'}}>
                <span className="text-white font-bold text-3xl">🎮</span>
              </div>
            </motion.div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            지루한 트레이딩은 그만!<br />
            <span className="gradient-text text-3xl md:text-5xl lg:text-6xl">
              <span className="block sm:inline">이제 게임으로 쉽고 재미있게</span>{' '}
              <span className="block sm:inline">즐겨보세요.</span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            복잡한 차트와 어려운 경제 지표에 지치셨나요? 안전하게 즐기는 실전 마진 트레이딩 게임!
          </p>
          
          <div className="text-xl md:text-2xl font-semibold text-white mb-12">
            이제 <span className="gradient-text font-bold">TickJack</span>과 함께 진짜 게임을 시작하세요.
          </div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.button 
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-10 py-4 rounded-xl text-lg font-bold shadow-2xl"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              지금 바로 다운로드
            </motion.button>
            <motion.button 
              className="glass-effect text-white px-10 py-4 rounded-xl text-lg font-semibold"
              variants={fadeInUp}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              데모 체험하기
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* 떠다니는 크립토 로고들 */}
      {CRYPTO_COINS.map((crypto, index) => (
        <motion.div
          key={crypto.name}
          className="absolute crypto-float"
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
          <div className={`w-16 h-16 bg-gradient-to-r ${crypto.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-xl opacity-30`}>
            {crypto.symbol}
          </div>
        </motion.div>
      ))}
    </motion.section>
  );
}