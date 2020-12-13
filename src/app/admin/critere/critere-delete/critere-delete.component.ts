import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CritereService} from '../../../shared/service/critere.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-critere-delete',
  templateUrl: './critere-delete.component.html',
  styleUrls: ['./critere-delete.component.css']
})
export class CritereDeleteComponent implements OnInit {

  id: string;

  critereForm = new FormGroup( {
    name: new FormControl()
  } );

  constructor(private criteresereService: CritereService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
  }

}
