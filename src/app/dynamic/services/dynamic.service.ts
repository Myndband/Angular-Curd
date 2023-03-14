import { Dynamic } from './../model/dynamic';
import { Injectable } from '@angular/core';
import { Data } from '../model/data';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {
  constructor() {}
  getAll(): Dynamic[] {
    return Data;
  }
}
