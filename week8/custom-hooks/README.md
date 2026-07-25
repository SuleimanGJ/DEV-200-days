# The 3 Rules Of Custom Hooks

## Rule 1 — Always start with “use”

jsx

// BAD — React won't recognize this as a hook 😱
function fetchUser() { ... }

// GOOD ✅
function useFetchUser() { ... }

## Rule 2 — Only call hooks at the top level

No hooks inside conditions or loops — always at the top of the function.


## Rule 3 — Each component gets its own state

Two components using the same custom hook don’t share state. Each gets its own independent copy.


# When To Create A Custom Hook
## Create one when:

✅ Same stateful logic appears in 2+ components
✅ A component has too many hooks and is hard to read
✅ You want to test logic separately from UI

## Don’t create one when:

❌ Logic is only used in one place and is simple
❌ You’re just wrapping a single useState call



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
