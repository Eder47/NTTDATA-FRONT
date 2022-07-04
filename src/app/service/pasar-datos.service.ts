import { ClienteResult } from './../models/ClienteResult.models';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Puente {
@Output() datosClienteDis: EventEmitter<ClienteResult> = new  EventEmitter<ClienteResult>();
  constructor() {}

}
