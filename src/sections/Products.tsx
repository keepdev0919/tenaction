import { useEffect, useRef, useState } from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

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
}

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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
    },
    {
      id: 'demon-slayer-health',
      name: '귀살대 건강관리',
      tagline: '거북목, 눈운동 프로그램',
      description: '개발자의 거북목 예방 및 안구 건조증 방지를 위한 귀멸의 칼날 컨셉의 헬스 케어 프로그램.',
      iconImage: '/images/products/demon_slayer_health.png',
      color: 'text-emerald-400',
      bgGradient: 'from-emerald-500/20 to-teal-500/20',
      status: 'live',
      link: 'https://github.com/keepdev0919/turtle-eye-slayer',
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
                  {getStatusBadge(product.status)}
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

                {/* Link */}
                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon-green transition-colors group/link"
                  >
                    <span>바로가기</span>
                    <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-neon-green/30 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
