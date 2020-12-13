import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CritereService} from '../../../shared/service/critere.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-critere-add',
  templateUrl: './critere-add.component.html',
  styleUrls: ['./critere-add.component.css']
})
export class CritereAddComponent implements OnInit {


  critereForm = new FormGroup({
    name: new FormControl(),
  });

  constructor(private critereService: CritereService, private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.critereForm.get('name').value);
    this.critereService.addCritere(formData)
      .subscribe(critere => {
        this.router.navigate(['/admin/critere']);
      });
  }
}
