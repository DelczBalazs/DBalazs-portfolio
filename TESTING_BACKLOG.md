# Testing Backlog

This file tracks future test improvements and refinements for the portfolio.
Current suite: Vitest + React Testing Library (+ user-event), jest-axe, jsdom with global setup.

---

## 1. Navbar & layout behavior

- [ ] **Navbar scroll / auto-hide logic**
  - Extract the scroll handler logic into a small helper or testable function.
  - Write unit tests that simulate different `window.scrollY` values and verify:
    - Sticky / hidden class names or state changes are applied correctly.
    - The navbar behaves correctly around the “threshold” scroll value.
  - Goal: prevent regressions in the “hide after X px” UX.

---

## 2. Theme handling & visual states

- [ ] **`useTheme` hook behavior**
  - Unit test the hook in isolation:
    - Detects system theme correctly.
    - Reads and writes theme to `localStorage`.
    - Applies/removes the correct `data-theme` / class on `document.documentElement` (or the chosen root).
  - Verify that changing theme does not cause errors in a non-browser (jsdom) environment.

- [ ] **DarkModeToggle active/selected state**
  - In addition to checking that `setTheme` is called with `'light' | 'system' | 'dark'`, assert:
    - The correct button receives the “active” styling class (e.g. `bg-[#69b7e42c]` or equivalent).
    - The previously active button is visually deactivated.
  - Optional: use a snapshot or `toHaveClass` assertions to lock in the visual state.

- [ ] **ColorfulText a11y nuance (aria-label vs sr-only)**
  - Decide on a single strategy to avoid double announcement for screen readers:
    - Either keep `aria-label` on the wrapper and remove the inner `sr-only` text, **or**
    - Remove `aria-label` and rely solely on the `<span class="sr-only">…</span>` content.
  - Once the strategy is chosen, add a focused test that:
    - Confirms the accessible name for the `ColorfulText` wrapper matches the expected label.
    - Ensures there is no duplicated, confusing announcement in the accessibility tree.

---

## 3. Projects carousel interactions

- [ ] **AppleCardsCarousel interactions**
  - Simulate keyboard and mouse interactions:
    - Clicking cards opens the detailed state (if applicable).
    - Ensure Escape / close actions work as expected.
    - Verify focus management remains sensible when cycling through cards.
  - Guard against regressions in the scroll container and arrow-button behavior:
    - Clicking “next”/“prev” adjusts scroll position.
    - Disabled state on arrows is respected at boundaries.

- [ ] **Hidden/accessible links for projects**
  - The current implementation exposes Repo / Live demo links both visually (inside the card) and via the sr-only block.
  - Add tests that confirm:
    - All Repo links have `target="_blank"` and `rel="noopener"`.
    - “Live demo” links are correctly named and discoverable via `getByRole('link', { name: /live demo/i })`.

---

## 4. Component-level accessibility checks

- [ ] **Hero / Contact / About a11y smoke tests**
  - Run `axe` against individual sections:
    - `<Hero />`
    - `<Contact />`
    - `<About />`
  - This catches local issues earlier and keeps the full `<App />` axe run as a final “smoke test” only.
  - Consider a lightweight helper to render a component and run axe with a common configuration.

- [ ] **Global jest-axe setup consistency**
  - Decide on a consistent pattern for asserting axe results:
    - Option A: keep `expect.extend({ toHaveNoViolations })` in `setupTests` and use `expect(results).toHaveNoViolations()` everywhere.
    - Option B: remove the matcher extension and standardize on `expect(results.violations).toHaveLength(0)`.
  - Update:
    - `setupTests` to match the chosen approach.
    - `App.a11y.test.tsx` (and any future a11y tests) to use the same pattern.
  - Goal: avoid confusion where some tests use `toHaveNoViolations()` and others manually inspect `results.violations`.

---

## 5. Misc / nice-to-have

- [ ] **Additional hover/CTA interaction tests**
  - Hero CTAs: ensure buttons/links navigate to the expected anchors or routes.
  - Footer CTAs: verify `target="_blank"` and `rel="noopener"` on social links continue to be enforced even if Button defaults change.
