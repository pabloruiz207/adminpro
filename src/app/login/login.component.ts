import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare function init_pugins(): any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css'
  ]
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit(): void {
    init_pugins();
  }

  ingresar() {
    this.router.navigate([ '/dashboard' ]);
  }
}
