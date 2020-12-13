import { Component, OnInit } from '@angular/core';
import {Demeure} from '../../../shared/model/demeure';
import {DemeureService} from '../../../shared/service/demeure.service';

@Component({
  selector: 'app-demeure-list',
  templateUrl: './demeure-list.component.html',
  styleUrls: ['./demeure-list.component.css']
})
export class DemeureListComponent implements OnInit {

  demeures: Demeure[];
  constructor(private demeureService: DemeureService) { }

  ngOnInit(): void {
    this.getDemeures();
  }

  // tslint:disable-next-line:typedef
  getDemeures() {
    this.demeureService.getDemeures()
      .subscribe(data => this.demeures = data );
  }

  // tslint:disable-next-line:typedef
  deleteDemeure(id: string) {
    this.demeureService.deleteDemeure(id).subscribe();
    this.demeures = this.demeures.filter(element => element.id !== id);
  }
}
