var spinner = document.getElementById('spinner')
var main = document.getElementById('main')

do {
  function waiting() {
    main.style.display = 'none'; 
    spinner.style.display = 'block';
  }
  fetch('https://swapi.co/api/people/1/')
  .then(function (response) {
    response.json().then(function(data) {
        var result = JSON.stringify(data)
        var newP = document.createElement('p');
        var Content = document.getElementById('content');
        newP.innerHTML = result;

        content.appendChild(newP);

      });
  })
  .catch(function (error) {
    alert('sorry something went wrong');
  })
} while ()

function hidding() {
  spinner.style.display = 'none';
  main.style.display = 'block'; 
}
