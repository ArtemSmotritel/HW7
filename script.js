var result = 1;
var spinner = getElementById('spinner')
var main = getElementById('main')

function main_func() {
  
if (true) {
  function waiting() {
    main.style.display = 'none'; 
    spinner.style.display = 'block';
  }
  fetch('https://swapi.co/api/people/1/')
  .then(function (response) {
    response.json().then(function(data) {
      console.log(data)
      function creating(data) {
        result = data;
        console.log(result)
        var p;
        var content = document.getElementById('content');
        p = document.createElement('p');
        p.innerHTML = result;
        content.appendChild('p');  

       }
      });
  })
  .catch(function (error) {
    alert('sorry something went wrong');
  })

}
else  {
  function hidding() {
  spinner.style.display = 'none';
  main.style.display = 'block'; 
  }
}

}
