const poster =document.getElementById("poster")
const titles =document.getElementById("films")
const movieTitle =document.getElementById("title")
const description =document.getElementById("film-info")
const runtime = document.getElementById("runtime")
const showtime =document.getElementById("showtime")
const ticketsRem =document.getElementById("ticket-num")
const ticket =document.getElementById("buy-ticket")
//ADD THE FIRST MOVIE

function firstmovie(film) {
poster.src =film.poster;
    poster.alt =film.title;

    const title =document.createElement('li')
     title.innerText = film.title;
     titles.replaceChildren(title);

     movieTitle.innerHTML =film.title;

     description.innerHTML=film.description;

     runtime.innerHTML = film.runtime;

     showtime.innerHTML = film.showtime;
 
     ticketsRem.innerHTML =(film.capacity - film.tickets_sold);


}


fetch('http://localhost:3000/films/1')
 .then(response => response.json())
 .then(firstmovie);
    
 //Add Movie Titles
 fetch('http://localhost:3000/films')
.then(response => response.json())
.then(films => {
    films.forEach(film => {
        const title = document.createElement('li');
        title.innerText = film.title;
        titles.appendChild(title);
    })

});
//Buy movie tickets
fetch('http://localhost:3000/films/1')
.then(response => response.json())
.then(film => {
    let soldTickets = film.tickets_sold;
    film.forEach(
ticket.addEventListener('click', () => {
    soldTickets = soldTickets + 1;
    ticketsRem.innerHTML = (film.capacity - soldTickets);
    if (ticketsRem.innerHTML <= 0) {
        alert("SOLD OUT!!")
    }
}))});