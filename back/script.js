const listarGeneros =  function() {
    let xhttp = new XMLHttpRequest()
    let generos = document.getElementById('generos')
    let url = "https://api.themoviedb.org/3/genre/movie/list?api_key=67b2714d65c0d94d2267c44f78f658f8&language=pt-BR"

 
    xhttp.open('get', url, false)
    xhttp.send()
    let responses = JSON.parse(xhttp.responseText)
  
    responses.forEach((genre)=>{
        let id = document.createElement('p')
        id.innerHTML = `
        ID: ${genre.genres.id} <br>
        Gênero: ${genre.genres.name} <br>
        `

        let div = document.createElement('div')
        div.className = 'col card bg-light'
        div.id = genre.id
    
        div.appendChild(p) 

        generos.appendChild(div)
    
    })
}