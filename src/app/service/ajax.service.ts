import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {
  private readonly URL: string = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {

  }

  findPosts() {
    return this.get('/posts');
  }

  private get(url: string, queryParams?: any) {
    const buildUrl: string = this.URL + url;

    return queryParams ? this.http.get(buildUrl, { params: queryParams }) : this.http.get(buildUrl);
  }
}
