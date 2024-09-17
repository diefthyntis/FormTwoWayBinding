import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
OnRecordProfile(formProfile:NgForm) {
  console.log(formProfile.value);
}



  tsEmailAddress: string="luc@evangile.com";
  tsPseudo: string="luc le porteur de bonne nouvelle";

      title = 'FormTwoWayBinding';
tsFirstname!: string;
tsLastname!: string;
tsBirthdate!: string;

  OnRecordFirstname() {
    console.log(this.tsFirstname);
}
  OnSignin() {
  console.log(this.tsEmailAddress);
  }
}
