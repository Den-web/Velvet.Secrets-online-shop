# Полный флоу создания и настройки приложения (React + Vite + TypeScript + Redux Toolkit + RTK Query + Atomic Design + Tailwind + ESLint/Prettier)

---

## 1. Создание проекта

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
```

---

## 2. Установка зависимостей

```bash
npm install @reduxjs/toolkit react-redux
npm install @reduxjs/toolkit/query react-router-dom
npm install -D tailwindcss postcss autoprefixer
npm install eslint prettier
```

---

## 3. Инициализация Tailwind

```bash
npx tailwindcss init -p
```

- В `tailwind.config.js` добавь:
  ```js
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  ```
- В `src/index.css` добавь в начало:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## 4. Абсолютные импорты (vite.config.ts)

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      store: path.resolve(__dirname, 'src/store'),
    },
  },
});
```

---

## 5. Структура Atomic Design

```bash
mkdir -p src/components/atoms src/components/molecules src/components/organisms src/components/templates src/components/pages src/store
```

---

## 6. Пример атома (Button)

`src/components/atoms/Button.tsx`:
```tsx
import React from 'react';
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { children: React.ReactNode };
const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">{children}</button>
);
export default Button;
```

---

## 7. Пример RTK Slice (cart)

`src/store/cartSlice.ts`:
```ts
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export type CartItem = { id: string; name: string; price: number };
interface CartState { items: CartItem[]; }
const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => { state.items.push(action.payload); },
    removeItem: (state, action: PayloadAction<string>) => { state.items = state.items.filter(item => item.id !== action.payload); },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
```

---

## 8. Пример RTK Query API

`src/store/productsApi.ts`:
```ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export type Product = { id: string; name: string; price: number };
export const api = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({ query: () => 'products' }),
  }),
});
export const { useGetProductsQuery } = api;
```

---

## 9. Конфигурируем store

`src/store/index.ts`:
```ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import { api } from './productsApi';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

---

## 10. Подключаем Redux Provider

`src/main.tsx`:
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

---

## 11. Пример страницы с RTK Query и Redux

`src/components/pages/ShopPage.tsx`:
```tsx
import React from 'react';
import { useGetProductsQuery } from 'store/productsApi';
import { useDispatch } from 'react-redux';
import { addItem } from 'store/cartSlice';
import Button from 'components/atoms/Button';

const ShopPage: React.FC = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading products...</div>;
  if (error) return <div>Error loading products.</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <ul>
        {products?.map((product) => (
          <li key={product.id} className="mb-4 p-4 border rounded flex justify-between items-center">
            <span>{product.name} - ${product.price}</span>
            <Button onClick={() => dispatch(addItem(product))}>Add to Cart</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ShopPage;
```

---

## 12. ESLint + Prettier

- Настрой `.eslintrc` и `.prettierrc` (можно взять из шаблонов или сгенерировать через `npx eslint --init`).
- Запуск:  
  ```bash
  npx eslint src
  npx prettier --write src
  ```

---

## 13. Запуск проекта

```bash
npm run dev
```

---

**Всё!**  
Теперь у тебя современный, масштабируемый проект с понятной структурой, типами, редаксом, RTK Query, Tailwind и линтингом.  
Дальше просто добавляй новые атомы, молекулы, страницы, фичи и API-эндпоинты по аналогии.

Если нужно — могу расписать, как добавить тесты, моковые API, или пример с корзиной и селекторами. 