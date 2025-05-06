# How to add a feature: Пошаговый гайд

---

## 1. Создай новую ветку для своей задачи
```bash
git checkout -b feature/your-feature-name
```

---

## 2. Добавь компонент (например, страницу)
1. Создай файл в нужной папке, например:
   - `src/components/pages/ContactPage.tsx`
2. Пример простого компонента:
   ```tsx
   import React from 'react';
   const ContactPage: React.FC = () => (
     <div>
       <h1>Contact us</h1>
       <p>Свяжитесь с нами через форму ниже.</p>
     </div>
   );
   export default ContactPage;
   ```

---

## 3. Добавь роутинг для страницы
- Открой `src/App.tsx` и добавь:
  ```tsx
  import ContactPage from 'components/pages/ContactPage';
  // ...
  <Route path="/contact" element={<ContactPage />} />
  ```
- Добавь ссылку в навигацию (например, через NavItem)

---

## 4. Добавь стили (Tailwind)
- Используй utility-классы прямо в JSX:
  ```tsx
  <h1 className="text-2xl font-bold mb-4">Contact us</h1>
  ```

---

## 5. Напиши тест для нового компонента
- Создай файл рядом: `ContactPage.test.tsx`
  ```tsx
  import { render, screen } from '@testing-library/react';
  import ContactPage from './ContactPage';
  test('на странице есть заголовок', () => {
    render(<ContactPage />);
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });
  ```
- Запусти тесты: `npm test`

---

## 6. Сделай коммит и пуш
```bash
git add .
git commit -m "feat: add ContactPage with route and test"
git push origin feature/your-feature-name
```

---

## 7. Открой Pull Request (PR)
- На GitHub/GitLab/Bitbucket — создай PR из своей ветки в main
- В описании опиши, что добавил, как проверить, есть ли что-то важное для ревью

---

## 8. Дождись ревью и внеси правки, если нужно
- Исправь замечания, если есть
- После одобрения — PR сольют в main

---

## Best practices
- Одна фича — одна ветка — один PR
- Пиши тесты и обновляй документацию
- Не забывай про линтер и форматтер перед коммитом
- Если фича большая — дели на подзадачи

---

**Добавлять фичи — это просто! Главное — делай это по шагам и не бойся спрашивать.**

## См. также
- [Architecture: как устроен проект](./Architecture.md)
- [Atomic Design: структура и примеры](./atomic-design-structure.md)
- [Testing Guide](./Testing-guide.md)
- [RTK & RTK Query](./rtk-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md) 