# Troubleshooting: Решение типовых ошибок

---

## 1. Ошибка при npm install / npm run dev
**Ошибка:** `node: command not found` или `npm ERR!`/`Cannot find module ...`
- **Причина:** Node.js не установлен или слишком старая версия
- **Решение:**
  - Установи Node.js LTS (>= 18) с [официального сайта](https://nodejs.org/)
  - Проверь: `node -v`, `npm -v`

---

## 2. Port already in use
**Ошибка:** `Error: listen EADDRINUSE: address already in use 5173`
- **Причина:** Порт уже занят другим процессом
- **Решение:**
  - Останови другой dev-сервер или перезапусти компьютер
  - Запусти на другом порту: `npm run dev -- --port=3000`

---

## 3. Module not found / Cannot find module
**Ошибка:** `Module not found: Can't resolve '...'`
- **Причина:** Ошибка в пути импорта или не установлена зависимость
- **Решение:**
  - Проверь путь в импорте (регистр букв, абсолютный/относительный путь)
  - Проверь, что пакет установлен: `npm install <package>`

---

## 4. TypeScript error: Cannot find type declarations
**Ошибка:** `Cannot find module ... or its corresponding type declarations`
- **Причина:** Не установлены типы для библиотеки
- **Решение:**
  - Установи типы: `npm install @types/имя_пакета --save-dev`

---

## 5. ESLint/Prettier ругается на типы или импорты
**Ошибка:** `'PayloadAction' is a type and must be imported using a type-only import ...`
- **Причина:** TypeScript strict mode + неправильный импорт типа
- **Решение:**
  - Импортируй типы так: `import type { PayloadAction } from '@reduxjs/toolkit'`

---

## 6. Tailwind классы не работают
**Ошибка:** Стили не применяются, классы не работают
- **Причина:** Ошибка в настройке Tailwind
- **Решение:**
  - Проверь `content` в `tailwind.config.js`
  - Убедись, что в `index.css` есть все три директивы Tailwind
  - Перезапусти dev-сервер

---

## 7. RTK Query не делает запрос
**Ошибка:** Нет данных, нет запроса в network
- **Причина:** Хук не вызывается или компонент не отрисовывается
- **Решение:**
  - Проверь, что хук RTK Query реально используется в компоненте
  - Проверь, что компонент точно монтируется

---

## 8. Git: merge conflict
**Ошибка:** `CONFLICT (content): Merge conflict in ...`
- **Причина:** Изменения в двух ветках затрагивают одни и те же строки
- **Решение:**
  - Открой файл, найди конфликтные места (между `<<<<<<<` и `>>>>>>>`)
  - Оставь нужный вариант, убери конфликтные маркеры
  - Добавь файл: `git add ...`
  - Заверши merge/rebase: `git commit` или `git rebase --continue`

---

## 9. Ошибка "You do not have permission to push to this repository"
- **Причина:** Нет прав на запись в репозиторий
- **Решение:**
  - Форкни репозиторий и работай в своей копии
  - Попроси доступ у владельца

---

## 10. Не работает hot reload (изменения не видны)
- **Причина:** Кэш браузера или dev-сервер завис
- **Решение:**
  - Перезапусти dev-сервер
  - Обнови страницу с очисткой кэша (Ctrl+Shift+R)

---

**Если не нашёл свою ошибку — спроси у ментора или добавь её сюда!** 