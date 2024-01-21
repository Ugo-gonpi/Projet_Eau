// ----------------Ici on taret tous les elements qui nous seront necessaire-------------

let verresEau = document.querySelectorAll(".glassesContainer")
let verre = document.querySelectorAll(".glass") 
let quantiteEau = document.querySelector("#current") // <quantité d'eau selectionnée
let eauRestante = document.querySelector("#remaining") //<quantité d'eau restante

// console.log(verresEau);

//Ici nous avons la boucle qui sert a remplir et vider les verres d'eau, en utilisant un case pour chaque verre

for(let i = 0; i < verresEau.length; i++) {
    verresEau[i].addEventListener("click", (e) => {

        let p = e.target.parentElement;
        let index = Array.prototype.indexOf.call(p.children, e.target);

        if(e.target.className.includes("glass")){
            e.target.firstElementChild.classList.add("fullGlass");
        }

        for (let x = 0; x < index; x++) {
            verre[x].firstElementChild.classList.add("fullGlass")
        }

        for (let x = 7; x > index; x--) {
            verre[x].firstElementChild.classList.remove("fullGlass")
        }

        switch (index) {
            case 0:
                quantiteEau.style.height = 10 + "%"
                eauRestante.style.height = 80 + "%"
                quantiteEau.firstElementChild.innerHTML = "0.25L"
                break;
            case 1:
                quantiteEau.style.height = 20 + "%"
                eauRestante.style.height = 70 + "%"
                quantiteEau.firstElementChild.innerHTML = "0.5L"
                break;
            case 2:
                quantiteEau.style.height = 30 + "%"
                eauRestante.style.height = 60 + "%"
                quantiteEau.firstElementChild.innerHTML = "0.75L"
                break;
            case 3:
                quantiteEau.style.height = 40 + "%"
                eauRestante.style.height = 50 + "%"
                quantiteEau.firstElementChild.innerHTML = "1L"
                break;
            case 4:
                quantiteEau.style.height = 50 + "%"
                eauRestante.style.height = 40 + "%"
                quantiteEau.firstElementChild.innerHTML = "1.25L"
                break;
            case 5:
                quantiteEau.style.height = 60 + "%"
                eauRestante.style.height = 30 + "%"
                quantiteEau.firstElementChild.innerHTML = "1.5L"
                break;
            case 6:
                quantiteEau.style.height = 70 + "%"
                eauRestante.style.height = 20 + "%"
                waterQuantity.firstElementChild.innerHTML = "1.75L"
                break;
            case 7:
                quantiteEau.style.height = 80 + "%"
                eauRestante.style.height = 10 + "%"
                quantiteEau.firstElementChild.innerHTML = "2L"
                break;
        }
    });
}