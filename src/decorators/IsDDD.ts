import generateDecorator from '../utils/generateDecorator';
import { isDDD } from 'brazilian-values';

/**
 * Check if value is a valid DDD.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class Phone {
 *   @IsDDD()
 *   ddd: string;
 *
 *   constructor(ddd: string) { this.ddd = ddd };
 * }
 *
 * const errors = await validate(new Phone('81'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new Phone('10'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new Phone('A#'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
const IsDDD = generateDecorator(isDDD, 'isDDD', '$property must be a valid DDD');

export default IsDDD;
