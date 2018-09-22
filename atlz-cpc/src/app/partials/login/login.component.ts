import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signInCredentials: any = {
    username: '@thinkpalm.com',
    password: ''
  };

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}

  signIn(): void {
    this.spinner.show();
    let signInObject: any = {
      username: 'admin@thinkpalm.com',
      password: 'admin@123'
    };
    if (
      this.signInCredentials.username == signInObject.username &&
      this.signInCredentials.password == signInObject.password
    ) {
      setTimeout(
        () => {
          this.spinner.hide();
          this.router.navigate(['/welcome']);
        }, 500
      );
    }
    else {
      setTimeout(
        () => {
          this.spinner.hide();
        }, 500
      );
    }
  }

  ngOnInit() {}

}
