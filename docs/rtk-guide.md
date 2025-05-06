# RTK & RTK Query: Подробный гайд для новичков

---

## Что такое Redux Toolkit (RTK)?
Redux Toolkit — это современный способ работы с Redux. Он упрощает создание хранилища, редьюсеров и экшенов, избавляет от "болезни шаблонного кода" и делает работу с состоянием приложения быстрой и приятной.

**Зачем нужен RTK?**
- Меньше кода, больше смысла
- Автоматически защищает от мутаций
- Легко масштабировать проект

---

## Что такое RTK Query?
RTK Query — это инструмент для работы с асинхронными запросами (API) в Redux Toolkit. Он позволяет получать, кэшировать и обновлять данные с сервера без лишнего кода.

**Зачем нужен RTK Query?**
- Автоматически кэширует данные
- Упрощает работу с loading/error
- Позволяет не писать ручные экшены и редьюсеры для каждого запроса

---

## Пример: создание slice (корзина)

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

## Пример: RTK Query API (товары)

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

## Как собрать store

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

## Как использовать в компонентах

### Получить данные с сервера (RTK Query):
```tsx
import { useGetProductsQuery } from 'store/productsApi';
const { data, isLoading, error } = useGetProductsQuery();
```

### Добавить товар в корзину (RTK):
```tsx
import { useDispatch } from 'react-redux';
import { addItem } from 'store/cartSlice';
const dispatch = useDispatch();
dispatch(addItem({ id: '1', name: 'Товар', price: 100 }));
```

### Получить товары из корзины:
```tsx
import { useSelector } from 'react-redux';
const items = useSelector((state) => state.cart.items);
```

---

## Типичные паттерны
- **Loading/Error:**
  ```tsx
  if (isLoading) return <div>Загрузка...</div>;
  if (error) return <div>Ошибка!</div>;
  ```
- **Добавление/удаление:**
  ```tsx
  <Button onClick={() => dispatch(addItem(product))}>В корзину</Button>
  <Button onClick={() => dispatch(removeItem(product.id))}>Удалить</Button>
  ```

---

## FAQ и советы
- **RTK Query не делает запрос?** — Проверь, что компонент реально отрисовывается и хук вызывается.
- **Ошибка типов?** — Проверь, что все типы импортируются через `import type { ... }`.
- **Как добавить новый endpoint?** — Просто добавь новый builder-метод в `endpoints`.
- **Как сбросить кэш?** — Используй методы RTK Query (`refetch`, `resetApiState`).

---

**RTK и RTK Query — это быстро, удобно и современно. Не бойся экспериментировать и читать официальную документацию!**

## См. также
- [Architecture: как устроен проект](./Architecture.md)
- [How to add a feature](./How-to-add-feature.md)
- [Testing Guide](./Testing-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md) 