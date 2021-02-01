import generateDecorator from '../utils/generateDecorator';
import { isCPFOrCNPJ } from 'brazilian-values';

/**
 * Check if a value is a valid CPF or CNPJ.
 * @example ```js
 * import { validate } from 'class-validator';
 *
 * class CompanyOwner {
 *   @IsCPFOrCNPJ()
 *   document: string;
 *
 *   constructor(document: string) { this.document = document };
 * }
 *
 * const errors = await validate(new CompanyOwner('366.418.768-70'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new CompanyOwner('36641876870'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new CompanyOwner('213.198.013-20'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new CompanyOwner('2131201872781'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new CompanyOwner('11111111111'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new CompanyOwner('41142260000189'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new CompanyOwner('45.723.174/0001-10'))
 * errors.length === 0
 * //=> true
 *
 * const errors = await validate(new CompanyOwner('411407182'))
 * errors.length === 0
 * //=> false
 *
 * const errors = await validate(new CompanyOwner('11.111.111/1111-11'))
 * errors.length === 0
 * //=> false
 * ```
 *
 * @see https://github.com/typestack/class-validator
 */
const IsCPFOrCNPJ = generateDecorator(isCPFOrCNPJ, 'isCPFOrCNPJ', '$property must be a valid CPF or CNPJ');

export default IsCPFOrCNPJ;
