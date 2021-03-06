import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Recolectar piedras del inifino');
    const lista2 = new Lista('Héroes a desaparecer');

    this.listas.push(lista1, lista2);
  }
}
