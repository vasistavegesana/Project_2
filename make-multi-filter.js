'use strict';
/* exported MakeMultiFilter */

function MakeMultiFilter(originalArray) {
    let currentArray = originalArray;

    function arrayFilterer(filterCriteria, callback) {
        if (typeof filterCriteria !== 'function') {
            return currentArray;
        }

        currentArray = currentArray.filter(filterCriteria);

        if (typeof callback === 'function') {
            callback.call(originalArray, currentArray);
        }

        return arrayFilterer;
    }

    return arrayFilterer;
}

if (typeof window !== 'undefined') {
  window.MakeMultiFilter = MakeMultiFilter;
} else if (typeof global !== 'undefined') {
  global.MakeMultiFilter = MakeMultiFilter;
}

