
export interface Person{
    name:string
    height:string 
    mass:string
    hair_color:string
    eye_color:string
    birth_year:string
    gender:string
    homeworld:string
    films: string[]
    species: string[]
    vehicles: string[]
    starships: string[]
    created:string
    edited:string
    url:string
}
export interface ResponsePeople {
    count:number
    next: string
    previous:string
    results: Person[];
  }