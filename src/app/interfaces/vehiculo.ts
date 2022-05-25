import { Cliente } from "./user";

export interface Vehiculo {
  marca: string;
  modelo: string;
  color: string;
  matricula: string;
  cliente: Cliente;
}