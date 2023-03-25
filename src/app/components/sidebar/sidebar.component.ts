import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ServicioLoginService } from 'src/app/service/login/servicio-login.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  constructor(public ServicioLogin:ServicioLoginService){

  }
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('navToggle') navToggle!: ElementRef;
  @ViewChild('navClose') navClose!: ElementRef;


  ngOnInit(){
   
    setTimeout(() => {
      const nav = this.navMenu.nativeElement;
      const toggle = this.navToggle.nativeElement;
      const close = this.navClose.nativeElement;

      toggle.addEventListener('click', () => {
        nav.classList.add('bottom-[100px]');
        nav.classList.remove('bottom-[-400px]');
      });

      close.addEventListener('click', () => {
        nav.classList.remove('bottom-[100px]');
        nav.classList.add('bottom-[-400px]');
      });
    });

  }
  
}
