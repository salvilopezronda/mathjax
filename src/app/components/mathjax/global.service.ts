import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class GlobalService {

  constructor() { }

  nativeGlobal() { return window }
}
