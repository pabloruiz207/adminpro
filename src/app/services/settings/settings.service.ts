import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default.css'
  }
    
  constructor( @Inject(DOCUMENT) private _document: any ) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ) );
  }

  cargarAjustes() {
    let aju = localStorage.getItem('ajustes' )
    if ( aju ) {
      this.ajustes = JSON.parse( aju );
    }
    this.aplicarTema( this.ajustes.tema );
  }

  aplicarTema( tema: string ) {
    let url = 'assets/css/colors/' + tema +'.css';
    this._document.getElementById('tema').setAttribute('href', url )
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
