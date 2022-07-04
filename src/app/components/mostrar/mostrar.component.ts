import { ClienteResult } from './../../models/ClienteResult.models';
import { Puente } from './../../service/pasar-datos.service';
import { DatosBasicosService } from './../../service/obtener-datos.service';
import { Component, OnInit } from '@angular/core';
import { Catalogo } from 'src/app/models/Catalogo.models';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss'],
})
export class MostrarComponent implements OnInit {
  catalogo: Catalogo[] = [];

  columnsToDisplay = ['pApellido', 'pNombre'];

  constructor(
    private service: DatosBasicosService,
    private servicioPuente: Puente,
    private router: Router,
    private formBuilder: FormBuilder

  ) {}

  ngOnInit(): void {
    this.getCatalogos();
    this.recibirDatos();
  }

  recibirDatos() {
    this.servicioPuente.datosClienteDis.subscribe((data) => {
      this.formDatosCliente.setValue({
        primerApellido: data.primerApellido,
        primerNombre: data.primerNombre
      })
      this.formDatosCliente.controls.primerApellido.disable();
      this.formDatosCliente.controls.primerNombre.disable();
    });
  }

  getCatalogos() {
    this.service.getcatalogo().subscribe((dato) => {
      this.catalogo = dato;
    });
  }

  formDatosCliente =  this.formBuilder.group({
    primerApellido:[''],
    primerNombre:['']
  });

  regresar() {
    this.router.navigate(['buscar']);
  }
}
