//^ MODULE IMPORT FILE

import multiply from "./es6Mod1.mjs";            //* Default Import
import {add, subtract} from "./es6Mod1.mjs";     //* Named import

console.log(multiply(2,2));
console.log(add(2,2));