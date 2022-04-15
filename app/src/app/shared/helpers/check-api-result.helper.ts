import { extractError } from 'src/app/http/helpers/extract-error.helper';
import { IResult } from '../models/result.interface';

export function checkApiResult<T>(result: IResult<T>): T {
  if (!result.success || !result.data) {
    throw extractError(result);
  }
  return result.data!;
}
