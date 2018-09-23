import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedRoute: any;

  constructor(
    private router: Router,
    private activatedR: ActivatedRoute
  ) { }

  redirectTo(route): void {
    this.router.navigateByUrl(route);
  }

  ngOnInit() {
    this.selectedRoute = 'n-grid';
  }

}
