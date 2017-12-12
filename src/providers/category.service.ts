import {Inject, Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import {Category} from "../entities/category";


@Injectable()
export class CategoryService {

  constructor(private http: Http, @Inject('apiUrl') private apiUrl) {
  }

  url: string = this.apiUrl + "/categories";

  getCategories(): Observable<Category[]> {
    return this.http.get(this.url).map(res => res.json())
  }

}
