// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

const movies = require("./data");

const getAllDirectors = array => array.map(element => element.director)


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

//const howManyMovies = movies => movies.filter((element => (element.genre.includes('Drama') && element.director == 'Steven Spielberg'), howManyMovies.length)
const howManyMovies = (movies) => { 
  let filtered = movies.filter(element => {
    if (element.genre.includes('Drama') && element.director == 'Steven Spielberg')
      return true    
  })

  return filtered.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = movies => {
  if(!movies.length == 0){
    let filtered = movies.filter(element => {
      return typeof element.score === 'number'
    })
    let reduced = filtered.reduce((total, element) => {
     return (total + element.score)} ,0)
   
    return Number((reduced/movies.length).toFixed(2));
  } else {
    return 0
  }
}
  

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = movies => {
  if(!movies.length == 0){
    let reduced2 = 0;
    let filtered = movies.filter(element => {
      return element.genre.includes('Drama');
    }).filter(element => {
      return typeof element.score === 'number'
    }).reduce((total, element) => {
      reduced2++;
      return (total + element.score)} ,0)
      
      return Number((reduced2 ? filtered/reduced2 : 0).toFixed(2))
  } else {
    return 0
  }
}
/* const dramaMoviesScore = movies => {
  if(!movies.length == 0 ){
    let reducedDrama = movies.reduce((total, element) => {
      if (element.genre.includes('Drama')){ 
        return (total + element.score)}} ,0)
    console.log('Resultado',reducedDrama)
    return Number((reducedDrama/movies.length).toFixed(2));
  } else {
    return 0
  }
} 
 */
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = movies => {
  let cloneMovies = JSON.parse( JSON.stringify(movies))
  
  cloneMovies.sort( (first, second) => {
    if (first.year > second.year) {
       return 1       
    }
    else if (first.year < second.year) {
      return -1
    }
    else {
            if (first.title > second.title) {
             return 1       
          }
          else if (first.title < second.title) {
            return -1
          }
          else {
            return 0
          }
    }
    
  })
return cloneMovies;
}
/* const orderByYear = movies => {
  cloneMovies.sort((smaller, bigger) => {
    return(smaller.year > bigger.year ? 1 : smaller.year < bigger.year ? -1:0);
    

  })
  return cloneMovies;
}
 */
// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = movies => {
  let cloneMovies = JSON.parse( JSON.stringify(movies))
  
  cloneMovies.sort( (first, second) => {
    if (first.title > second.title) {
       return 1       
    }
    else if (first.title < second.title) {
      return -1
    }
    else {
      return 0
    }
    
  })
  let newArray = cloneMovies.slice(0,20)

  let answer = newArray.map(element => {
      return element.title
  })
  
return answer;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = movies => {

  let answer = movies.map(element => { // won't gonna lie Joanne had some 'external' help with this one ahah but i got all the logic anyways
    if (typeof element.duration !== 'string'){
      return element
    }
    let splited = element.duration.split(" ")
    
    let totalDuration = splited.reduce((total, element) => {
      if (element.includes('h')){
        return total + parseInt(element.substring(0,element.length))*60
      }
    if (element.includes('min')){
        return total + parseInt(element.substring(0,element.length-3))
      }
      return total
    }, 0)
   
    return { 
      ...element,
      duration : totalDuration
    }
    
  })
  
return answer;
}
// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}
//not time, gotta sleep 


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
