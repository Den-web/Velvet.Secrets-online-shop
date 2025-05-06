# Architecture: Как устроен проект

---

## Почему такая структура?
- Atomic Design — чтобы компоненты были переиспользуемыми и масштабируемыми
- Redux Toolkit + RTK Query — для централизованного и удобного управления состоянием и API
- Tailwind — для быстрой и консистентной стилизации
- Vite + TypeScript — для скорости и безопасности

---

## Основные части проекта
- **components/** — UI-компоненты по Atomic Design (atoms, molecules, organisms, templates, pages)
- **store/** — глобальное состояние (Redux Toolkit, RTK Query)
- **App.tsx** — роутинг и главный layout
- **assets/** — картинки, иконки и т.д.
- **mocks/** — моки для API (msw)

---

## Как всё связано (упрощённая схема)

```
[User]
  ↓
[Page] (pages/)
  ↓
[Template] (templates/)
  ↓
[Organism] (organisms/)
  ↓
[Molecule] (molecules/)
  ↓
[Atom] (atoms/)
  ↓
[UI]

[Page] ↔ [store] ↔ [api (RTK Query)] ↔ [mocks или реальный backend]
```

---

## Пример потока данных
1. Пользователь кликает кнопку (Atom)
2. Molecule/Organism вызывает экшен или RTK Query хук
3. Store обновляет состояние или делает запрос к API
4. Компоненты получают новые данные через useSelector/useGet...Query
5. UI обновляется

---

## Best practices
- Не смешивай логику и отображение: бизнес-логика — в store/api, UI — в компонентах
- Используй абсолютные импорты для удобства
- Пиши атомы максимально простыми, а страницы — только для роутинга и данных
- Для новых фич — отдельные папки/слайсы/компоненты

---

## Советы
- Если не знаешь, куда положить компонент — начни с atoms/molecules
- Для сложных фич делай отдельные организмы и шаблоны
- Не бойся рефакторить структуру по мере роста проекта

---

**Эта архитектура — не догма, а удобная отправная точка. Если что-то мешает — обсуждай и меняй!**

## См. также
- [Atomic Design: структура и примеры](./atomic-design-structure.md)
- [README](./README.md)
- [How to add a feature](./How-to-add-feature.md)
- [RTK & RTK Query](./rtk-guide.md)
- [Testing Guide](./Testing-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md)