# Tailwind CSS: Быстрый старт и лучшие практики

---

## Что такое Tailwind CSS?
Tailwind — это utility-first CSS-фреймворк. Вместо написания кастомных классов ты собираешь стиль прямо в JSX через utility-классы (`bg-blue-500`, `p-4`, `rounded` и т.д.).

**Зачем использовать Tailwind?**
- Молниеносная верстка без отхода на CSS-файлы
- Консистентный дизайн
- Легко поддерживать и масштабировать

---

## Как подключить Tailwind
1. Установи зависимости:
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
2. В `tailwind.config.js`:
   ```js
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   ```
3. В `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

---

## Как использовать Tailwind в компонентах

```tsx
// src/components/atoms/Button.tsx
const Button = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{children}</button>
);
```

- Просто добавляй utility-классы в `className`.
- Можно комбинировать сколько угодно классов.

---

## Примеры utility-классов
- `bg-blue-500` — фон
- `text-white` — цвет текста
- `p-4` — padding
- `rounded` — скругление
- `flex`, `items-center`, `justify-between` — флексы
- `hover:bg-blue-700` — ховер-эффект

---

## Best practices
- **Не бойся длинных className** — это нормально для Tailwind!
- **Комбинируй с компонентами** — делай атомы с Tailwind внутри.
- **Используй [Playground](https://play.tailwindcss.com/)** для экспериментов.
- **Переиспользуемые стили** — выноси в компоненты, а не в CSS.
- **Не пиши кастомный CSS, если можно обойтись utility-классами.**

---

## Типичные паттерны
- **Кнопка:**
  ```tsx
  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Buy</button>
  ```
- **Карточка:**
  ```tsx
  <div className="p-6 bg-white rounded shadow-md border">...</div>
  ```
- **Сетка:**
  ```tsx
  <div className="grid grid-cols-3 gap-4">...</div>
  ```

---

## FAQ и советы
- **Классы не работают?** — Проверь, что путь в `content` в `tailwind.config.js` правильный.
- **Стили не применяются?** — Убедись, что в `index.css` есть все три директивы Tailwind.
- **Нужно что-то кастомное?** — Добавь в `tailwind.config.js` в `theme.extend`.
- **Как сделать адаптив?** — Используй брейкпоинты: `md:p-8`, `lg:text-xl` и т.д.

---

**Tailwind — это быстро, удобно и современно. Не бойся экспериментировать!** 