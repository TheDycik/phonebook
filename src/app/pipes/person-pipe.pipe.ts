import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personPipe'
})
export class PersonPipePipe implements PipeTransform {

  transform(persons: any, searchPerson: string): any {
    if (persons.lenght === 0 || searchPerson === '' ) {

      return persons;

    }
    
    return persons.filter(

      function (element) {
    
        return element.name.toLowerCase().indexOf(searchPerson.toLowerCase())!==-1 
         || element.surname.toLowerCase().indexOf(searchPerson.toLowerCase())!==-1 
         || element.lastname.toLowerCase().indexOf(searchPerson.toLowerCase())!==-1
         || element.tel.toLowerCase().indexOf(searchPerson.toLowerCase())!==-1;
      });


  }

}
