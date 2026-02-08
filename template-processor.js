'use strict';

// Constructor function that stores the template string
function TemplateProcessor(template) {
  // Save the template so it can be used later
  this.template = template;
}

// Method that fills in the template using values from a dictionary
TemplateProcessor.prototype.fillIn = function (dictionary) {

  // Replace all placeholders of the form {{key}} in the template
  return this.template.replace(/{{(.*?)}}/g, function (match, key) {

    // Check if the dictionary actually contains the key
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {

      // If the key exists, replace the placeholder with its value
      return dictionary[key];
    }

    // If the key does not exist in the dictionary,
    // replace the placeholder with an empty string
    return '';
  });
};

// Make TemplateProcessor available in both browser and Node environments
if (typeof window !== 'undefined') {
  window.TemplateProcessor = TemplateProcessor;
} else if (typeof global !== 'undefined') {
  global.TemplateProcessor = TemplateProcessor;
}
