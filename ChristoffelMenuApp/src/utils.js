/**
 * Helper function to calculate the average price of menu items based on course type.
 * @param {Array} menuItems - List of menu items.
 * @param {String} course - The course type (starter, main, dessert).
 * @returns {Number} The average price of the items in the specified course.
 */
export const calculateAveragePrice = (menuItems, course) => {
    const courseItems = menuItems.filter(item => item.course === course);
    
    if (courseItems.length === 0) return 0;
    
    const total = courseItems.reduce((sum, item) => sum + parseFloat(item.price), 0);
    return (total / courseItems.length).toFixed(2);  // Return average rounded to 2 decimal places
  };
  
  /**
   * Utility function to generate a unique ID for each menu item (to avoid duplicate key warnings in FlatList).
   * @returns {String} A unique identifier.
   */
  export const generateUniqueId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  