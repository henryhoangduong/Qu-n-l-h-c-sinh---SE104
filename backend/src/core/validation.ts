import { validate } from 'class-validator';

export async function reqBodyValidation(reqBody: any) {
  const errors = await validate(reqBody);
  if (errors.length > 0) {
    throw new Error(
      errors[0].constraints[Object.keys(errors[0].constraints)[0]],
    );
  }
}
