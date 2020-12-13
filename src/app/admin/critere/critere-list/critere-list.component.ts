import { Component, OnInit } from '@angular/core';
import {Critere} from '../../../shared/model/critere';
import {CritereService} from '../../../shared/service/critere.service';

@Component({
  selector: 'app-critere-list',
  templateUrl: './critere-list.component.html',
  styleUrls: ['./critere-list.component.css']
})
export class CritereListComponent implements OnInit {

  criteres: Critere[];
  constructor(private critereService: CritereService) { }

  ngOnInit(): void {
    this.getCriteres();
  }

  // tslint:disable-next-line:typedef
  getCriteres() {
    this.critereService.getCriteres()
      .subscribe( data => this.criteres = data );
  }

  // tslint:disable-next-line:typedef
  deleteCritere(id) {
    this.critereService.deleteCritere(id).subscribe();
    this.criteres = this.criteres.filter(element => element.id !== id);
  }
}
