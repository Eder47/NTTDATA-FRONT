export class ClienteResult {

  constructor(
    public numeroDocumento: number,
    public tipoDoc : string,
    public primerNombre: string,
    public segundoNombre : string,
    public primerApellido : string,
    public segundoApellido : string,
    public telefono : string,
    public direccion : string,
    public ciudadResidencia : string,
  ) {

  }

}
