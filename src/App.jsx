import { useEffect, useState } from 'react';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-3xl p-4 sm:p-6">
        <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-slate-800">
          <Header toggleTheme={toggleTheme} theme={theme} />

          <main className="space-y-6 p-6">
            <Experience />
            <Education />
            <Reviews />
          </main>

          <Footer />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default App;