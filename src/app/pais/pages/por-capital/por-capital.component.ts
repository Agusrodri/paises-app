import { Component } from '@angular/core';
import { Country } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  constructor(private paisService:PaisService) { }

  termino:string = '';
  hayError:boolean = false;
  paises: Country[] = [];
  idPais: number = 0;


  buscar(termino:string){

    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      console.log(paises);
      this.paises = paises;
    }, (err)=>{
      this.hayError = true;
      this.paises = [];
    });

  }

  

}
