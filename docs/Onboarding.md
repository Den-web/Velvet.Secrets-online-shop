# Onboarding: Первый день в проекте

---

## 1. Клонируй репозиторий
```bash
git clone https://github.com/your-org/Velvet.Secrets-online-shop.git
cd Velvet.Secrets-online-shop
```

---

## 2. Установи Node.js (если ещё не установлен)
- Скачай с [официального сайта](https://nodejs.org/) (лучше LTS, >= 18)
- Проверь версию:
  ```bash
  node -v
  npm -v
  ```

---

## 3. Установи зависимости
```bash
npm install
```

---

## 4. Запусти проект
```bash
npm run dev
```
- Открой браузер и перейди по адресу, который покажет терминал (обычно http://localhost:5173)
- Должна открыться главная страница приложения

---

## 5. Сделай первую правку и коммит
1. Открой проект в VSCode или другом редакторе
2. Измени любой текст (например, заголовок на главной странице)
3. Сохрани файл
4. Проверь, что изменения появились в браузере
5. Добавь изменения в git:
   ```bash
   git checkout -b test/onboarding
   git add .
   git commit -m "test: change main page title for onboarding"
   git push origin test/onboarding
   ```

---

## 6. Открой Pull Request (PR)
- Перейди на GitHub/GitLab/Bitbucket
- Создай PR из своей ветки в main
- В описании напиши, что сделал (например, "Изменил заголовок для теста")
- Дождись ревью и слияния

---

## 7. Если что-то не работает
- Проверь FAQ.md и другие гайды в проекте
- Перезапусти dev-сервер
- Проверь, что нет ошибок в терминале и браузере
- Спроси у ментора или в чате проекта

---

## См. также
- [README](./README.md)
- [Architecture: как устроен проект](./Architecture.md)
- [How to add a feature](./How-to-add-feature.md)
- [Testing Guide](./Testing-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md)

**Добро пожаловать! Не бойся экспериментировать и задавать вопросы — здесь все учатся!** 