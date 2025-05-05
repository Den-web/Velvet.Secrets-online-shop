# Testing Guide: Тестирование компонентов и логики

---

## Зачем писать тесты?
- Проверяют, что код работает как задумано
- Помогают не сломать старое при добавлении нового
- Ускоряют ревью и делают проект надёжнее

---

## Что тестировать?
- Атомы: отображение, обработка кликов
- Молекулы: взаимодействие между атомами
- Организмы/страницы: интеграция, работа с данными
- Redux/RTK Query: редьюсеры, экшены, запросы

---

## Как подключить тесты
1. Установи зависимости:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom jest
   ```
2. Добавь в package.json:
   ```json
   "scripts": {
     "test": "jest"
   }
   ```
3. Создай файл конфига (если нужно): `jest.config.js`
   ```js
   module.exports = {
     testEnvironment: 'jsdom',
     setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
     moduleNameMapper: {
       '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
     },
   };
   ```

---

## Пример теста для атома (Button)
`src/components/atoms/Button.test.tsx`:
```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

test('кнопка отображает текст и реагирует на клик', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Click me</Button>);
  expect(screen.getByText('Click me')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
```

---

## Пример теста для страницы
`src/components/pages/HomePage.test.tsx`:
```tsx
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('на главной есть приветствие', () => {
  render(<HomePage />);
  expect(screen.getByText(/welcome/i)).toBeInTheDocument();
});
```

---

## Как запускать тесты
```bash
npm test
```
или
```bash
npx jest
```

---

## Best practices
- Пиши тесты сразу к новым компонентам
- Не тестируй то, что не имеет логики (например, чистый layout)
- Используй screen и userEvent/fireEvent для имитации действий пользователя
- Проверяй не только отображение, но и поведение
- Храни тесты рядом с компонентами или в папке `__tests__`

---

## FAQ и советы
- **Тесты не видят компонент?** — Проверь путь импорта
- **Ошибка "not a function"?** — Проверь, что экспортируешь компонент как default
- **Jest не видит стили?** — Добавь `identity-obj-proxy` в moduleNameMapper
- **Тесты не запускаются?** — Проверь версию Node.js и что все зависимости установлены

---

**Тесты — это не страшно! Начни с простого, и проект станет надёжнее.** 