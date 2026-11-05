// STEP3: generar la interface de respuesta de la petición que vamos a implementar (https://swapi.dev/api/people)

export interface PeopleListResponse {
  count: number
  next: string
  previous: string
  results: People[]
}

export interface People {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  created: string
  edited: string
  url: string
}
