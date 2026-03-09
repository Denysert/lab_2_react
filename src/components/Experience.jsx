function Experience() {
  return (
    <section className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Досвід
      </h2>

      <div className="mt-4 rounded-lg bg-slate-50 p-4 shadow-sm dark:bg-slate-700">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
          <p className="font-medium text-slate-900 dark:text-slate-100">
            GoodFood / Підтримка фронтенду
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-300">
            2023 – до тепер
          </p>
        </div>

        <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">
          Розробляв інтерфейс веб-застосунку з використанням HTML, CSS та React.
          Створював та структурував компоненти, працював з адаптивною версткою.
          Оформлював стилі за допомогою Tailwind CSS. Використовував систему
          контролю версій Git для керування змінами в проєкті.
        </p>
      </div>
    </section>
  );
}

export default Experience;