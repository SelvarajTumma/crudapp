import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseurl='http://localhost:8000/api/tutorials';
@Injectable({
  providedIn: 'root'
})
export class TutorialServiceService {

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get(baseurl);
  }
  get(id){
    return this.http.get(`$(baseurl)/$(id)`);
  }
  create(data){
    return this.http.post(baseurl,data);
  }
  update(id,data){
    return this.http.put(`$(baseurl)/$(id)`,data);
  }
  delete(id){
    return this.http.delete(`$(baseurl)/$(id)`);
  }
  deleteAll(){
    return this.http.delete(baseurl);
  }
  findByTitle(title){
    return this.http.get(`$(baseurl)?title=$(title)`);
  }
}
