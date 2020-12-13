import { Component, OnInit } from '@angular/core';
import { DemeureService } from '../../../shared/service/demeure.service';
import {Demeure} from '../../../shared/model/demeure';

@Component({
  selector: 'app-demeure-list',
  templateUrl: './demeure-list.component.html',
  styleUrls: ['./demeure-list.component.css']
})
export class DemeureListComponent implements OnInit {

  demeures: Demeure[];
  demeuresInit: Demeure[];

  constructor(private demeureService: DemeureService) { }

  ngOnInit(): void {
    this.getDemeures();
  }

  // tslint:disable-next-line:typedef
  getDemeures() {
    this.demeureService.getDemeures()
      .subscribe( data => {
        this.demeures = data;
        this.demeuresInit = data;
      });
  }
}
