// lib/constants.ts

// 네비게이션 메뉴
export const NAVIGATION_ITEMS = [
  { name: '게임 소개', href: '#problems' },
  { name: '플레이 방법', href: '#solution' },
  { name: '주요 기능', href: '#features' },
  { name: '타겟 사용자', href: '#target' },
  { name: '다운로드', href: '#download' }
] as const;

// 크립토 코인 데이터
export const CRYPTO_COINS = [
  { name: 'Bitcoin', symbol: '₿', color: 'from-orange-500 to-yellow-500' },
  { name: 'Ethereum', symbol: 'Ξ', color: 'from-blue-500 to-purple-500' },
  { name: 'Cardano', symbol: '₳', color: 'from-blue-400 to-cyan-400' },
  { name: 'Solana', symbol: '◎', color: 'from-purple-500 to-pink-500' },
  { name: 'BNB', symbol: 'B', color: 'from-yellow-500 to-orange-500' },
  { name: 'XRP', symbol: 'X', color: 'from-gray-500 to-slate-500' },
] as const;

// 문제점 리스트
export const PROBLEMS = [
  "지루한 모의투자",
  "복잡한 경제 지표", 
  "어려운 용어들",
  "재미없는 차트",
  "실전 트레이딩의 두려움",
  "게임처럼 즐길 수 없는 투자"
] as const;

// 대시보드 기능 카드
export const DASHBOARD_FEATURES = [
  {
    title: "실시간 차트 게임",
    value: "1,247 Pts",
    change: "+15.7%",
    icon: "🎮",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "가상 마진 트레이딩", 
    value: "100x",
    change: "+127.3%",
    icon: "⚡",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "랭킹 시스템",
    value: "Top 1%", 
    change: "🏆",
    icon: "📈",
    color: "from-emerald-500 to-teal-500"
  }
] as const;

// 주요 기능 설명
export const MAIN_FEATURES = [
  {
    icon: "🎮",
    gradient: "from-blue-500 to-cyan-500",
    title: "게임처럼 즐기는 트레이딩",
    description: "복잡한 분석 없이 직관적인 UI로 캔들 차트를 예측하고 베팅하세요. 트레이딩이 짜릿한 게임이 됩니다."
  },
  {
    icon: "⚡",
    gradient: "from-purple-500 to-pink-500", 
    title: "안전한 가상 자산으로 실전 연습",
    description: "실제 돈을 잃을 걱정 없이 마진 거래와 청산의 짜릿함을 경험해보세요. 무한한 가상 자산으로 도전하세요."
  },
  {
    icon: "🏆", 
    gradient: "from-emerald-500 to-teal-500",
    title: "숨막히는 랭킹 경쟁",
    description: "전 세계 플레이어들과 수익률을 겨루고 최고의 트레이더 자리에 오르세요. 당신의 실력을 증명할 시간입니다."
  },
  {
    icon: "🚀",
    gradient: "from-orange-500 to-red-500",
    title: "실시간 시장 데이터 연동", 
    description: "실제 암호화폐 시장 데이터를 바탕으로 더욱 생동감 넘치는 트레이딩을 즐기세요. 현실과 게임이 만납니다."
  }
] as const;

// 타겟 사용자
export const TARGET_USERS = [
  {
    icon: "🌱",
    gradient: "from-blue-500 to-purple-500",
    title: "트레이딩 입문자",
    description: "투자를 처음 시작하며 가벼운 마음으로 감을 잡고 싶은 분들을 위한 최적의 놀이터"
  },
  {
    icon: "🕹️",
    gradient: "from-purple-500 to-pink-500", 
    title: "캐주얼 게이머",
    description: "차트를 보며 짜릿한 타이밍 게임과 예측의 묘미를 즐기고 싶은 게임 마니아"
  },
  {
    icon: "🔥",
    gradient: "from-pink-500 to-orange-500",
    title: "모의투자 유저",
    description: "딱딱하고 지루한 기존의 모의투자가 지겨워진 예비 트레이더"
  }
] as const;

// 푸터 섹션 데이터
export const FOOTER_SECTIONS = [
  {
    title: "서비스",
    links: ["게임 소개", "랭킹 보드", "플레이 방법", "이벤트"]
  },
  {
    title: "지원", 
    links: ["사용 가이드", "고객 지원", "FAQ", "업데이트 노트"]
  },
  {
    title: "커뮤니티",
    links: ["트위터", "텔레그램", "디스코드", "유튜브"]
  }
] as const;

// 애니메이션 설정
export const ANIMATION_CONFIG = {
  // 스프링 설정
  spring: {
    stiffness: 300,
    damping: 30
  },
  
  // 스크롤 구간 설정
  scroll: {
    hero: [0, 0.15],
    problems: [0.25, 0.35], 
    solution: [0.3, 0.4],
    dashboard: [0.5, 0.65],
    bgColors: [0, 0.3, 0.6, 1]
  },
  
  // 배경색 시퀀스
  backgroundColors: [
    "#0f172a", // slate-900
    "#1e1b4b", // indigo-900  
    "#312e81", // indigo-800
    "#0f172a"  // slate-900
  ],
  
  // 애니메이션 지연시간
  delays: {
    stagger: 0.2,
    children: 0.1,
    section: 0.8
  }
} as const;

// Framer Motion Variants
export const FADE_IN_UP = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut" 
    }
  }
} as const;

export const STAGGER_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: ANIMATION_CONFIG.delays.stagger,
      delayChildren: ANIMATION_CONFIG.delays.children
    }
  }
} as const;

export const SCALE_ON_HOVER = {
  whileHover: { 
    scale: 1.05, 
    y: -2 
  },
  whileTap: { 
    scale: 0.95 
  },
  transition: { 
    duration: 0.2 
  }
} as const;

// 브랜드 색상
export const BRAND_COLORS = {
  primary: "from-blue-500 via-purple-500 to-pink-500",
  secondary: "from-slate-700 to-slate-800", 
  accent: "from-cyan-500 to-blue-500",
  success: "from-green-500 to-emerald-500",
  warning: "from-yellow-500 to-orange-500",
  danger: "from-red-500 to-pink-500"
} as const;

// 반응형 브레이크포인트 (Tailwind 기준)
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;