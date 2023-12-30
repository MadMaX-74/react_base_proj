import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginPassword test', () => {
    test('should return username test', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                username: 'test',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('test');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
