1. (желательно) Если Windows - установить WSL
2. Установить NodeJs через `nvm`
3. Если в проекте есть `package.json` -- то нужно написать npm i
4. Если нет `package.json`
   1. `npm init -y`
   2. Если git не проинициализирован, то `git init`
   3. Установить ESLint `npx eslint --init` или `npm init @eslint/config`
      1. Проверить его настройку для вашего IDE
      2. Для VSCode: Ctrl+Shift+P, выбрать User settings.json
      3. проверить настройки:
```json
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "files.autoSave": "afterDelay"
```
   4. Добавить .gitignore `npx gitignore node`
   5. Прописать `start` скрипт
  
ingitwetrust