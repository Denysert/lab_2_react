import { useEffect, useState } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/18/comments')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error('Помилка отримання коментарів:', error));
  }, []);

  return (
    <section className="rounded-xl border border-slate-200 p-5 dark:border-slate-700">
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Відгуки
      </h2>

      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-lg bg-slate-50 p-4 shadow-sm dark:bg-slate-700"
          >
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {review.name}
            </p>
            <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
              {review.body}
            </p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-300">
              {review.email}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;