import { Component } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import {Router, NavigationStart } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'https://jsonplaceholder.typicode.com/todos/';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gsm-project';
  routerLoc = ''
  selectedMenu = 'ant-menu-item ant-menu-item-selected'
  unselectedMenu = 'ant-menu-item'
  data: any[] = [];
  constructor(private router: Router,private http: HttpClient) {
    this.getProduct(1)
    .subscribe((res: any) => {
      this.data = res;
      console.log("Ini Datanya", this.data);
    }, err => {
      console.log(err);
  });
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl)
      .pipe(
        tap(product => console.log('fetched products')),
        catchError(this.handleError('getProducts', []))
      );
  }
  
  getProduct(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url, httpOptions).pipe(
      tap(product => console.log(`fetched product id=${id}`)),
      catchError(this.handleError<any>(`getProduct id=${id}`))
    );
  }

  ngOnInit() {
    console.log("Hello")
    setTimeout(()=>{
      this.routerLoc = this.router.url
      console.log(this.router.url)
    }, 1000)
  }

}
