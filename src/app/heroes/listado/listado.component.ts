import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Batman', 'Superman', 'Flash'];
  heroeDelete: string = '';


  borrarHeroe(): void {
    this.heroeDelete = this.heroes.shift() || '';
  }

}
