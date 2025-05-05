# Atomic Design: Подробная структура для новичков

Atomic Design — это методология организации компонентов интерфейса, которая помогает строить масштабируемые и переиспользуемые UI. Вся суть — разбивать интерфейс на "атомы", "молекулы", "организмы", "шаблоны" и "страницы".

---

## Основные уровни Atomic Design

### 1. Atoms (Атомы)
- **Что это:** Самые простые, неделимые элементы интерфейса.
- **Примеры:** Кнопка (`Button`), иконка (`Icon`), инпут (`Input`), лейбл (`Label`), логотип (`Logo`).
- **Где лежат:** `src/components/atoms/`
- **Пример:**
  ```tsx
  // src/components/atoms/Button.tsx
  import React from 'react';
  const Button = ({ children, ...props }) => (
    <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded">{children}</button>
  );
  export default Button;
  ```

---

### 2. Molecules (Молекулы)
- **Что это:** Простые комбинации атомов, которые вместе выполняют небольшую функцию.
- **Примеры:** Поле поиска (`SearchBar` = Input + Button), карточка товара (`ProductCard` = Image + Title + Price + Button).
- **Где лежат:** `src/components/molecules/`
- **Пример:**
  ```tsx
  // src/components/molecules/SearchBar.tsx
  import React from 'react';
  import Input from '../atoms/Input';
  import Button from '../atoms/Button';
  const SearchBar = () => (
    <div className="flex">
      <Input placeholder="Поиск..." />
      <Button>Найти</Button>
    </div>
  );
  export default SearchBar;
  ```

---

### 3. Organisms (Организмы)
- **Что это:** Сложные, самостоятельные блоки, состоящие из атомов и молекул. Обычно это большие части интерфейса.
- **Примеры:** Навигация (`Navigation`), хедер (`Header`), футер (`Footer`), список товаров (`ProductList`).
- **Где лежат:** `src/components/organisms/`
- **Пример:**
  ```tsx
  // src/components/organisms/Navigation.tsx
  import React from 'react';
  import Logo from '../atoms/Logo';
  import NavItem from '../molecules/NavItem';
  const Navigation = () => (
    <nav className="flex items-center justify-between">
      <Logo />
      <div className="flex gap-4">
        <NavItem to="/" label="Главная" />
        <NavItem to="/shop" label="Магазин" />
      </div>
    </nav>
  );
  export default Navigation;
  ```

---

### 4. Templates (Шаблоны)
- **Что это:** Макеты страниц, которые определяют структуру, но не содержат конкретных данных.
- **Примеры:** Главный шаблон (`MainTemplate`), шаблон страницы товара (`ProductTemplate`).
- **Где лежат:** `src/components/templates/`
- **Пример:**
  ```tsx
  // src/components/templates/MainTemplate.tsx
  import React from 'react';
  import Navigation from '../organisms/Navigation';
  const MainTemplate = ({ children }) => (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
  export default MainTemplate;
  ```

---

### 5. Pages (Страницы)
- **Что это:** Конкретные страницы приложения, которые используют шаблоны и наполняются данными.
- **Примеры:** Главная (`HomePage`), магазин (`ShopPage`), страница товара (`ProductPage`).
- **Где лежат:** `src/components/pages/`
- **Пример:**
  ```tsx
  // src/components/pages/ShopPage.tsx
  import React from 'react';
  import MainTemplate from '../templates/MainTemplate';
  import ProductList from '../organisms/ProductList';
  const ShopPage = () => (
    <MainTemplate>
      <h1>Магазин</h1>
      <ProductList />
    </MainTemplate>
  );
  export default ShopPage;
  ```

---

## Практические советы
- **Папки:** Всегда создавай отдельную папку для каждого уровня (`atoms`, `molecules`, ...).
- **Именование:** Компоненты называй с большой буквы, файлы — по компоненту (`Button.tsx`, `SearchBar.tsx`).
- **Переиспользование:** Если компонент может пригодиться в разных местах — это атом или молекула.
- **Организмы** — это уже "кусок страницы", который можно вставить в разные шаблоны.
- **Шаблоны** — только структура, без конкретных данных.
- **Страницы** — только для роутинга и наполнения данными.

---

## Пример структуры проекта
```
src/
  components/
    atoms/
      Button.tsx
      Input.tsx
      Logo.tsx
    molecules/
      SearchBar.tsx
      NavItem.tsx
    organisms/
      Navigation.tsx
      ProductList.tsx
    templates/
      MainTemplate.tsx
    pages/
      HomePage.tsx
      ShopPage.tsx
```

---

**Atomic Design помогает не запутаться в компонентах и строить большие проекты удобно и понятно!** 