import { useEffect } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Mission from './sections/Mission';
import Products from './sections/Products';
import Footer from './sections/Footer';

function App() {
  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('tenaction-theme') as 'dark' | 'light' | null;
    
    if (savedTheme) {
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('light', !prefersDark);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <main>
        <Hero />
        <Mission />
        <Products />
      </main>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
