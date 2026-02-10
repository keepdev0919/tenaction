import { useEffect, useState } from 'react';
import { Terminal, Zap, Rocket, Code2 } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Tenacity meets Action';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: '런칭', value: '12', suffix: '+', icon: Rocket },
    { label: '개발일', value: '365', suffix: '+', icon: Code2 },
    { label: '커피', value: '∞', suffix: '', icon: Zap },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 noise-bg" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 scanline opacity-30 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-glow">
            <Terminal className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-mono text-muted-foreground">
              1인 개발 스튜디오
            </span>
          </div>
        </div>
        
        {/* Main Title with Typing Effect */}
        <div className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="font-mono text-gradient">{typedText}</span>
            <span className="animate-blink text-neon-green">_</span>
          </h1>
        </div>
        
        {/* Subtitle */}
        <p className="text-center text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          끈기와 실행력으로 만드는 AI 기반 서비스
          <br />
          <span className="text-neon-cyan font-mono">1인 개발, 무한한 가능성</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a 
            href="#products"
            className="group relative px-8 py-4 bg-neon-green text-background font-semibold rounded-lg overflow-hidden transition-all hover:shadow-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              서비스 둘러보기
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-green to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a 
            href="#mission"
            className="px-8 py-4 glass text-foreground font-medium rounded-lg hover:bg-white/10 transition-colors border-glow"
          >
            <span className="flex items-center gap-2">
              <Code2 className="w-5 h-5 text-neon-cyan" />
              철학 알아보기
            </span>
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-4 rounded-xl glass hover:border-neon-green/30 transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-5 h-5 text-neon-green mx-auto mb-2" />
              <div className="text-2xl sm:text-3xl font-bold font-mono text-foreground">
                {stat.value}
                <span className="text-neon-cyan">{stat.suffix}</span>
              </div>
              <div className="text-xs text-muted-foreground font-mono mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Terminal-style Tagline */}
        <div className="mt-16 max-w-md mx-auto">
          <div className="glass rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-muted-foreground text-xs ml-2">build.log</span>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <p><span className="text-neon-green">$</span> npm run ship</p>
              <p className="text-neon-cyan">&gt; 테넥션 에코시스템 빌드 중...</p>
              <p className="text-neon-cyan">&gt; AI 모듈 로드 완료 ✓</p>
              <p className="text-neon-cyan">&gt; 혁신 준비 완료 🚀</p>
              <p className="animate-pulse">
                <span className="text-neon-green">$</span> _
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
