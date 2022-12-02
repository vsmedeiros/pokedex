function searchBar() {
    let input = document.getElementById('searchBar').value
    input=input.toLowerCase();
    let name = document.getElementsByClassName('name');
    let pokemon = document.getElementsByClassName('pokemon');
      
    for (i = 0; i < name.length; i++) { 
        if (!name[i].innerHTML.toLowerCase().includes(input)) {
            pokemon[i].style.display="none";
        }
        else {
            pokemon[i].style.display="list-item";                 
        }
    }
}