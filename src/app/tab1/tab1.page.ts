import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Lista } from '../models/lista.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(public todoService: TodoService) {}
}
