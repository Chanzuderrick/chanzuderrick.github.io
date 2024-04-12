function addYear(){
    let now = new Date()

    let year = now.getFullYear();

    document.getElementById('year').textContent = year;
}

addYear();

function removePreloader(){
    let preloader = document.querySelector('.preloader');

    preloader.style = "display: none";
}