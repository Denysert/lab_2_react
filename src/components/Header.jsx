function Header({ toggleTheme, theme }) {
  return (
    <header className="flex items-center justify-between bg-slate-900 px-6 py-6 text-white dark:bg-slate-950">
      <div>
        <h1 className="text-2xl font-bold">Денис</h1>
        <p className="text-sm opacity-80">Фронтенд-розробник</p>
      </div>

      <button
        onClick={toggleTheme}
        className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700"
      >
        {theme === 'light' ? '🌙 Нічна' : '☀ Денна'}
      </button>
    </header>
  );
}

export default Header;