import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/login/login.component';
import { LoginService } from 'src/app/service/login.service';
import { UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user:any;
  constructor(private login:LoginService) { }

  ngOnInit(): void {
    this.user=this.login.getUser();
  }

}
