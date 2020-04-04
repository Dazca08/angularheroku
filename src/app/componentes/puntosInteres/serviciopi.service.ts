import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { PuntoInteres } from '../../interfaces/punto-interes.interface';
import { environment } from '../../../environments/environment.prod';
const URL = environment.apiUrl;
const httpOptions =
{
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiciopiService {
 private url: string = "http://piedrasdeltunjo.tk/puntos-interes";
 //private url: string = "http://localhost:61629/puntos-interes";
  constructor(private http: HttpClient) { }
   ObtenerJson():Observable<any>{
 return this.http.get(this.url)
  }

getu(id):Observable<any>{
  return this.http.get(this.url + id, httpOptions)
  }
  async update(cadena,id): Promise<any> {

    return new Promise((resolve, reject) => {
      this.http.put(this.url+'/'+id, cadena, httpOptions).toPromise()
    });
  }

async Eliminar(id): Promise<any> {
  try{
 return new Promise((resolve, reject) => {
      this.http.delete(this.url+'/'+id).toPromise()
    });
  }
  catch(e){
    console.log("error en bd");
  }
   
  }

async insertar(Datos): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url , Datos, httpOptions).toPromise()
    });
  }
   getPuntosInteres() {
    return this.http.get<PuntoInteres[]>(`${ URL }/puntos-interes`);
  }

  postPuntosInteres(punto: PuntoInteres) {
    return this.http.post(`${ URL }/puntos-interes`, punto);
  }

  putPuntosInteres(punto: PuntoInteres) {
    return this.http.put(`${ URL }/puntos-interes/${ punto.Id }`, punto);
  }

  deletePuntosInteres(id: number): Promise<boolean> {
    return new Promise(resolve => {
      this.http.delete(`${ URL }/puntos-interes/${ id }`)
              .subscribe(res => {
                resolve(res['ok']);
              });
    });
  }

  existsPunto(lng: number, lat: number): Promise<boolean> {
    return new Promise(resolve => {
      this.getPuntosInteres().subscribe(puntos => {
        const punto = puntos.find(x => x.Longitud === lng && x.Latitud === lat);
        resolve(punto !== undefined);
      });
    });
  }
 
}
