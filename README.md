<div align="center">

# 🚀 Expo Template

**Production-ready шаблон для React Native приложений**

[![Expo](https://img.shields.io/badge/Expo-54-blue.svg)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.81-green.svg)](https://reactnative.dev/)
[![React](https://img.shields.io/badge/React-19.1-61dafb.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

_Версия: 28.01.2026 (v2)_

</div>

---

## 📖 О проекте

Этот шаблон создан для **быстрого разворачивания мобильных приложений** на основе Expo + React Native.  
Включает все необходимые библиотеки для продакшена, готовый UI-kit с поддержкой темной темы и архитектуру FSD.

### ✨ Ключевые особенности

- 🎨 **Готовый UI-kit** с светлой и темной темой
- 🌍 **Локализация** (i18next) из коробки
- 🏗️ **FSD архитектура** для масштабируемости
- 📱 **Навигация** с табами и модальными окнами
- 🔄 **State Management** (Zustand + React Query)
- 🎯 **TypeScript** с полной типизацией
- 📝 **Формы** с валидацией (React Hook Form + Zod)

### 👥 Авторы

- [@roso1nik](https://github.com/roso1nik) — Core Architecture
- [@maofao](https://github.com/maofao) — UI Kit & Design

## 🛠️ Технологический стек

### Core

- **Expo** v54
- **React Native** v0.81
- **React** v19.1
- **TypeScript**

### State & Data

- **@tanstack/react-query** — серверное состояние и кэширование
- **zustand** — клиентское состояние
- **axios** — HTTP клиент

### Forms & Validation

- **react-hook-form** — управление формами
- **zod** — схемы валидации

### UI & Styling

- **expo-image** — оптимизированные изображения
- **lucide-react-native** — иконки
- **@expo/vector-icons** — векторные иконки
- **@gorhom/bottom-sheet** — bottom sheets
- **react-native-keyboard-controller** — управление клавиатурой

### Utilities

- **dayjs** — работа с датами
- **i18next** & **react-i18next** — интернационализация
- **@legendapp/list** — производительные списки

---

## 🚀 Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npx expo start
```

Используйте **Expo Go** на телефоне или запустите на эмуляторе:

- Нажмите `a` для Android
- Нажмите `i` для iOS
- Отсканируйте QR-код в Expo Go

### Сборка для продакшена

```bash
npm run prebuild
```

После этого можно собрать нативные приложения:

```bash
# Android
npx expo run:android

# iOS
npx expo run:ios
```

---

## 📁 Структура проекта (FSD)

```
📦 epxo-template
├── 📂 app/                    # 🔀 Роутинг и навигация
│   ├── _layout.tsx           # Root layout
│   ├── signIn.tsx            # Экран входа
│   ├── (modal)/              # Модальные окна
│   │   ├── notifications.tsx
│   │   └── settings.tsx
│   └── (tabs)/               # Табы навигации
│       ├── _layout.tsx
│       ├── index.tsx
│       └── profile.tsx
│
├── 📂 entities/               # 📊 Бизнес-сущности
│   └── index.ts              # (user, post, comment и т.д.)
│                             # Структура: api, model, ui, utils, hooks
│
├── 📂 features/               # ⚙️ Бизнес-логика
│   ├── index.ts
│   └── settings/
│       └── index.tsx
│
├── 📂 widgets/                # 🧩 Композитные компоненты
│   ├── cards.tsx
│   ├── notFound.tsx
│   ├── themeToggle.tsx
│   └── index.ts
│
└── 📂 shared/                 # 🔧 Переиспользуемые ресурсы
    ├── api/                  # API конфигурация
    ├── assets/               # Статичные ресурсы
    ├── config/               # Конфигурация приложения
    │   ├── app.ts            # Версия и настройки
    │   ├── api-query-keys.ts
    │   ├── storage-keys.ts
    │   └── global-dictionary.ts
    ├── const/                # Константы
    ├── hooks/                # Переиспользуемые хуки
    │   ├── use-color-scheme.ts
    │   ├── useDebounce.ts
    │   └── useSortField.ts
    ├── i18n/                 # 🌍 Интернационализация
    │   ├── translations/
    │   │   ├── en.json
    │   │   └── ru.json
    │   └── hooks/
    ├── libs/                 # Библиотеки (dayjs и др.)
    ├── providers/            # React провайдеры
    ├── styles/               # 🎨 Темы и цвета
    │   ├── colors.ts
    │   └── useThemeColor.ts
    ├── types/                # TypeScript типы
    ├── ui/                   # 🎨 UI-kit компоненты
    │   ├── button.tsx
    │   ├── input.tsx
    │   ├── typography.tsx
    │   └── index.ts
    └── utils/                # Утилиты
```

---

## 🎯 Основные возможности

### 🎨 UI Kit

Готовые компоненты с поддержкой темной темы:

- `Button` — кнопки с вариантами
- `Input` — инпуты с валидацией
- `Typography` — типографика
- `ThemeToggle` — переключатель темы

```tsx
import { Button, Input, Typography } from '@/shared/ui'
;<Button variant="primary" onPress={handlePress}>
    Нажми меня
</Button>
```

### 🌍 Локализация

Поддержка нескольких языков из коробки:

```tsx
import { useTranslation } from '@/shared/i18n'

const { t } = useTranslation()
;<Text>{t('welcome.title')}</Text>
```

---

## ⚙️ Конфигурация

### Версия приложения

Обновляется в трех местах:

- [`shared/config/app.ts`](shared/config/app.ts)
- [`app.json`](app.json)
- [`package.json`](package.json)

### Навигация

Настройка роутинга в директории [`app/`](app/):

- **Табы** — `(tabs)/`
- **Модальные окна** — `(modal)/`

### Темы и цвета

Настройка в [`shared/styles/colors.ts`](shared/styles/colors.ts):

```ts
export const colors = {
    light: {
        /* светлая тема */
    },
    dark: {
        /* темная тема */
    }
}
```

---

## 📚 Полезные команды

```bash
# Запуск с очисткой кэша
npx expo start --clear

# Обновление зависимостей
npx expo install --fix

# Проверка типов
npx tsc --noEmit

# Генерация нативных файлов
npx expo prebuild
```

## 📄 Лицензия

Этот проект доступен для свободного использования.

<div align="center">

**Сделано с ❤️ для React Native сообщества**

</div>
