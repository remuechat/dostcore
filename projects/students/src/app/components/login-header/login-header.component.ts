import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonButtons, IonButton, IonTitle, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.scss'],
  imports: [RouterModule,
            IonHeader, 
            IonToolbar, 
            IonTitle,
            IonButtons,
            IonButton,
            IonIcon],
})
export class LoginHeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
