# Quark UI ⚛

A modern, high-performance React component library designed with a **dark-first aesthetic**, full **TypeScript support**, and scoped **CSS Modules**. Adaptable to both light and dark themes out of the box.

[![NPM Version](https://img.shields.io/npm/v/@quark-ui/react?color=7c3aed)](https://www.npmjs.com/package/@quark-ui/react)
[![License](https://img.shields.io/npm/l/@quark-ui/react?color=a78bfa)](https://github.com/KPV2004/quark-ui/blob/main/LICENSE)

---

## Features

- 🎨 **Dark-First Design**: Beautiful dark mode defaults with seamless light mode transitions.
- ⚡ **Zero Runtime CSS Overhead**: Styled using scoped CSS Modules. No heavy CSS-in-JS libraries.
- 🔒 **Type-Safe**: Written 100% in TypeScript with full autocompletion and type definitions.
- ♿ **Accessible**: Follows WAI-ARIA standards for keyboard navigation and screen-reader accessibility.
- 📦 **Feather Icons**: Built-in sleek icons powered by `react-icons/fi`.

---

## Installation

Install Quark UI and its peer dependencies via npm, yarn, or bun:

```bash
# Using bun (recommended)
bun add @kpv2004/quark-ui

# Using npm
npm install @kpv2004/quark-ui

# Using yarn
yarn add @kpv2004/quark-ui
```

---

## Setup & Stylesheets

To load the design tokens and base styles, import the stylesheet once at the entry point of your application (e.g., `main.tsx`, `index.tsx`, or `App.tsx`):

```tsx
import '@kpv2004/quark-ui/styles';
```

---

## Quick Start

Here is a quick example showing how to build a basic user card with Quark UI components:

```tsx
import React from 'react';
import { Card, Button, Avatar, Badge } from '@kpv2004/quark-ui';
import '@kpv2004/quark-ui/styles';

function App() {
  return (
    <div style={{ padding: '24px', display: 'flex', justifyContent: 'center' }}>
      <Card variant="elevated" padding="lg" hoverable style={{ width: '360px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <Avatar 
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix" 
            alt="User avatar" 
            size="lg" 
            status="online"
          />
          <div>
            <h3 style={{ margin: 0, color: 'var(--qk-text-1)' }}>Pannet V.</h3>
            <Badge variant="primary" size="sm" style={{ marginTop: '4px' }}>Lead Developer</Badge>
          </div>
        </div>
        
        <p style={{ color: 'var(--qk-text-2)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
          Building high-performance design systems using React, TypeScript, and CSS Modules.
        </p>
        
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="primary" size="sm" fullWidth>Follow</Button>
          <Button variant="secondary" size="sm" fullWidth>Message</Button>
        </div>
      </Card>
    </div>
  );
}
```

---

## Light & Dark Theme Toggle

Quark UI features native support for light and dark theme switching. By default, the library applies dark theme values. 

To toggle the **Light Theme**, simply add the `data-theme="light"` attribute to your root element (typically `<html>`):

```javascript
// Toggle to Light Theme
document.documentElement.setAttribute('data-theme', 'light');

// Toggle back to Dark Theme
document.documentElement.setAttribute('data-theme', 'dark');
```

---

## Components Included

| Component | Description |
| :--- | :--- |
| **`Button`** | Standard actions with primary, secondary, outline, ghost, loading, and icon options. |
| **`Card`** | Flex-padded container with default, outlined, elevated, and glassmorphism styles. |
| **`Input`** | Form fields with active labels, custom states, helper texts, validation errors, and prefix icons. |
| **`Toggle`** | Animated switch toggler supporting multiple sizes and disabled options. |
| **`Badge`** | Category/tag labels with various status colors (primary, success, warning, danger, info) and dot indicators. |
| **`Alert`** | Contextual notifications supporting dynamic feedback layouts and closing options. |
| **`Avatar`** | User avatar bubble supporting fallback initials, images, and live status dots. |
| **`Spinner`** | Minimalist customizable loading indicators. |

---

## License

This project is licensed under the [MIT License](https://github.com/KPV2004/quark-ui/blob/main/LICENSE) - see the LICENSE file for details.
