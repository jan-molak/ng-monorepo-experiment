import 'jest';
import { Person } from '../src';

describe('Person', () => {

    it('can be represented as string', () => {
        const p = new Person('James', 'Bond');

        expect(p.toString()).toEqual('James Bond');
    });
});
