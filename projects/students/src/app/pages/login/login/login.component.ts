import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    IonicModule  // Import IonicModule for Ionic components
  ]
})
export class LoginComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
