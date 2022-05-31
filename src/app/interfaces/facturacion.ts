import { Vehiculo } from "./vehiculo";


export interface Arreglos {
  arreglos: Meses[];
}

export interface Meses {
  mes:Arreglo[]
}

export interface Arreglo {
  id: number;
  fecha: string;
  descripcion: string;
  precio: string;
  vehiculo: Vehiculo;
}


export interface Gastos {
  gastos: Mes[];
}

export interface Mes {
  mes:Gasto[]
}

export interface Gasto {
  fecha: string;
  usuario: Usuario;
  concepto: string;
  importe: string;
}

export interface Usuario {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
}