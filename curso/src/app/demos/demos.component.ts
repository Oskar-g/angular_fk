import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from '../common-app';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent implements OnInit {
  public readonly NotificationType = NotificationType;

  nombre: string = 'mundo';
  idProvincia: number = 2;
  listado = [
    {id: 1, nombre: 'Toledo'},
    {id: 2, nombre: 'CIUDAD REAL'},
    {id: 3, nombre: 'cuenca'},
    {id: 4, nombre: 'A coruñA'},
  ];
  fontsize = 24;

  resultado: string = null;
  visible = true;
  estetica = { importante: true, error: false, urgente: true };

  constructor(public notify: NotificationService) { }

  saluda() {
    this.resultado = `Hola ${this.nombre}`;
  }
  despide() {
    this.resultado = `Adios ${this.nombre}`;
  }
  di(algo: string) {
    this.resultado = `Dice ${algo}`;
  }

  cambia() {
    this.visible = !this.visible;
    this.estetica.error = !this.estetica.error;
    this.estetica.importante = !this.estetica.importante;
  }

  calcula(a: number, b: number): number {
    return a + b;
  }

  public add(nombre: string) {
    const id = this.listado.length > 0 ? this.listado[this.listado.length - 1].id + 1 : 1;
    this.listado.push({id, nombre});
    this.idProvincia = id;
  }


  ngOnInit() {
  }

  // tslint:disable:member-ordering
  idiomas = [
    { codigo: 'es', region: 'España' },
    { codigo: 'pt', region: 'Portuges' },
    { codigo: 'en-US', region: 'USA' }
  ];
  idioma = this.idiomas[0].codigo;
  calculos: any[] = [];
  valCalculadora = 666;
  // tslint:enable:member-ordering

  ponResultado(origen: string, valor: any) {
    this.calculos.push({
      pos: this.calculos.length + 1,
      origen,
      valor
    });
  }

}
