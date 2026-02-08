'use strict';

function TemplateProcessor(template) {
  this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionary) {
  return this.template.replace(/{{(.*?)}}/g, function (match, key) {
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      return dictionary[key];
    }
    return '';
  });
};

if (typeof window !== 'undefined') {
  window.TemplateProcessor = TemplateProcessor;
} else if (typeof global !== 'undefined') {
  global.TemplateProcessor = TemplateProcessor;
}

