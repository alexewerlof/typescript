"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const feeeky = require("./feeeky");
describe('feeeky', () => {
    describe('bye()', () => {
        it('should say "Bye NAME"', () => {
            chai_1.expect(feeeky.bye('Alice')).to.equal('Bye Alice');
        });
    });
});
//# sourceMappingURL=feeeky.spec.js.map