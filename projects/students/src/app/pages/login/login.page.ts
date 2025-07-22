import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginHeaderComponent } from '../../components/login-header/login-header.component';
import { LoginComponent } from './login/login.component';
import { IonGrid } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,
            LoginHeaderComponent, ReactiveFormsModule,
            LoginComponent]
})
export class LoginPage implements OnInit {

  constructor() {
    // Initialization logic can go here if needed
   }

  ngOnInit() {
  }

  
  

}
