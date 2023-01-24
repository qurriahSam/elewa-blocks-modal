import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlockModalToggleService {
    callFunction(component: any, functionName: string): void {
    component[functionName]();
  }
}
