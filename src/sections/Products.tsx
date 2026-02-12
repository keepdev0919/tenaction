import { useEffect, useRef, useState } from 'react';
import { ExternalLink, TrendingUp, X, Code2, Plus } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon?: React.ElementType;
  iconImage?: string;
  color: string;
  bgGradient: string;
  status: 'live' | 'beta' | 'building';
  metrics?: { label: string; value: string }[];
  link?: string;
  techStack?: {
    preview: string;
    description: string;
    architectureImage?: string;
  };
}

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      id: 'cheonmyeongrok',
      name: '천명록',
      tagline: 'AI 사주 분석',
      description: 'AI 사주 분석 3단계 리포트와 나만의 60甲子 수호신 매칭. 시각적이고 입체적인 현대적 운세 플랫폼.',
      iconImage: '/images/products/cheonmyeongrok.png',
      color: 'text-amber-400',
      bgGradient: 'from-amber-500/20 to-orange-500/20',
      status: 'live',
      link: 'https://www.cheonmyeongrok.com/',
      techStack: {
        preview: 'React 19, Node.js, Express, MySQL, OpenAI',
        description: 'React 19, Vite, Tailwind CSS v4를 도입한 최신 프론트엔드와 Node.js + Express + MySQL 백엔드로 구성된 풀스택 아키텍처입니다. Lunar JS로 정교한 만세력 로직을 구현하고 OpenAI API로 사주를 해석하며, PortOne 결제 및 서버 사이드 PDF/이미지 생성까지 갖춘 고도화된 웹 서비스입니다.',
        architectureImage: '/images/architecture/cheonmyeongrok_arch.png',
      },
    },
    {
      id: 'evening-walk',
      name: '저녁산책',
      tagline: '나만의 감성 산책 일기',
      description: '목적지와 산책 메이트를 선택한 뒤, 경유지 질문에 답하고 포즈 사진으로 완성하는 나만의 산책 기록.',
      iconImage: '/images/products/evening_walk.webp',
      color: 'text-rose-400',
      bgGradient: 'from-rose-500/20 to-pink-500/20',
      status: 'live',
      link: 'https://app.litt.ly/page',
      techStack: {
        preview: 'Flutter, Dart, Firebase, Google Maps',
        description: 'Flutter와 Dart로 개발된 크로스 플랫폼 앱으로, Provider 패턴을 통해 효율적인 상태 관리를 구현했습니다. Firebase 백엔드(Auth, Firestore, Functions)를 기반으로 Google Maps API와 위치 기반 서비스를 통합하여 산책 경험을 제공하며, RevenueCat으로 인앱 결제 시스템을 구축했습니다.',
        architectureImage: '/images/architecture/evening_walk_arch.png',
      },
    },
    {
      id: 'demon-slayer-health',
      name: '귀살대 건강관리',
      tagline: '거북목, 눈운동 프로그램',
      description: '개발자의 거북목 예방 및 안구 건조증 방지를 위한 귀멸의 칼날 컨셉의 헬스 케어 프로그램.',
      iconImage: '/images/products/demon_slayer.png',
      color: 'text-emerald-400',
      bgGradient: 'from-emerald-500/20 to-teal-500/20',
      status: 'live',
      link: 'https://github.com/keepdev0919/turtle-eye-slayer',
      techStack: {
        preview: 'Python, Tkinter, Pillow, Schedule, PyInstaller',
        description: 'Python 3.x 기반의 macOS 데스크톱 앱으로, Tkinter를 사용해 가볍고 직관적인 GUI를 구현했습니다. Pillow로 고화질 캐릭터 이미지를 처리하고, Schedule 라이브러리로 정교한 건강 알림 로직을 관리합니다. PyInstaller를 통해 단일 실행 파일(.app)로 패키징하여 배포 용이성을 극대화했습니다.',
        architectureImage: '/images/architecture/demon_slayer_arch.png',
      },
    },
    {
      id: 'style-lens',
      name: 'StyleLens',
      tagline: 'AI 퍼스널 스타일 분석',
      description: '사진 업로드로 AI가 체형, 얼굴형, 피부톤을 분석하여 맞춤형 패션 추천과 스타일링 가이드를 제공하는 서비스.',
      iconImage: '/images/products/style_lens.png',
      color: 'text-purple-400',
      bgGradient: 'from-purple-500/20 to-indigo-500/20',
      status: 'live',
      link: 'https://stylelens.store/',
      techStack: {
        preview: 'React, TypeScript, Cloudflare Workers, OpenAI, Replicate',
        description: 'React, TypeScript, Vite로 구축된 모던 프론트엔드와 Cloudflare Workers 기반의 서버리스 엣지 컴퓨팅을 결합했습니다. OpenAI GPT-4o-mini와 Replicate AI를 활용해 멀티모달 패션 분석 및 헤어스타일 생성을 제공하며, Polar SDK로 결제 시스템을 통합하여 안정적인 SaaS 플랫폼을 구현했습니다.',
        architectureImage: '/images/architecture/style_lens_arch.png',
      },
    },
  ];

  const getStatusBadge = (status: Product['status']) => {
    const styles = {
      live: 'bg-neon-green/20 text-neon-green border-neon-green/30',
      beta: 'bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30',
      building: 'bg-neon-purple/20 text-neon-purple border-neon-purple/30',
    };

    const labels = {
      live: '운영 중',
      beta: '베타',
      building: '개발 중',
    };

    return (
      <span className={`px-2 py-1 text-xs font-mono font-medium rounded border ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <TrendingUp className="w-4 h-4 text-neon-green" />
            <span className="text-xs font-mono text-muted-foreground">Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Launched <span className="text-gradient">Services</span>
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group relative glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Card Content */}
              <div className="relative p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    {product.iconImage ? (
                      <img
                        src={product.iconImage}
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    ) : (
                      product.icon && <product.icon className={`w-12 h-12 ${product.color}`} />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(product.status)}
                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-neon-cyan/20 border border-white/10 hover:border-neon-cyan/50 transition-all duration-300 group/icon"
                        title="바로가기"
                      >
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover/icon:text-neon-cyan transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold mb-1 group-hover:text-gradient transition-colors">
                  {product.name}
                </h3>
                <p className={`text-sm font-mono ${product.color} mb-3`}>
                  {product.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {product.description}
                </p>

                {/* Metrics */}
                {product.metrics && (
                  <div className="flex gap-4 mb-4">
                    {product.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-lg font-bold font-mono text-foreground">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Preview - Clickable */}
                {product.techStack && (
                  <div
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsModalOpen(true);
                    }}
                    className="mt-4 pt-4 border-t border-white/10 cursor-pointer group/tech hover:bg-white/5 -mx-6 px-6 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-neon-cyan" />
                        <span className="text-xs font-mono font-semibold text-foreground group-hover/tech:text-neon-cyan transition-colors">Tech Stack</span>
                      </div>
                      <Plus className="w-4 h-4 text-muted-foreground group-hover/tech:text-neon-cyan group-hover/tech:rotate-90 transition-all duration-300" />
                    </div>
                    <p className="text-xs text-foreground/70 leading-relaxed group-hover/tech:text-foreground/90 transition-colors">
                      {product.techStack.preview}
                    </p>
                  </div>
                )}


              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-green/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Tech Stack Modal */}
        {isModalOpen && selectedProduct && selectedProduct.techStack && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/20">
              {/* Header */}
              <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b border-white/10 bg-background/95 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  {selectedProduct.iconImage && (
                    <img
                      src={selectedProduct.iconImage}
                      alt={selectedProduct.name}
                      className="w-10 h-10 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{selectedProduct.name}</h3>
                    <p className="text-sm text-muted-foreground">기술 스택 상세</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Tech Stack Preview */}
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground mb-2 flex items-center gap-2">
                    <Code2 className="w-4 h-4" />
                    주요 기술
                  </h4>
                  <p className="text-base font-medium text-foreground">
                    {selectedProduct.techStack.preview}
                  </p>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Description */}
                <div>
                  <h4 className="text-sm font-mono text-muted-foreground mb-3">상세 설명</h4>
                  <p className="text-sm text-foreground/90 leading-relaxed">
                    {selectedProduct.techStack.description}
                  </p>
                </div>

                {/* Architecture Image */}
                {selectedProduct.techStack.architectureImage && (
                  <div>
                    <h4 className="text-sm font-mono text-muted-foreground mb-3">아키텍처 다이어그램</h4>
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5 flex justify-center bg-black/20">
                      <img
                        src={selectedProduct.techStack.architectureImage}
                        alt={`${selectedProduct.name} Architecture`}
                        className="w-full h-auto max-h-[50vh] object-contain"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Products;
