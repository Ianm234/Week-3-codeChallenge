
fetch('http://192.168.20.118:8080')
  .then(response => response.json())
  .then(data => {
    
    const filmsList = document.getElementById('films');
    data.forEach(film => {
      const filmItem = document.createElement('li');
      filmItem.classList.add('film', 'item');
      filmItem.textContent = film.title;
      filmItem.addEventListener('click', () => displayMovieDetails(film));
      filmsList.appendChild(filmItem);
    });

    
    if (data.length > 0) {
      displayMovieDetails(data[0]);
    }
  })
  .catch(error => console.error(error));

function displayMovieDetails(movie) {
  const poster = document.getElementById('poster');
  const title = document.getElementById('title');
  const runtime = document.getElementById('runtime');
  const showtime = document.getElementById('showtime');
  const availableTickets = document.getElementById('available-tickets');

  poster.src = movie.poster;
  title.textContent = movie.title;
  runtime.textContent = `Runtime: ${movie.runtime} minutes`;
  showtime.textContent = `Showtime: ${movie.showtime}`;
  const ticketsAvailable = movie.capacity - movie.tickets_sold;
  availableTickets.textContent = `Available Tickets: ${ticketsAvailable}`;
}
