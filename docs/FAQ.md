# FAQ: Частые вопросы и ответы

---

### 1. Проект не запускается / ошибка при npm install
- Проверь версию Node.js (лучше >= 18)
- Удали `node_modules` и `package-lock.json`, затем снова `npm install`

---

### 2. Не работает роутинг (переходы между страницами)
- Убедись, что используешь `<BrowserRouter>` и `<Routes>` из `react-router-dom`
- Проверь, что пути в `<Route path="..." />` совпадают с теми, что в `<NavItem to="..." />`

---

### 3. Как добавить новую страницу?
1. Создай компонент в `src/components/pages/` (например, `AboutPage.tsx`)
2. Добавь `<Route path="/about" element={<AboutPage />} />` в `App.tsx`
3. Добавь ссылку в навигацию через `NavItem`

---

### 4. Как подключить новый API endpoint через RTK Query?
1. Добавь новый endpoint в `productsApi.ts`:
   ```ts
   getUsers: builder.query<User[], void>({ query: () => 'users' })
   ```
2. Экспортируй хук: `export const { useGetUsersQuery } = api;`
3. Используй в компоненте: `const { data } = useGetUsersQuery();`

---

### 5. Как добавить новое поле/состояние в Redux?
1. Добавь поле в initialState в слайсе
2. Добавь редьюсер/экшен
3. Импортируй экшен и диспатчь его в компоненте

---

### 6. Tailwind-классы не работают
- Проверь, что в `tailwind.config.js` правильный путь в `content`
- Убедись, что в `index.css` есть все три директивы Tailwind
- Перезапусти dev-сервер после изменений

---

### 7. Линтер/Prettier ругается на типы или импорты
- Импортируй типы через `import type { ... }`
- Запусти `npx eslint src --fix` и `npx prettier --write src`

---

### 8. Как добавить компонент в нужный уровень Atomic Design?
- **Atom:** если это базовый элемент (кнопка, инпут, иконка)
- **Molecule:** если это комбинация атомов (SearchBar = Input + Button)
- **Organism:** если это крупный блок (Navigation, ProductList)
- **Template:** если это макет страницы
- **Page:** если это отдельная страница для роутинга

---

### 9. Как сделать адаптивную верстку с Tailwind?
- Используй брейкпоинты: `md:p-8`, `lg:text-xl`, `sm:flex-col`
- Документация: https://tailwindcss.com/docs/responsive-design

---

### 10. Как сбросить кэш RTK Query?
- Используй хук `api.util.resetApiState()` или метод `refetch` у запроса

---

### 11. Как добавить тесты?
- Установи `@testing-library/react` и `jest`
- Пиши тесты в папке `__tests__` или рядом с компонентом

---

### 12. Где искать ответы, если ничего не помогает?
- Официальная документация (React, Redux Toolkit, RTK Query, Tailwind, ESLint)
- StackOverflow
- Спроси у ментора или в чате проекта

---

**Если не нашёл ответ — не стесняйся спрашивать!**

## См. также
- [README](./README.md)
- [Architecture: как устроен проект](./Architecture.md)
- [How to add a feature](./How-to-add-feature.md)
- [Testing Guide](./Testing-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md) 