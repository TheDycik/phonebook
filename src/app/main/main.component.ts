import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/services/person.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {


  persons = [];
  searchName = "";
  flag = true;
  sortFlag:number;
  chosen:boolean;

  constructor(private personService: PersonService) { }

  async ngOnInit() {
    console.log('main');
    try {
      let filter = this.personService.getFilter();
      this.searchName = (isNullOrUndefined(await filter)) ? [] : await filter;
      this.searchName = this.searchName[0]["searchStr"];
      let sort = this.personService.getSort();
      this.sortFlag = (isNullOrUndefined(await sort)) ? [] : await sort;
      this.sortFlag = this.sortFlag[0]["sortFlag"];
      let persons = this.personService.getPerson();
      this.persons = (isNullOrUndefined(await persons)) ? [] : await persons;
      console.log(this.persons);
      this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);

    } catch (err) {
      console.log(err);
    }
  }

  async delPerson(id: number) {
    await this.personService.deletePersonById(id);
    this.ngOnInit();
  }

  async changerSearch() {
    if (this.sortFlag===1)
    {
      this.sortFlag=2;
      await this.personService.putSort({ sortFlag: this.sortFlag });
        return this.persons.sort((a,b)=>{
        let nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB){ //сортируем строки по возрастанию
          this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);
        return -1
      }
        if (nameA > nameB){
          this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);
        return 1 //сортируем строки по убыванию
        }
        return 0 // Никакой сортировки
          });
       
    }
    if (this.sortFlag===2)
    {
      this.sortFlag=3;
      await this.personService.putSort({ sortFlag: this.sortFlag });
      return this.persons.sort((e1,e2)=>{
        let surnamee1=e1.surname.toLowerCase(),
        surnamee2=e2.surname.toLowerCase();
        if (surnamee1 < surnamee2){
          this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);
        return -1;
      }
        if (surnamee1 > surnamee2){
          this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);
        return 1;
        }
        return 0;
          });
    }
    if (this.sortFlag===3)
    {
   
    this.ngOnInit();
    this.sortFlag=1;
    this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);
    await this.personService.putSort({ sortFlag: this.sortFlag });
    }
  }
 

  async changeFilter() {
    await this.personService.putFilter({ searchStr: this.searchName });
  }
  async changeFavorite() {
    console.log(this.flag);
    if (this.flag === true) {
      this.persons.sort((e1, e2) => e1.flag !== e2.flag && e1.flag === true ? -1 : 1);
    }
    else{
      this.ngOnInit();
    }
    if(this.flag===true){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
}
