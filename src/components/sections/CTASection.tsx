'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import page3 from '@/assets/page3.png';

export default function CTASection() {
  return (
    <section id="download" className="min-h-screen flex items-center justify-center relative py-20">
      <div className="max-w-4xl mx-auto text-center px-6">
        <motion.div
          className="glass-effect rounded-3xl p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative inline-block">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                background: "linear-gradient(45deg, #60a5fa, #a78bfa, #f472b6)",
                backgroundSize: "400% 400%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientShift 3s ease-in-out infinite"
              }}
            >
              무미건조한 차트 분석은 끝,<br />
              지금 바로 랭킹에 도전하세요
            </motion.h2>
            
            <style jsx>{`
              @keyframes gradientShift {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
              }
            `}</style>
          </div>
          
          <motion.p
            className="text-xl text-slate-300 mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            지금 바로 &apos;TickJack&apos;을 다운로드하고, 짜릿한 타이밍 베팅과 함께<br />
            새로운 차원의 재미를 경험하세요.
          </motion.p>

          {/* 앱 스크린샷 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <Image
                src={page3}
                alt="TickJack 앱 스크린샷"
                width={800}
                height={600}
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority
              />
              {/* 글로우 효과 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white px-12 py-5 rounded-xl text-xl font-bold shadow-2xl relative overflow-hidden"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
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
              🤖 Google Play에서 다운로드
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}