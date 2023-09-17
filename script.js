
const btn = document.getElementById("Btn");
const nom = document.getElementById("Nombre");
const ape = document.getElementById("Apellido");
const date = document.getElementById("Fecha");

btn.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            Nombre: nom.value,
            Apellido: ape.value,
            FechaNacimineto: date.value
        })
    })
        .then(res => res.text())
        .then(str => Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: str
        }))
});