import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CritereService} from '../../../shared/service/critere.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-critere-edit',
  templateUrl: './critere-edit.component.html',
  styleUrls: ['./critere-edit.component.css']
})
export class CritereEditComponent implements OnInit {

  id: string;

  critereForm = new FormGroup( {
      name: new FormControl()
  } );
  private critereService: any;

  constructor(private criteresereService: CritereService, private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getCritereDetail(this.id);
  }

  // tslint:disable-next-line:typedef
  private getCritereDetail(id: string) {
    this.critereService.getCritereDetail(id)
      .subscribe( data => {
        this.critereForm.patchValue({
          name: data.name
        });
      });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.critereForm.get('name').value);
    this.critereService.editCritere(formData, this.id)
      .subscribe(critere => {
        this.router.navigate(['/admin/critere']);
      });
  }
}
