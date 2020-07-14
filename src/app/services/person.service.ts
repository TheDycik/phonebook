import { Injectable } from '@angular/core';
import { BaseApi } from './base-api';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseApi {


  options: HttpHeaders;

  constructor(public http: HttpClient) {
    super(http);
    this.options = new HttpHeaders();
    this.options = this.options.set('Content-Type', 'application/json');
  }



  async getPerson() {
    return this.get('/notes', this.options).toPromise();
  }

  async postPerson(data) {
    return this.post('/notes', data, this.options).toPromise();
  }

  async getPersonById(id: number) {
    return this.get('/notes/' + id, this.options).toPromise();
  }

  async putPersonById(id, data) {
    return this.put('/notes/' + id, data, this.options).toPromise();
  }

  async deletePersonById(id) {
    return this.delete('/notes/' + id, this.options).toPromise();
  }




  
  async getFilter() {
    return this.get('/filter', this.options).toPromise();
  }

  async putFilter( data) {
    return this.put('/filter/1', data, this.options).toPromise();
  }

  async putSort( data) {
    return this.put('/sort/1', data, this.options).toPromise();
  }
 
  async getSort() {
    return this.get('/sort', this.options).toPromise();
  }
 
}
