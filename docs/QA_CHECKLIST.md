# TESTING & QA CHECKLIST

## 1. Functional Testing
- [ ] **Game Loop:** Verify start, gameplay, and win condition for all 12 missions.
- [ ] **Progress Save:** Reload page and ensure completed missions remain completed.
- [ ] **XP Calculation:** Ensure XP increments correctly after each mission.
- [ ] **Badges:** Verify badge unlock triggers immediately upon mission completion.
- [ ] **Hints:** Verify hints appear after idle time (2m, 5m, 8m).

## 2. UI/UX Testing
- [ ] **Responsiveness:** Test on Desktop (1920x1080), Laptop (1366x768), and Tablet (iPad Air).
- [ ] **Navigation:** Ensure no dead ends (e.g., back buttons work in all sub-menus).
- [ ] **Feedback:** Verify that every user click has visual/audio feedback.
- [ ] **Text:** Check for typos and Spanish grammar correctness.

## 3. Compatibility
- [ ] **Browsers:** Chrome, Firefox, Safari, Edge (latest versions).
- [ ] **Performance:** Maintain 60fps during robot animations.
- [ ] **Load Time:** Initial load under 3 seconds on 4G.

## 4. Accessibility (WCAG AA)
- [ ] **Keyboard:** Ensure entire game is navigable via Tab/Enter keys.
- [ ] **Contrast:** Check text contrast ratios (minimum 4.5:1).
- [ ] **Screen Reader:** Verify aria-labels on all interactive buttons.
- [ ] **Motion:** Respect "prefers-reduced-motion" settings.

## 5. Integration
- [ ] **Videos:** Verify YouTube links open in modal/new tab correctly.
- [ ] **Firebase:** Verify data writes to Firestore.
- [ ] **Auth:** Test Sign-in and Sign-out flows (if implemented).
