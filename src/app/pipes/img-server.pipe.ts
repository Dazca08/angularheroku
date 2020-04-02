import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imgServer'
})
export class ImgServerPipe implements PipeTransform {
transform(img: string, tipo: string): any {
   // const url = `${ environment.servicesAPI }/images/getImage?tipo=${ tipo }&nombre=${ img }`;
    const Url ="http://piedrasdeltunjo.tk/images/getImage?tipo=avatar&nombre="+img;
    return Url;
  }

}
