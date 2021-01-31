
export function fetchUniverses() {
    fetch('http://localhost:3000/universes/1/characters')
    .then(response => response.json())
    .then(data => console.log(data))
}