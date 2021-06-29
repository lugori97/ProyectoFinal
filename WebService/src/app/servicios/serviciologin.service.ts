import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ServiciologinService {

  constructor(private http: HttpClient) { }

  ValidarLogin(usuario: string,password: string):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type','aplication/json');
    

    const params = new HttpParams();
    params.set('usuario',usuario);
    params.set('password',password);  
    return this.http.get(`${environment.apiUrl}/login?usuario=${usuario}&password=${password}`);
  }



}

