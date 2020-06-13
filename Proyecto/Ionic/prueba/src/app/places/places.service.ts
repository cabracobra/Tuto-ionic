import { Injectable } from '@angular/core';
import { Place } from "./place.model";

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places:Place[] =[ 
    {
      id:'1',
      name:'Petra',
      img:'https://heymondo.es/blog/wp-content/uploads/2020/03/petra-jordania.jpg',
      desc:'Petra es un famoso yacimiento arqueológico situado en el desierto del sudoeste de Jordania. Se fundó alrededor del año 300 a. C. y llegó a ser la capital del reino nabateo. La ciudad, a la que solo se puede acceder a través de un cañón estrecho llamado Al Siq, alberga tumbas y templos excavados en acantilados de piedra arenisca rosada, de donde saca su apodo, la Ciudad Rosa. La construcción más famosa es, probablemente, Al Khazneh (también conocido como El Tesoro), un templo de 45 metros de altura con una fachada ornamentada de estilo griego',
    },
    {
      id:'2',
      name:'La Gran Muralla China',
      img:'https://historia.nationalgeographic.com.es/medio/2014/06/12/china2_1787x2000.jpg',
      desc:'La Gran muralla China es una antigua fortificación china construida y reconstruida entre el siglo V a. C. y el siglo XVI para proteger la frontera norte del Imperio chino durante las sucesivas dinastías imperiales de los ataques de los nómadas xiongnu de Mongolia y Manchuria'
    },
    {
      id:'3',
      name:'Chichen Itza',
      img:'https://mymodernmet.com/wp/wp-content/uploads/2020/02/Chichen-Itza-3.jpg',
      desc:'Chichen Itza, una ciudad maya, fue uno de los centros comerciales con más renombre entre los mayas, y hoy en día se puede contemplar en medio de plena naturaleza.'
    },
    {
      id:'4',
      name:'Cristo Redentor',
      img:'https://cdn.holidayguru.es/wp-content/uploads/2017/10/shutterstock_280109546.jpg',
      desc:'La estatua de 32 metros del Cristo Redentor es el monumento más icónico de Río de Janeiro. Sus monumentales brazos extendido parecen abrazar a toda la ciudad, y la estatua en sí se ha convertido en un lugar de peregrinación entre los católicos'
    },
    {
      id:'5',
      name:'Coliseo en Roma',
      img:'https://cdn.holidayguru.es/wp-content/uploads/2017/10/shutterstock_555416488.jpg',
      desc:'Justo en el corazón de Roma se encuentra el famoso Coliseo, uno de los monumentos más visitados de todo el mundo. Las runas del antiguo anfiteatro todavía irradian un impresionante esplendor aún y datar más de 2.000 atrás.'
    },
    {
      id:'6',
      name:'Machu Picchu',
      img:'https://cdn.holidayguru.es/wp-content/uploads/2017/10/shutterstock_389136313.jpg',
      desc:'La ciudad situada en las nubes justo en la Cordillera de los Andes fue creada por los incas alrededor del año 1.440, y hoy en día es una auténtica atracción turística muy popular entre los visitantes que recorren Perú. Los visitantes tienen la posibilidad de conocer el hábitat a 2.350 metros de altura de los residentes de los Andes. La gente afirma que este lugar está lleno de magia'
    },
    {
      id:'7',
      name:'Taj Mahal ',
      img:'https://cdn.holidayguru.es/wp-content/uploads/2017/10/shutterstock_400068991.jpg',
      desc:'Este remarcable mausoleo fue construido por parte del gran mogol, Shah Jahan, para honorar a su esposa. El Taj Mahal fue construido en honor a su esposa una vez falleció. El blanco e impecable edificio sigue siendo a día de hoy un símbolo de amor, y probablemente el lugar más emblemático de toda la India.'
    },
  ]

  constructor() { }
  getPlaces()
  {
    return this.places // esto devuelve un array de 7 obj. === [...this.places]
  };
  getPlace(placeID:string)
  {
    return this.places.find(place=>{return place.id === placeID})
  };
  newPlace(name:string,img:string,desc:string)
  {
    this.places.push({
      id: (this.places.length +2).toString(),
      name:name,
      img:img,
      desc:desc
    })
  };
  deletePlace(placeID:string)
  {
    this.places = this.places.filter(place => {return place.id !== placeID})
  };

}
