import { HttpErrorResponse } from '@angular/common/http';
import { IResult } from 'src/app/shared/models/result.interface';

export function extractError(error: any): IResult<{ status: string }> {
  if (error instanceof HttpErrorResponse) {
    return {
      success: false,
      message: error.error.message ?? error.message,
    };
  } else {
    return { success: false, message: error };
  }
}
