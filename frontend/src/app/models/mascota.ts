export interface Mascota {
  id?:number,
  nombre:string,
  propietario:number,
  fechaNac:Date,
  raza:string,
  color:string,
  genero:'macho'|'hembra',
  tipo:number,
  fotoUrl?:string
}
