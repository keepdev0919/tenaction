import { useState, useEffect } from 'react';
import { Terminal, Menu, X, Rocket, Code2, Zap, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Mission', href: '#mission' },
    { label: 'Services', href: '#products' },
    { label: 'Contact', href: '#footer' },
  ];

  const shipStats = [
    { icon: Rocket, value: '12', label: 'Launches' },
    { icon: Code2, value: '365', label: 'Days' },
    { icon: Zap, value: '∞', label: 'Energy' },
  ];

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-neon-green/10 border border-neon-green/30">
                <Terminal className="w-5 h-5 text-neon-green" />
              </div>
              <span className="font-bold text-lg">Tenaction</span>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <div className="p-1.5 rounded-lg bg-neon-green/10 border border-neon-green/30 group-hover:bg-neon-green/20 transition-colors">
                <Terminal className="w-5 h-5 text-neon-green" />
              </div>
              <span className="font-bold text-lg group-hover:text-gradient transition-colors">
                Tenaction
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-green group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Right Side: Stats + Theme Toggle */}
            <div className="flex items-center gap-4">
              {/* Ship Stats - Desktop */}
              <div className="hidden lg:flex items-center gap-4">
                {shipStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-1.5 text-xs font-mono"
                  >
                    <stat.icon className="w-3.5 h-3.5 text-neon-green" />
                    <span className="text-foreground font-semibold">{stat.value}</span>
                    <span className="text-muted-foreground">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass hover:bg-white/10 transition-colors group"
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
                ) : (
                  <Moon className="w-5 h-5 text-indigo-500 group-hover:scale-110 transition-transform" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-semibold text-foreground hover:text-neon-green transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Stats */}
          <div className="flex gap-6 mt-8">
            {shipStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1 text-neon-green mb-1">
                  <stat.icon className="w-4 h-4" />
                  <span className="font-mono font-bold">{stat.value}</span>
                </div>
                <span className="text-xs text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Mobile Theme Toggle */}
          <button
            onClick={() => {
              toggleTheme();
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center gap-3 px-6 py-3 rounded-xl glass"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-5 h-5 text-amber-400" />
                <span className="text-foreground">Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-indigo-500" />
                <span className="text-foreground">Dark Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
