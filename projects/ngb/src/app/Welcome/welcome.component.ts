import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    titleText: string = " Welcome";
    backgroundImage: any = 'assets/images/images.jpg';
}