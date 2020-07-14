import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from "@angular/forms";
import { PersonService } from "../services/person.service";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  id: number;
  itemForm: FormGroup;
  selectedItem;

  constructor(
    private activatedRouter: ActivatedRoute, // хранит url адрес и параметры
    private router: Router, // этот сервис используется для навигации
    private itemService: PersonService
  ) {
    this.activatedRouter.params.subscribe(param => {
      this.id = param.id;
    });
  }

  ngOnInit() {
    this.selectedItem = this.itemService.getPersonById(+this.id);
    this.itemForm = new FormGroup({
      name: new FormControl(this.selectedItem.name)
    });
  }

  onSaveForm() {
    this.itemService.putPersonById(+this.id, this.itemForm.value.name);
    this.router.navigate([`/`]); // метод navigate используется для программной навигации
  }
}

