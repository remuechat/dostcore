import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { LoginHeaderComponent } from 'src/app/components/login-header/login-header.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, 
            IonToolbar, 
            IonTitle, 
            IonContent, 
            IonButton, 
            LoginHeaderComponent],
})
export class HomePage {
  constructor() {}
}
