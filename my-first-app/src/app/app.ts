import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  imports: [RouterOutlet, ProfileCard],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
    fullName = 'Ericson Lemuel N. Galang';
  location = 'Magalang, Pampanga';
  email = 'erixoi2005@gmail.com';
  studentemail = 'engalang@student.hau.edu.ph';
  phone = '0936 756 0530';
  hobbies = 'Specializes in Coding and main hobby is drawing'

  profile = 'I am a student interested in web development. I enjoy learning new technologies and building useful applications and I have a passion for drawing and taking extra detail. The computer has been always my goal not just in terms of computing but also gaming, drawing, animating and so much more! More future paths in my life are inspiring millions of people doing what they love, teaching them how to draw and helping them in their struggles in their personal, work and business life. If my decision is what to achieve in web development then Ill be there always.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Node',
    'AWS',
    'Artist',
    'Blender',
    'CapCut'
  ];

  techskills = [
    'CSS' ,
    'Blender' ,
    'CapCut' ,
    'HTML'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
}
}
