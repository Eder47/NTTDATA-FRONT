import { ClienteResult } from './../models/ClienteResult.models';
import { Cliente } from '../models/Cliente.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosBasicosService {

  endpoint: string;

  constructor(private httpClient: HttpClient) {
    this.endpoint = environment.resources.host + environment.resources.context;
  }

  public consultarDatosBasicosCliente(numero:number, tipo: number,): Observable<ClienteResult>
  {
    return this.httpClient.get<ClienteResult>(this.endpoint + `/getInfo/${tipo}/${numero}`);
  }

  getcatalogo(): Observable<any> {
    return this.httpClient.get(this.endpoint + `/getInfo/catalogo`);
  }

}
