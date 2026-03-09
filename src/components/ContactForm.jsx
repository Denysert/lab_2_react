import { useState, useEffect } from "react";

function ContactForm() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 60000); // 1 хвилина

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg dark:bg-slate-800 dark:text-slate-100">
        <button
          type="button"
          className="float-right text-xl text-slate-500 hover:text-slate-800 dark:text-slate-300 dark:hover:text-white"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <h2 className="mb-4 text-lg font-semibold text-slate-900 dark:text-slate-100">
          Форма зворотного зв’язку
        </h2>

        <form
          action="https://formspree.io/f/mwvrvbad"
          method="POST"
          className="space-y-3"
        >
          <input
            type="text"
            name="name"
            placeholder="Ім’я"
            required
            className="w-full rounded border border-slate-300 bg-white p-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-300"
          />

          <input
            type="email"
            name="email"
            placeholder="Електронна пошта"
            required
            className="w-full rounded border border-slate-300 bg-white p-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-300"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Телефон"
            className="w-full rounded border border-slate-300 bg-white p-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-300"
          />

          <textarea
            name="message"
            placeholder="Повідомлення"
            required
            rows="4"
            className="w-full rounded border border-slate-300 bg-white p-2 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder:text-slate-300"
          />

          <button
            type="submit"
            className="w-full rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;