import { expect } from 'chai';
import * as feeeky from './feeeky';

describe('feeeky', () => {
    describe('bye()', () => {
        it('should say "Bye NAME"', () => {
            expect(feeeky.bye('Alice')).to.equal('Bye Alice');
        });
    });
});
