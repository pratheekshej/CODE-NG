import { CommonService } from './../../services/common/common.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedRoute: any;
  subscription: Subscription;

  constructor(
    private router: Router,
    private activatedR: ActivatedRoute,
    private commonService: CommonService
  ) {
    this.subscription = this.commonService.routerValue.subscribe(
      (response: any) => {
        this.selectedRoute = response;
      }
    );
  }

  redirectTo(route): void {
    this.router.navigateByUrl(route);
  }

  ngOnInit() {
    this.selectedRoute = 'n-grid';
  }

}
