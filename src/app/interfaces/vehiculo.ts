import { Cliente } from "./user";

export interface Vehiculo {
  marca: string;
  modelo: string;
  color: string;
  matricula: string;
  cliente: Cliente;
}

export interface VehiculoSimple {
  marca: string;
  modelo: string;
  color: string;
  matricula: string;
  cliente: string;
}