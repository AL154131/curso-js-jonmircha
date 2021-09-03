/*
  27) Programa una clase llamada Pelicula.

  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
      7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
      aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.

  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

  SE PODRIA HABER PUESTO EL ARREGLO CON LOS GENEROS ACEPTADOS COMO UN GET STATICO PARA USARLO AL VALIDAR LOS GENEROS Y PARA IMPRIMIRLOS.
*/

class Movie {
  constructor(obj) {
    const MAX_CHARS_TITLE = 100;
    const MAX_CHARS_DIRECTOR = 50;
    const regexImdbId = /^ev\d{7}\/\d{4}(-\d)?$|^(ch|co|ev|nm|tt)\d{7}$/;
    const regexYear = /^\d{4}$/;
    const regexRating = /^\d+(?:\.\d{1})?$/;
    const acceptedGenres = [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
    const completeData = this.validateCompleteData(obj);
    const validatedGenres = this.validateGenres(obj.genres, acceptedGenres);

    this.runValidations(
      obj,
      completeData,
      MAX_CHARS_TITLE,
      MAX_CHARS_DIRECTOR,
      regexImdbId,
      regexYear,
      validatedGenres,
      regexRating
    );

    this.fillObject(obj);
  }

  runValidations(
    obj,
    completeData,
    MAX_CHARS_TITLE,
    MAX_CHARS_DIRECTOR,
    regexImdbId,
    regexYear,
    validatedGenres,
    regexRating
  ) {
    if (!completeData.status)
      throw new Error(
        `The "${completeData.missingKey}" attribute of the object is missing.`
      );

    if (!this.validateRegex(obj.id, regexImdbId))
      throw new Error(`The id: "${obj.id}" is not valid.`);

    if (!this.validateMaxCharacters(obj.title, MAX_CHARS_TITLE))
      throw new Error(
        `The title: "${obj.title}" is longer than ${MAX_CHARS_TITLE} characters.`
      );

    if (!this.validateMaxCharacters(obj.director, MAX_CHARS_DIRECTOR))
      throw new Error(
        `The director's name: "${obj.director}" is longer than ${MAX_CHARS_DIRECTOR} characters.`
      );

    if (
      !this.validateRegex(obj.releaseYear, regexYear) ||
      typeof obj.releaseYear !== "number"
    )
      throw new Error(`The release year: "${obj.releaseYear}" is not valid.`);

    if (!Array.isArray(obj.countries))
      throw new Error("The countries attribute must be an array.");

    if (!Array.isArray(obj.genres))
      throw new Error("The genres attribute must be an array.");

    if (!validatedGenres.status)
      throw new Error(
        `The genre "${validatedGenres.invalidGenre}" is not valid.`
      );

    if (typeof obj.rating !== "number")
      throw new Error(`The rating "${obj.rating}" is not a number.`);

    if (obj.rating < 0 || obj.rating > 10)
      throw new Error(`The rating "${obj.rating}" must be between 0 and 10.`);

    if (!this.validateRegex(obj.rating, regexRating))
      throw new Error(
        `The rating "${obj.rating}" can only have 1 digit after the decimal point.`
      );
  }

  validateCompleteData(obj) {
    const keys = [
      "id",
      "title",
      "director",
      "releaseYear",
      "countries",
      "genres",
      "rating",
    ];
    for (const key of keys) {
      if (!obj.hasOwnProperty(key))
        return {
          status: false,
          missingKey: key,
        };
    }
    return {
      status: true,
      missingKey: null,
    };
  }

  validateRegex(string, regex) {
    return regex.test(string);
  }

  validateMaxCharacters(string, maxChars) {
    return string.length <= maxChars ? true : false;
  }

  validateGenres(genres, acceptedGenres) {
    for (const genre of genres) {
      if (!acceptedGenres.includes(genre))
        return { status: false, invalidGenre: genre };
    }
    return { status: true, invalidGenre: null };
  }

  static getAcceptedGenres() {
    return [
      "Action",
      "Adult",
      "Adventure",
      "Animation",
      "Biography",
      "Comedy",
      "Crime",
      "Documentary",
      "Drama",
      "Family",
      "Fantasy",
      "Film Noir",
      "Game-Show",
      "History",
      "Horror",
      "Musical",
      "Music",
      "Mystery",
      "News",
      "Reality-TV",
      "Romance",
      "Sci-Fi",
      "Short",
      "Sport",
      "Talk-Show",
      "Thriller",
      "War",
      "Western",
    ];
  }

  fillObject(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.director = obj.director;
    this.releaseYear = obj.releaseYear;
    this.countries = obj.countries;
    this.genres = obj.genres;
    this.rating = obj.rating;
  }

  printDataSheet() {
    console.info(`
    ***** ${this.title.toUpperCase()} *****\n
    Id: ${this.id}
    Title: ${this.title}
    Director: ${this.director}
    Release year: ${this.releaseYear}
    Country of origin: ${this.countries}
    Genres: ${this.genres}
    Rating: ${this.rating}`);
  }
}

const createMovies = (array) => {
  const movies = [];
  array.forEach((element, index) => {
    movies[index] = new Movie(element);
  });
  return movies;
};

const m1 = new Movie({
  id: "tt0848228",
  title: "The Avengers",
  director: "Joss Whedon",
  releaseYear: 2012,
  countries: ["United States"],
  genres: ["Action", "Adventure", "Sci-Fi"],
  rating: 8.0,
});

const m2 = new Movie({
  id: "tt0338013",
  title: "Eternal Sunshine of the Spotless Mind",
  director: "Michel Gondry",
  releaseYear: 2004,
  countries: ["United States"],
  genres: ["Drama", "Romance", "Sci-Fi"],
  rating: 8.3,
});

const m3 = new Movie({
  id: "tt8772262",
  title: "Midsommar",
  director: "Ari Aster",
  releaseYear: 2019,
  countries: ["United States", "Sweden"],
  genres: ["Drama", "Horror", "Mystery"],
  rating: 7.1,
});

// console.info(m1);

// console.info(Movie.getAcceptedGenres());

// m1.printDataSheet();
// m2.printDataSheet();
// m3.printDataSheet();

const movies = createMovies([
  {
    id: "tt0848228",
    title: "The Avengers",
    director: "Joss Whedon",
    releaseYear: 2012,
    countries: ["United States"],
    genres: ["Action", "Adventure", "Sci-Fi"],
    rating: 8.0,
  },
  {
    id: "tt0338013",
    title: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    releaseYear: 2004,
    countries: ["United States"],
    genres: ["Drama", "Romance", "Sci-Fi"],
    rating: 8.3,
  },
  {
    id: "tt8772262",
    title: "Midsommar",
    director: "Ari Aster",
    releaseYear: 2019,
    countries: ["United States", "Sweden"],
    genres: ["Drama", "Horror", "Mystery"],
    rating: 7.1,
  },
  {
    id: "tt3783958",
    title: "La La Land",
    director: "Damien Chazelle",
    releaseYear: 2016,
    countries: ["United States", "Hong Kong"],
    genres: ["Comedy", "Drama", "Music"],
    rating: 8.0,
  },
  {
    id: "tt0816692",
    title: "Interstellar",
    director: "Christopher Nolan",
    releaseYear: 2014,
    countries: ["United States", "United Kingdom", "Canada"],
    genres: ["Adventure", "Drama", "Sci-Fi"],
    rating: 8.6,
  },
]);

movies.forEach((movie) => {
  movie.printDataSheet();
});
