import { Terminal, Mail, Github, Twitter, Linkedin, MapPin, Building2, FileText, Briefcase } from 'lucide-react';

const Footer = () => {
  const businessInfo = {
    name: '테넥션 (Tenaction)',
    representative: '대표: 김테넥션',
    registration: '사업자등록번호: 123-45-67890',
    address: '서울특별시 강남구 테헤란로 123, AI타워 10층',
    businesses: [
      '응용 소프트웨어 개발 및 공급업',
      '전자상거래 소프트웨어 개발',
      '광고 대행업',
      '데이터베이스 및 온라인 정보 제공업',
      'AI 및 머신러닝 솔루션 개발',
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@tenaction.io', label: 'Email' },
  ];

  const quickLinks = [
    { label: '서비스', href: '#products' },
    { label: '철학', href: '#mission' },
    { label: '블로그', href: '#' },
    { label: '문의', href: '#' },
  ];

  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-green/50 to-transparent" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-neon-green/10 border border-neon-green/30">
                <Terminal className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Tenaction</h3>
                <p className="text-xs font-mono text-muted-foreground">1인 개발 스튜디오</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              끈기와 끊임없는 실행력으로 만드는 AI 기반 서비스.
              빠르게 출시하고, 더 빠르게 배웁니다.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg glass hover:bg-white/10 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-neon-green transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              바로가기
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground hover:text-neon-green transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-muted-foreground">
              연락처
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@tenaction.io"
                className="flex items-center gap-3 text-foreground hover:text-neon-green transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground" />
                hello@tenaction.io
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>서울, 대한민국</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Business Info Section */}
        <div className="glass rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-neon-cyan" />
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              사업자 정보
            </h4>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Left: Basic Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Briefcase className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">상호명</p>
                  <p className="font-medium">{businessInfo.name}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FileText className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">사업자등록번호</p>
                  <p className="font-mono text-sm">{businessInfo.registration}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">주소</p>
                  <p className="text-sm">{businessInfo.address}</p>
                </div>
              </div>
            </div>
            
            {/* Right: Business Categories */}
            <div>
              <p className="text-sm text-muted-foreground mb-3">사업 분야</p>
              <ul className="space-y-2">
                {businessInfo.businesses.map((business, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-2 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green" />
                    {business}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tenaction. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
            <span>시스템 정상 운영 중</span>
            <span className="text-neon-green">|</span>
            <span>v2.0.1</span>
          </div>
        </div>
        
        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-xs text-muted-foreground/50 font-mono">
            사랑과 AI, 그리고 건강에 해로운 양의 카페인으로 만들어졌습니다
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
