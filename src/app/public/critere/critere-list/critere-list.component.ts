import { Component, OnInit } from '@angular/core';
import { Critere } from '../../../shared/model/critere';
import {CritereService} from '../../../shared/service/critere.service';


@Component({
  selector: 'app-critere-list',
  templateUrl: './critere-list.component.html',
  styleUrls: ['./critere-list.component.css']
})
export class CritereListComponent implements OnInit {

  criteres: Critere[];
  criteresInit: Critere[];

  constructor(private critereService: CritereService) { }

  ngOnInit(): void {
    this.getCriteres();
  }

  // tslint:disable-next-line:typedef
  getCriteres() {
    this.critereService.getCriteres()
      .subscribe( data => {
        this.criteres = data;
        this.criteresInit = data;
      });
  }

}
