import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { ok } from 'assert';
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable({
  providedIn: 'root'
})
export class ServicioSubService {

  private Url: string = 'http://piedrasdeltunjo.tk/Subscripcion/';

  //private Url: string = "http://localhost:61629/Subscripcion/";
  

  
  constructor(private http: HttpClient) { }
  ObtenerJson():Observable<any>{
    //return this.http.get(`${this.Url}Subscripcion/Ver_Subscripciones?estadoFiltro=${1}`)
    return this.http.get(`${this.Url}Ver_Subscripciones?estadoFiltro=${1}`)
 
  }

  async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.Url+"Registro" , Datos, httpOptions).toPromise()
    });
  }



/*

  private extractData(res: Response) {

    let body = JSON.parse('' + res);

    return body || {};
  }

  private handleError<T>(operation = 'operation', result?: T) {

    return (error: any): Observable<T> => {

      console.log(`${operation} failed: ${error.message}`);
      return of(result as T)
    };
  }

  async RegistroSubscripcion(jsonRegistroSub): Promise<any> {

    //console.log(TipoDoc, this.Url+"/tipdoc")

    return new Promise((resolve, reject) => {
      this.http.post(`${this.Url}Registro` , jsonRegistroSub, httpOptions).toPromise()
    });
  }

*/

getu(id):Observable<any>{
  return this.http.get(this.Url + "Subscripcion/Buscar_Subscripciones/" + id, httpOptions)
  
  }
  async update(cadena,id): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.put(this.Url+"Subscripcion/Actualizar_Subscripciones/"+id, cadena, httpOptions).toPromise()
    });
  }
  
}
