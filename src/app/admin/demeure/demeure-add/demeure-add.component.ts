import { Component, OnInit } from '@angular/core';
import {Critere} from '../../../shared/model/critere';
import {FormControl, FormGroup} from '@angular/forms';
import {DemeureService} from '../../../shared/service/demeure.service';
import {CritereService} from '../../../shared/service/critere.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-demeure-add',
  templateUrl: './demeure-add.component.html',
  styleUrls: ['./demeure-add.component.css']
})
export class DemeureAddComponent implements OnInit {

  criteres: Critere[];

  demeureForm = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    city: new FormControl(),
    piece: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    CritereId: new FormControl()
  });

  // tslint:disable-next-line:max-line-length
  private id: string;
  // tslint:disable-next-line:max-line-length
  constructor(private demeureService: DemeureService, private critereService: CritereService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getCriteres();
  }

  // tslint:disable-next-line:typedef
  getCriteres() {
    this.critereService.getCriteres()
      .subscribe(data => this.criteres = data);
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.demeureForm.get('title').value);
    formData.append('price', this.demeureForm.get('price').value);
    formData.append('city', this.demeureForm.get('city').value);
    formData.append('piece', this.demeureForm.get('piece').value);
    formData.append('description', this.demeureForm.get('description').value);
    formData.append('image', this.demeureForm.get('image').value);
    formData.append('CritereId', this.demeureForm.get('CritereId').value);

    this.demeureService.editDemeure(formData, this.id)
      .subscribe(movie => {
        this.router.navigate(['/admin/demeure']);
      });
  }

}
