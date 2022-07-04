
import { Router } from '@angular/router';
import { Puente } from './../../service/pasar-datos.service';
import { ClienteResult } from './../../models/ClienteResult.models';
import { DatosBasicosService } from './../../service/obtener-datos.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/Cliente.models';
import { Catalogo } from 'src/app/models/Catalogo.models';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss'],
})
export class BuscarComponent implements OnInit {
  tiposDocumentoCliente: Catalogo[] = [];
  tipD: number | any;
  NumD: number | any;
  clienteResult!: ClienteResult;

  constructor(
    private formBuilder: FormBuilder,
    private service: DatosBasicosService,
    private servicioPuente: Puente,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarCatalogo();
  }

  cargarCatalogo() {
    this.service.getcatalogo().subscribe((catalogo) => {
      this.tiposDocumentoCliente = catalogo;
    });
  }

  submitCliente() {
    if (this.formDatosCliente.valid) {
      this.tipD = this.formDatosCliente.get('tipoDocumento')?.value;
      this.NumD = this.formDatosCliente.get('numeroDocumento')?.value;
      this.buscarCliente(this.tipD, this.NumD);
      this.router.navigate(['datos-cliente']);
    }
  }

  formDatosCliente = this.formBuilder.group({
    tipoDocumento: new FormControl('', Validators.required),
    numeroDocumento: new FormControl('', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/),
    ]),
  });

  buscarCliente(tipoDoc: number, numero: number) {
    this.service
      .consultarDatosBasicosCliente(tipoDoc, numero)
      .subscribe((datos) => {
        this.clienteResult = datos;
        this.servicioPuente.datosClienteDis.emit(datos);
      },errorrrrrr =>{
          console.log(errorrrrrr);
      }
      );
  }

  regresar(){
    this.router.navigate(['buscar']);
  }
}
