# Christoffel's Menu App

This is a React Native application that allows a chef to manage a menu, including adding, removing, and filtering menu items by course. It also calculates the average price of items by course.

## Features:
- Add menu items with details like name, course (starter, main, dessert), and price.
- View the menu with average prices displayed for each course.
- Filter the menu by course.
- Remove items from the menu.

---

## Changelog

### **Version 1.0.0 - Initial Release**
- Created the initial app with the following features:
  - Added a simple menu management system.
  - Added functionality to view, add, and remove menu items.
  - Implemented basic UI components for adding and displaying items.

### **Version 1.1.0 - Refactor and Enhancements**
- **Refactored App Structure:**
  - Modularized components into separate files: `HomeScreen.js`, `AddMenuScreen.js`, and `FilterMenuScreen.js`.
  - Moved utility functions to `utils.js` to handle average price calculation and unique ID generation.
- **Styling Improvements:**
  - Moved all styles to `styles.js` to centralize UI styling.
  - Improved button and input field styles for consistency.
- **State Management:**
  - Managed state in `App.js` for menu items and passed them as props to other screens.
  - Implemented the removal of menu items on the `HomeScreen`.
- **Added Average Price Calculation:**
  - Displayed average prices for each course (starter, main, dessert) on `HomeScreen`.
- **Filter Menu Items by Course:**
  - Implemented a filter on `FilterMenuScreen` to allow users to filter by course.
