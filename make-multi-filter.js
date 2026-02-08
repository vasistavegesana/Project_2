'use strict';
/* exported MakeMultiFilter */

// Main function that takes the original array
function MakeMultiFilter(originalArray) {

    // currentArray keeps track of the filtered results over time
    // It starts out identical to the original array
    let currentArray = originalArray;

    // This function is returned and used to apply filters
    function arrayFilterer(filterCriteria, callback) {

        // If filterCriteria is not a function,
        // return the currentArray immediately (no filtering)
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }

        // Apply the filterCriteria function to currentArray
        // and update currentArray with the filtered result
        currentArray = currentArray.filter(filterCriteria);

        // If a callback function is provided,
        // call it after filtering is complete
        if (typeof callback === 'function') {

            // Call the callback with:
            // - currentArray as the argument
            // - originalArray as the value of `this`
            callback.call(originalArray, currentArray);
        }

        // Return arrayFilterer itself to allow chaining / nesting
        return arrayFilterer;
    }

    // Return the arrayFilterer function so it can be used externally
    return arrayFilterer;
}

// Make MakeMultiFilter available in both browser and Node environments
if (typeof window !== 'undefined') {
  window.MakeMultiFilter = MakeMultiFilter;
} else if (typeof global !== 'undefined') {
  global.MakeMultiFilter = MakeMultiFilter;
}
