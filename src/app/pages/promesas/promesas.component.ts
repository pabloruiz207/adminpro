import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})

export class PromesasComponent implements OnInit {

  constructor() { 
    this.contarTres().then( 
      ( mensaje ) => console.log( mensaje )
    ).catch( error => {
        console.error( 'error en la promesa', error );
      }
    )  
  }

  ngOnInit(): void {
  }

  contarTres(): Promise<string> {
    return new Promise<string>( (resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval( ()=>{
        contador += 1;
        if ( contador ===3 ) {
          resolve( 'termino');
          clearInterval(intervalo);
        }
      }, 1000 );
    });   
  }
}
