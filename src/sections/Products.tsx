import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Star, TrendingUp, Sparkles, Moon, Sun, Heart, Brain, MessageSquare } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
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
      description: '전통적인 사주 명리를 AI로 재해석합니다. 개인 맞춤형 운세 분석과 인생 조언을 제공하는 현대적인 명리 서비스입니다.',
      icon: Star,
      color: 'text-amber-400',
      bgGradient: 'from-amber-500/20 to-orange-500/20',
      status: 'live',
      metrics: [
        { label: '사용자', value: '2.5K+' },
        { label: '평점', value: '4.8' },
      ],
      link: '#',
    },
    {
      id: 'evening-walk',
      name: '저녁산책',
      tagline: 'AI 헬스케어',
      description: '매일 저녁 20분, AI 코치와 함께하는 맞춤형 산책 루틴입니다. 건강 데이터 분석으로 최적의 운동 강도를 제안합니다.',
      icon: Heart,
      color: 'text-rose-400',
      bgGradient: 'from-rose-500/20 to-pink-500/20',
      status: 'live',
      metrics: [
        { label: '산책 횟수', value: '10K+' },
        { label: '누적 KM', value: '50K+' },
      ],
      link: '#',
    },
    {
      id: 'luna-chat',
      name: 'Luna Chat',
      tagline: 'AI 동반자',
      description: '24시간 당신 곁에 있는 AI 대화 파트너입니다. 심리 상담에서 일상 대화까지, 진정성 있는 공감과 조언을 제공합니다.',
      icon: MessageSquare,
      color: 'text-violet-400',
      bgGradient: 'from-violet-500/20 to-purple-500/20',
      status: 'beta',
      metrics: [
        { label: '대화 수', value: '100K+' },
        { label: '버전', value: 'v0.9' },
      ],
      link: '#',
    },
    {
      id: 'mindflow',
      name: 'MindFlow',
      tagline: 'AI 명상',
      description: '실시간 바이오 데이터를 기반으로 한 개인 맞춤형 명상 가이드입니다. 현재 상태에 최적화된 호흡법과 명상을 제안합니다.',
      icon: Brain,
      color: 'text-cyan-400',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      status: 'building',
      link: '#',
    },
    {
      id: 'solwrite',
      name: 'SolWrite',
      tagline: 'AI 글쓰기',
      description: '한국어 특화 AI 글쓰기 어시스턴트입니다. 블로그 포스트부터 마케팅 카피까지, 당신의 글쓰기를 10배 빠르게 만듭니다.',
      icon: Sun,
      color: 'text-yellow-400',
      bgGradient: 'from-yellow-500/20 to-amber-500/20',
      status: 'live',
      metrics: [
        { label: '생성 글', value: '5K+' },
        { label: '누적 단어', value: '10M+' },
      ],
      link: '#',
    },
    {
      id: 'nightowl',
      name: 'NightOwl',
      tagline: '집중 타이머',
      description: '뽀모도로와 딥 워크를 결합한 집중력 관리 도구입니다. AI가 당신의 집중 패턴을 분석해 최적의 작업-휴식 사이클을 제안합니다.',
      icon: Moon,
      color: 'text-indigo-400',
      bgGradient: 'from-indigo-500/20 to-blue-500/20',
      status: 'beta',
      metrics: [
        { label: '집중 시간', value: '25K+' },
        { label: '사용자', value: '800+' },
      ],
      link: '#',
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
            <span className="text-xs font-mono text-muted-foreground">우리의 서비스</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            출시된 <span className="text-gradient">서비스들</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            기록적인 시간 안에 아이디어를 현실로. 각 제품은 AI 기반 개발의
            강력함을 보여주는 증거입니다.
          </p>
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
                  <div className={`p-3 rounded-xl bg-white/5 group-hover:scale-110 transition-transform duration-300`}>
                    <product.icon className={`w-6 h-6 ${product.color}`} />
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
        
        {/* Build Log Teaser */}
        <div className={`mt-16 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-neon-green/10">
                  <Sparkles className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">더 많은 서비스가 준비 중...</h3>
                  <p className="text-sm text-muted-foreground">
                    현재 3개의 AI 기반 서비스를 개발 중입니다
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 font-mono text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-green">6</div>
                  <div className="text-xs text-muted-foreground">출시 완료</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-cyan">3</div>
                  <div className="text-xs text-muted-foreground">개발 중</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple">∞</div>
                  <div className="text-xs text-muted-foreground">아이디어</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
