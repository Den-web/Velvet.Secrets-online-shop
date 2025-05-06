# Linting & Formatting

## Overview

This project uses **ESLint** for code quality and **Prettier** for code formatting. Both are enforced via scripts and editor integrations.

---

## ESLint

### Config

- Config file: `eslint.config.js` (flat config, modern style)
- Extends:
  - `@eslint/js` (recommended)
  - `typescript-eslint` (recommended)
- Plugins:
  - `react-hooks`
  - `react-refresh`
- Ignores: `dist/`

### Key Rules

- All recommended rules for JS, TypeScript, and React Hooks
- Warn if React components are not exported in a way compatible with React Fast Refresh (`react-refresh/only-export-components`)
- ECMAScript 2020, browser globals

### Usage

- Lint all files:
  ```sh
  npm run lint
  ```
- Lint on save: Most editors (VSCode) will auto-lint if you have the ESLint extension.

### Fixing Issues

- Auto-fix:
  ```sh
  npx eslint . --fix
  ```

---

## Prettier

- Prettier is installed, but no custom config found—defaults are used.
- To add custom rules, create `.prettierrc` or `prettier.config.js` in the root.

### Usage

- Format all files:
  ```sh
  npx prettier . --write
  ```
- Format on save: Enable the Prettier extension in your editor.

---

## Best Practices

- **Run lint and format before every commit.**
- Use editor extensions for real-time feedback.
- Keep config in sync with team preferences.
- Add/adjust rules in `eslint.config.js` as needed.

---

## Troubleshooting

- **ESLint not working in editor?**
  - Make sure you have the ESLint extension installed.
  - Check that your editor is using the workspace version of ESLint.
- **Prettier not formatting?**
  - Install the Prettier extension.
  - Check for conflicting formatters (disable built-in or other formatters).
- **TypeScript errors in lint?**
  - Make sure your files are valid TypeScript.
  - Check `typescript-eslint` version compatibility.

---

## See also

- [FAQ](FAQ.md)
- [Troubleshooting](Troubleshooting.md)
- [Contributing](Contributing.md)
- [Onboarding](Onboarding.md)

## См. также
- [README](./README.md)
- [Architecture: как устроен проект](./Architecture.md)
- [How to add a feature](./How-to-add-feature.md)
- [Testing Guide](./Testing-guide.md)
- [Troubleshooting](./Troubleshooting.md)
- [Полезные ссылки](./Useful-links.md)

--- 