import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public isCollapsed = true;

  constructor(private router: Router, private auth: AuthService, private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  openLogInModal() {
    const modalRef = this.modalService.open(LoginComponent);
    modalRef.componentInstance.isModal = true;
  }

  isLoggedIn() {
    // return false;
    return this.auth.isLogged();
  }

  logOut() {
    this.auth.logOut();
  }
}
