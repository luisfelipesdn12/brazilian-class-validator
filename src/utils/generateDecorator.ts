import {
  registerDecorator,
  ValidationOptions
} from 'class-validator';

const generateDecorator = (
    validationFunc: (value: any) => boolean,
    name: string,
    message: string,
  ) => {
  return (validationOptions?: ValidationOptions) => {
      return (object: Object, propertyName: string) => {
          registerDecorator({
              name: name,
              target: object.constructor,
              propertyName: propertyName,
              options: {
                  message: message,
                  ...validationOptions,
              },
              validator: {
                  validate(value: any): boolean {
                      return validationFunc(String(value));
                  },
              },
          });
      };
  };
};

export default generateDecorator;
