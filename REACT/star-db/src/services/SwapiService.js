export default class SwapiService {
  _apiBase = "https://swapi.co/api";
_imageBase ="https://starwars-visualguide.com/assets/img";

  getResourse = async url => {
    const res = await fetch(`${this._apiBase}${url}`);
    return res.json();
  };
  getAllPeople = async () => {
    let res = await this.getResourse("/people/");
    return res.results.map(this._transformPerson);
  };
  getPerson = async id => {
    const person = await this.getResourse(`/people/${id}/`);
    return this._transformPerson(person);
  };
  getAllPlanets = async () => {
    let res = await this.getResourse("/planets/");
    return res.results.map(this._transformPlanet);
  };
  getPlanet = async id => {
    const planet = await this.getResourse(`/planets/${id}/`);
    return this._transformPlanet(planet);
  };
  getAllStarships = async () => {
    let res = await this.getResourse("/starships/");
    console.log(res.results);
    
    return res.results.map(this._transformStarship);
  };
  getStarship = async id => {
    const starship = await this.getResourse(`/starships/${id}/`);
    return this._transformStarship(starship);
  };
getPersonImage=({id})=>{
  return `${this._imageBase}/characters/${id}.jpg`;
}
getPlanetImage=({id})=>{
  return `${this._imageBase}/planets/${id}.jpg`;
}
getStarshipImage=({id})=>{
  return `${this._imageBase}/starships/${id}.jpg`;
}


  _extractId = item => {
    return item.url.match(/\/(\d)*\/$/)[1];
  };
  _transformPerson = person => {
    return {
      id: this._extractId(person),
      name: person.name,
      mass: person.mass,
      birthYear: person.birth_year,
      gender: person.gender,
      eyeColor: person.eye_color
    };
  };
  _transformPlanet = planet => {
    return {
      id: this._extractId(planet),
      name: planet.name,
      diameter: planet.diameter,
      climate: planet.climate,
      rotationPeriod: planet.rotation_period,
      terrain: planet.terrain,
      population: planet.population
    };
  };
  _transformStarship = starship => {
    return {
      id: this._extractId(starship),
      name: starship.name,
      model: starship.model,
      crew: starship.crew,
      starshipClass: starship.starship_class,
      passengers: starship.passengers,
      manufacturer: starship.manufacturer,
      length:starship.length

    };
  };
}
