import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {
  
  subscription: Subscription;

  constructor() { 
    this.subscription = this.regressaObservable().subscribe( 
      numero => console.log( 'subs', numero ),
      error => console.error( 'Eror en el obs', error ),
      () => console.log( 'El Observador terminó' )
    );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  regressaObservable(): Observable<any> {
    return new Observable( ( observer: Subscriber<any> ) => {
      let contador = 0;
      let intervalo = setInterval( () => {
        contador ++;

        const salida = {
          valor: contador
        }

        observer.next( salida );

        // if ( contador === 3) {
        //   clearInterval( intervalo );
        //   observer.complete();
        // } else {
        //   // if ( contador === 2 ) {
        //   //   // clearInterval( intervalo );
        //   //   observer.error( 'Auxilio' );
        //   // }
        // }
      }, 1000);
    }).pipe( 
      map( resp => resp.valor ),
      filter( ( valor, index ) => {
        return valor % 2 === 1;                
      })
    );
  }

}
