import { useEffect, useState } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState({
    userAgent: '',
    platform: '',
    language: '',
  });

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
    };

    localStorage.setItem('systemInfo', JSON.stringify(info));

    const savedInfo = JSON.parse(localStorage.getItem('systemInfo'));
    if (savedInfo) {
      setSystemInfo(savedInfo);
    }
  }, []);

  return (
    <footer className="border-t border-slate-200 px-6 py-5 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Електронна пошта:{' '}
          <span className="font-medium text-slate-900 dark:text-slate-100">
            denyskrak@gmail.com
          </span>
        </p>
        <p>
          GitHub:{' '}
          <span className="font-medium text-slate-900 dark:text-slate-100">
            github.com/Denysert
          </span>
        </p>
      </div>

      <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-700 dark:bg-slate-700 dark:text-slate-200">
        <p><strong>Браузер:</strong> {systemInfo.userAgent}</p>
        <p><strong>Платформа:</strong> {systemInfo.platform}</p>
        <p><strong>Мова:</strong> {systemInfo.language}</p>
      </div>
    </footer>
  );
}

export default Footer;