import { Usuario } from '../models/usuario';
import { Mascota } from '../models/mascota';
import { Tipo } from '../models/tipo';
import { Propietario } from '../models/propietario';

export let propietariosPrueba: Propietario[] = [
  { id:1, email:'jromo@example.com', nombre:'José', apellidos:'Romo' },
  { id:2, email:'atellez@example.com', nombre:'Alejandro', apellidos:'Téllez' },
  { id:3, email:'cmendiola@example.com', nombre:'Carlos', apellidos:'Mendiola' },
  { id:4, email:'sgonzalez@example.com', nombre:'Susana', apellidos:'González' },
  { id:5, email:'jacevedo@example.com', nombre:'Jaime', apellidos:'Acevedo' },
  { id:6, email:'kmendez@example.com', nombre:'Karen', apellidos:'Mendez'},
  { id:7, email:'gjimenez@example.com', nombre:'Gloria', apellidos:'Jimenez' }
];

export let usuariosPrueba: Usuario[] = [
  { id:1, name:'MVZ Benito Bodoque', email:'test@example.com', password:'12345' }
];

export let tiposPrueba: Tipo[] = [
  { id:1, descripcion:'Perro' },
  { id:2, descripcion:'Gato' },
];

export let mascotasPrueba: Mascota[] = [
  { id:1, nombre:'Denver', propietario:2, fechaNac:new Date('2014-11-18'), raza:'Metizo/Labrador', color:'Miel', genero:'macho', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/denver.jpg' },
  { id:2, nombre:'Camy', propietario:2, fechaNac:new Date('2014-11-18'), raza:'Mestizo/Labrador', color:'Miel/Blanco', genero:'hembra', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/camy.jpg' },
  { id:3, nombre:'Kia', propietario:2, fechaNac:new Date('2016-01-28'), raza:'Mestizo/Galgo', color:'Atigrado', genero:'hembra', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/kia.jpg' },
  { id:4, nombre:'Hamilton', propietario:2, fechaNac:new Date('2018-04-05'), raza:'Corgi', color:'Miel', genero:'macho', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/hamilton.jpg' },
  { id:5, nombre:'Olivia', propietario:2, fechaNac:new Date('2016-08-25'), raza:'Corgi', color:'Miel/Blanco', genero:'hembra', tipo:1, fotoUrl:'https://raw.githubusercontent.com/atellezf/atellezf.github.io/master/perros/olivia.jpg' },
  { id:6, nombre:'Theodore', propietario:2, fechaNac:new Date('2021-11-25'), raza:'Ragdoll', color:'Blanco/Gris', genero:'macho', tipo:2, fotoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJMoYr8zSHRLKARvYssUFwdOMDguDIKqXd5gCJ9Odg7Sk1ZgZPMOANB1UWmQgkHTjIXH8&usqp=CAU' },
  { id:7, nombre:'Wera', propietario:1, fechaNac:new Date('2012-09-16'), raza:'Cocker Spagniel', color:'Miel', genero:'hembra', tipo:1, fotoUrl:'https://misanimales.com/wp-content/uploads/2018/11/cocker-spaniel.jpg' },
  { id:8, nombre:'Maya', propietario:1, fechaNac:new Date('2016-10-02'), raza:'Border Collie', color:'Negro/Blanco', genero:'hembra', tipo:1, fotoUrl:'https://t2.uc.ltmcdn.com/es/posts/8/3/6/como_saber_si_un_border_collie_es_puro_44638_600_square.jpg' },
  { id:9, nombre:'Chicharito', propietario:4, fechaNac:new Date('2018-12-19'), raza:'Mestizo', color:'Negro/Blanco', genero:'macho', tipo:1, fotoUrl:'/assets/no-image.jpg' },
  { id:10, nombre:'Aquiles', propietario:4, fechaNac:new Date('2016-03-30'), raza:'Pit Bull', color:'Blanco/Beige', genero:'macho', tipo:1, fotoUrl:'https://geniusvets.s3.amazonaws.com/gv-dog-breeds/american-pitbull-1.jpg' },
  { id:11, nombre:'Roco', propietario:3, fechaNac:new Date('2012-03-30'), raza:'Cockapoo', color:'Beige', genero:'macho', tipo:1, fotoUrl:'https://i.pinimg.com/originals/53/c1/51/53c15188bf7db2e7bcfdadc084cc46f9.jpg' },
  { id:12, nombre:'Lucky', propietario:3, fechaNac:new Date('2010-03-30'), raza:'Cocker', color:'Miel', genero:'macho', tipo:1, fotoUrl:'https://cdn.wamiz.fr/cdn-cgi/image/quality=80,width=400,height=400,fit=cover/animal/breed/pictures/61cdd82c1ad1a326747653.jpg' },
  { id:13, nombre:'Molly', propietario:5, fechaNac:new Date('2021-11-30'), raza:'Pomerania', color:'Beige', genero:'hembra', tipo:1, fotoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pomeranian_Thank_You.jpg/250px-Pomeranian_Thank_You.jpg' },
  { id:14, nombre:'Whiskers', propietario:5, fechaNac:new Date('2021-02-10'), raza:'Snowshoe', color:'Blanco/Beige', genero:'hembra', tipo:2, fotoUrl:'https://i.pinimg.com/474x/dd/ba/94/ddba94a33f2e216182e9f8347b46c2c4--siamese-cats-kitty-cats.jpg' },
  { id:15, nombre:'Thor', propietario:6, fechaNac:new Date('2020-06-08'), raza:'Pastor Australiano', color:'Red Tri', genero:'macho', tipo:1, fotoUrl:'https://dogster.com/wp-content/uploads/2024/03/Red-Tri-Australian-Shepherd-Close-up.jpg' },
  { id:16, nombre:'Cookie', propietario:7, fechaNac:new Date('2016-08-12'), raza:'Chihuahua', color:'Miel', genero:'hembra', tipo:1, fotoUrl:'https://caracol.com.co/resizer/v2/D627YQLQEBC27I5UQZ2Y44ZG5U.jpg?auth=342359cc2a7f8feeda6a0782ffdbaee21c8ee871bcebb97c5e87ef1b43f2483f&width=1600&height=1200&quality=70&smart=true' },
  { id:17, nombre:'Daile', propietario:7, fechaNac:new Date('2012-11-14'), raza:'Schnauzer', color:'Gris/Negro', genero:'hembra', tipo:1, fotoUrl:'https://www.tiendanimal.es/articulos/wp-content/uploads/2018/12/schnauzer-1200x900.jpg' },
];
