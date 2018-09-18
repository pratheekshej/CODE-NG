import { Component, OnInit } from '@angular/core';
import {DataErrService} from '../../services/data-err/data-err.service';
import {Router} from '@angular/router';
import {PageChangedEvent} from 'ngx-bootstrap';

@Component({
  selector: 'app-err-stack',
  templateUrl: './err-stack.component.html',
  styleUrls: ['./err-stack.component.scss']
})
export class ErrStackComponent {}
