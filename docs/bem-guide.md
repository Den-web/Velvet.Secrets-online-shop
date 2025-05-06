# BEM: Block-Element-Modifier — просто о главном

---

## Что такое BEM?
BEM (Block-Element-Modifier) — это методология именования CSS-классов, чтобы код был читаемым, масштабируемым и не конфликтовал между компонентами.

**Зачем нужен BEM?**
- Легко понять, где и за что отвечает класс
- Нет конфликтов между стилями разных блоков
- Удобно поддерживать большие проекты

---

## Как работает BEM?
- **Block** — независимый компонент (например, `card`)
- **Element** — часть блока, не может существовать без блока (например, `card__title`)
- **Modifier** — вариант или состояние блока/элемента (например, `card--active`, `card__title--big`)

---

## Синтаксис
- Блок: `.block`
- Элемент: `.block__element`
- Модификатор: `.block--modifier` или `.block__element--modifier`

---

## Пример
```html
<div class="card card--featured">
  <h2 class="card__title card__title--big">Заголовок</h2>
  <p class="card__desc">Описание</p>
  <button class="card__button">Купить</button>
</div>
```
```css
.card { ... }
.card--featured { border: 2px solid gold; }
.card__title { font-size: 1.2rem; }
.card__title--big { font-size: 2rem; }
.card__button { ... }
```

---

## Best practices
- Не сокращай имена: `btn` → `button`, `hdr` → `header`
- Не используй вложенность больше 2-3 уровней
- Для модификаторов используй только `--`, для элементов — только `__`
- Не пиши глобальные классы типа `.active`, всегда через модификатор: `.button--active`

---

## BEM и Tailwind
- В Tailwind utility-классы заменяют BEM для большинства задач
- Но если пишешь кастомный CSS или SCSS — BEM всё ещё актуален
- Можно комбинировать: структура компонентов по BEM, стилизация — через Tailwind

---

## Когда BEM особенно полезен?
- Когда много кастомных стилей
- Когда проект большой и работает несколько человек
- Когда нужен чистый, предсказуемый CSS

---

**BEM — это просто и удобно. Если нужен чистый CSS — используй BEM!**

## См. также
- [README](./README.md)
- [Architecture: как устроен проект](./Architecture.md)
- [Atomic Design: структура и примеры](./atomic-design-structure.md)
- [How to add a feature](./How-to-add-feature.md)
- [Testing Guide](./Testing-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md) 