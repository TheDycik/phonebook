import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';


@Component({
  selector: 'app-include',
  templateUrl: './include.component.html',
  styleUrls: ['./include.component.css']
})
export class IncludeComponent implements OnInit {

  id: number;
  personForm: FormGroup;
  selectedPerson;

  constructor(
    private activatedRouter: ActivatedRoute, // хранит url адрес и параметры
    private router: Router, // этот сервис используется для навигации
    private personService: PersonService
  ) {
    this.activatedRouter.params.subscribe(param => {
      this.id = param.id;
    });
    this.personForm = new FormGroup({
      surname: new FormControl(null,[Validators.required]),//this.selectedPerson.name, Validators.required)
      name: new FormControl(null,[Validators.required]),
      lastname: new FormControl(null,[]),
      tel: new FormControl(null,[Validators.required]),
      flag: new FormControl(null,[]),
      comments: new FormControl(null,[])

    });
  }

  async ngOnInit() {
    if(+this.id>0){
    this.selectedPerson = await this.personService.getPersonById(+this.id);
    this.personForm.patchValue({surname:this.selectedPerson.surname})
    this.personForm.patchValue({name:this.selectedPerson.name})
    this.personForm.patchValue({lastname:this.selectedPerson.lastname})
    this.personForm.patchValue({tel:this.selectedPerson.tel})
    this.personForm.patchValue({flag:this.selectedPerson.flag})
    this.personForm.patchValue({comments:this.selectedPerson.comments})
    }
  }

  async onSaveForm() {
    console.log(+this.id)
    this.personService.putPersonById(+this.id, this.personForm.value);
    this.router.navigate([`/`]); // метод navigate используется для программной навигации
  }

  async onAddForm()
  {
    this.personService.postPerson(this.personForm.value);
    this.router.navigate([`/`]);
  }
}
