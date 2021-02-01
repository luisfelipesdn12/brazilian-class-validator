import generateDecorator from '../utils/generateDecorator';
import { isPhone } from 'brazilian-values';

/**
 * Check if value is a valid brazilian phone number. It can check a wide
 * variety of formats optionally with DDI, DDD and the ninth digit.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Phone {
 *   @IsPhone()
 *   number: string;
 *
 *   constructor(number: string) { this.number = number };
 * }
 *
 * const errors = await validate(new Phone('+55 (11) 9 8273-1182'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Phone('11 9 8273 1182'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Phone('1139723768'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Phone('(23) 3972-3768'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Phone('(13) 6 5093-2093'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Phone('(81) 555 178'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
const IsPhone = generateDecorator(isPhone, 'isPhone', '$property must be a valid phone');

export default IsPhone;
