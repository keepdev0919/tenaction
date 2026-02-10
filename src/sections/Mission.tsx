import { useEffect, useRef, useState } from 'react';
import { Cpu, Timer, Target, Sparkles, ArrowRight, User } from 'lucide-react';

const Mission = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Timer,
      title: '속도 우선',
      description: '빠르게 출시하고, 더 빠르게 배운다. 모든 제품은 실험이다.',
      color: 'text-neon-green',
    },
    {
      icon: Cpu,
      title: 'AI 네이티브',
      description: 'AI로 개발하고, 인간을 위해. 자동화가 핵심이다.',
      color: 'text-neon-cyan',
    },
    {
      icon: Target,
      title: '끈질김',
      description: '끈기가 재능을 이긴다. 절대 멈추지 않는다.',
      color: 'text-neon-purple',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="mission"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-neon-cyan" />
            <span className="text-xs font-mono text-muted-foreground">Our Philosophy</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Why We <span className="text-gradient">Build</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            끝없는 회의와 완벽한 계획 대신, 우리는 행동을 선택한다.
            모든 코드 한 줄은 앞으로 나아가는 한 걸음이고, 출시한 모든 제품은 배움의 기회다.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Manifesto */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass rounded-2xl p-8 border-l-4 border-l-neon-green">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neon-green/10">
                  <User className="w-6 h-6 text-neon-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">1인의 힘</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    관료주의 없이, 끝없는 동기화 회의 없이. 오직 순수한 실행만이 있다.
                    솔로 인디 해커로서 생각의 속도로 움직이며, 아이디어를 며칠 만에
                    작동하는 제품으로 바꾼다.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 border-l-4 border-l-neon-cyan">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-neon-cyan/10">
                  <Cpu className="w-6 h-6 text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">AI를 공동창업자로</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AI는 창의성을 대체하지 않는다. 그것을 증폭시킨다. 코드 생성부터 디자인,
                    카피라이팅부터 분석까지, 우리 무기고의 모든 도구는 최대의 레버리지를
                    위해 튜닝되어 있다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Code Block */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass rounded-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-xs font-mono text-muted-foreground ml-2">manifesto.ts</span>
              </div>
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-muted-foreground">
                  <code>
                    <span className="text-neon-purple">const</span>{' '}
                    <span className="text-neon-cyan">tenaction</span> = {'{'}
                    {'\n'}  <span className="text-neon-green">philosophy</span>:{' '}
                    <span className="text-yellow-400">&quot;빠르게 출시, 더 빠르게 반복&quot;</span>,
                    {'\n'}  <span className="text-neon-green">approach</span>:{' '}
                    <span className="text-yellow-400">&quot;AI 우선 개발&quot;</span>,
                    {'\n'}  <span className="text-neon-green">mindset</span>:{' '}
                    <span className="text-yellow-400">&quot;절대 포기하지 않는다&quot;</span>,
                    {'\n'}  <span className="text-neon-green">teamSize</span>:{' '}
                    <span className="text-neon-purple">1</span>,
                    {'\n'}  <span className="text-neon-green">impact</span>:{' '}
                    <span className="text-neon-purple">Infinity</span>
                    {'\n'}{'}'};
                    {'\n'}
                    {'\n'}<span className="text-neon-purple">export</span>{' '}
                    <span className="text-neon-purple">default</span>{' '}
                    <span className="text-neon-cyan">tenaction</span>;
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Principles Grid */}
        <div className={`grid sm:grid-cols-3 gap-6 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {principles.map((principle, index) => (
            <div
              key={principle.title}
              className="group glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`p-3 rounded-xl bg-white/5 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <principle.icon className={`w-6 h-6 ${principle.color}`} />
              </div>
              <h4 className="text-lg font-semibold mb-2">{principle.title}</h4>
              <p className="text-sm text-muted-foreground">{principle.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="#products"
            className="inline-flex items-center gap-2 text-neon-green hover:text-neon-cyan transition-colors font-mono"
          >
            See What We've Built
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Mission;
