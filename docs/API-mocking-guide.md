# API Mocking Guide: Мокаем API для разработки и тестов

---

## Что такое мок API и зачем он нужен?
- Мок (mock) — это поддельный сервер/ответ API, чтобы можно было разрабатывать и тестировать без настоящего бэкенда.
- Помогает:
  - Разрабатывать фронт независимо от бэка
  - Тестировать разные сценарии (успех, ошибка, пустой ответ)
  - Делать автотесты стабильнее

---

## Какой инструмент использовать?
- [msw (Mock Service Worker)](https://mswjs.io/) — современный и удобный для React/RTK Query

---

## Как подключить msw
1. Установи зависимость:
   ```bash
   npm install msw --save-dev
   ```
2. Создай хендлеры для моков:
   `src/mocks/handlers.ts`
   ```ts
   import { rest } from 'msw';
   export const handlers = [
     rest.get('/api/products', (req, res, ctx) => {
       return res(
         ctx.status(200),
         ctx.json([
           { id: '1', name: 'Product 1', price: 100 },
           { id: '2', name: 'Product 2', price: 200 },
         ])
       );
     }),
   ];
   ```
3. Настрой сервер msw:
   `src/mocks/browser.ts`
   ```ts
   import { setupWorker } from 'msw';
   import { handlers } from './handlers';
   export const worker = setupWorker(...handlers);
   ```
4. Запусти msw при старте приложения (например, в `src/main.tsx`):
   ```ts
   if (process.env.NODE_ENV === 'development') {
     const { worker } = await import('./mocks/browser');
     worker.start();
   }
   ```

---

## Как использовать моки в тестах
- Для unit-тестов msw можно запускать через `setupServer` из `msw/node`
- Пример:
  ```ts
  import { setupServer } from 'msw/node';
  import { handlers } from '../src/mocks/handlers';
  const server = setupServer(...handlers);
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  ```

---

## Best practices
- Храни моки в папке `src/mocks/`
- Пиши отдельный handler для каждого эндпоинта
- Для разных сценариев используй `server.use()` в тестах
- Не забывай отключать msw в production

---

## FAQ и советы
- **Моки не работают?** — Проверь, что msw стартует до первого запроса
- **Нужно смокать ошибку?** — Используй `ctx.status(500)` и т.д.
- **Как посмотреть, что реально ушло на сервер?** — Открой вкладку Network в DevTools

---

**Моки — это удобно! Можно разрабатывать и тестировать даже без настоящего API.** 