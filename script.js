var result = 1;


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














































// var result;

// function getInfo (url) {
//   fetch(url)
//     .then(function (response) {
//     	response.json().then(function(data) {
//     		result = document.createElement('p')
//     		p = data;
//             console.log(data);
//         });
//   	})
//     .catch(function (error) {
//     	alert('sorry something went wrong');
//   	})
// }



// function creating (argument) {
// 	// body...
// }