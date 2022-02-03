import { thirtyDays } from "../../constants";
import itemHasOldPassword from '../itemHasOldPassword';
import { IItem } from '../../services/userItems';

describe('should return true if password is old', () => {
    test.each([
        [
            false,
            {
                createdAt: new Date().toISOString(),
            }
        ],
        [
            true,
            {
                createdAt: new Date(new Date().getTime() - thirtyDays).toISOString(),
            }
        ],
    ])('should return %s', (expectedResult, item) => {
        expect(itemHasOldPassword(item as IItem)).toBe(expectedResult);
    })
});