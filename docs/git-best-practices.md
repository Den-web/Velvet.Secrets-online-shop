# Git: лучшие практики и команды для подготовки кода к загрузке

---

## 1. Всегда работай в отдельной ветке
- Не пиши код сразу в `main`/`master`!
- Создай новую ветку для каждой задачи/фичи/фикса:
  ```bash
  git checkout -b feature/my-new-feature
  # или для бага
  git checkout -b fix/bug-description
  ```

---

## 2. Перед коммитом — проверь и почисти код
- Запусти линтер и форматтер:
  ```bash
  npx eslint src
  npx prettier --write src
  ```
- Убедись, что проект собирается (`npm run build` или `npm run dev` без ошибок)
- Проверь, что не добавил лишние файлы (node_modules, .env и т.д.)

---

## 3. Делаем коммит
- Добавь изменения:
  ```bash
  git add .
  ```
- Пиши осмысленные сообщения к коммитам (на английском или русском, главное — понятно):
  ```bash
  git commit -m "feat: add product card component"
  # или
  git commit -m "fix: correct cart total calculation"
  ```
- Не делай коммиты типа "update", "fix bug", "123"

---

## 4. Перед пушем — подтяни main и реши конфликты
- Всегда обновляй свою ветку перед пушем:
  ```bash
  git fetch origin
  git checkout main
  git pull
  git checkout feature/my-new-feature
  git merge main
  # или git rebase main
  ```
- Реши конфликты, если есть

---

## 5. Пушим ветку
```bash
git push origin feature/my-new-feature
```

---

## 6. Открываем Pull Request (PR)
- На GitHub/GitLab/Bitbucket — создай PR/MR из своей ветки в main
- В описании укажи, что сделано, на что обратить внимание
- Дождись ревью и не забывай отвечать на комментарии

---

## 7. Pre-commit хуки (автоматизация)
- Можно настроить автоматический запуск линтера/тестов перед каждым коммитом с помощью [husky](https://typicode.github.io/husky/#/):
  ```bash
  npx husky-init && npm install
  npx husky add .husky/pre-commit "npx eslint src && npx prettier --check src"
  git add .husky/pre-commit
  ```
- Теперь коммит не пройдет, если есть ошибки линтера или форматирования

---

## 8. Best practices
- **Одна задача — одна ветка — один PR**
- **Чаще коммить, но не по одной строке**
- **Пиши осмысленные сообщения**
- **Не коммить временные/секретные файлы**
- **Перед пушем — линт, тесты, сборка**
- **Не бойся делать rebase/merge — это часть работы**

---

## 9. Полезные команды
- Посмотреть статус:
  ```bash
  git status
  ```
- Посмотреть изменения:
  ```bash
  git diff
  ```
- Откатить файл:
  ```bash
  git checkout -- src/components/atoms/Button.tsx
  ```
- Удалить последний коммит (если не запушен):
  ```bash
  git reset --soft HEAD~1
  ```

---

**Git — твой друг. Не бойся экспериментировать, но всегда делай бэкап важного!** 