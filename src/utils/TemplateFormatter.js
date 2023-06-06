// utility script to replace keyword values in the string
// main difference between template literals and this are:
// string could be represented with '' synmbols instead of ``
// and most importantly it is reusable and dynamicaly replaces placeholder values
// rather than forcing static linking as in case of JS template literals
// also consider that you can pass arrays too as a formatter as well as objects

// Usage:
// import {FormatTemplate} from 'utils'
// const stringToBeFormatted = 'My name is {NAME_PLACEHOLDER} {SURNAME_PLACEHOLDER}. Hi from {NAME_PLACEHOLDER}';
// const formatter = {NAME_PLACEHOLDER: 'john', SURNAME_PLACEHOLDER: 'smith'};
// const stringFormatted = FormatTemplate(stringToBeFormatted, formatter);
// >>> 'My name is john smith. Hi from john'

// example with array formatter
// const stringToBeFormatted = 'My name is {0} {1}. Hi from {0}';
// const formatter = ['john', 'smith'];
// const stringFormatted = FormatTemplate(stringToBeFormatted, formatter);
// >>> 'My name is john smith. Hi from john'

const FormatTemplate = (str, obj) => str.replace(/{(.*?)}/g, (_, g) => obj[g]);

export default FormatTemplate;
