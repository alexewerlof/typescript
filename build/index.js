"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const feeeky_1 = require("./feeeky");
/**
 * Do something
 * @param message - the message to print
 * @return the value that should be returned
 */
function say(message, strong = false) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        console.log(feeeky_1.bye(message));
        return true;
    });
}
say('Alex');
//# sourceMappingURL=index.js.map