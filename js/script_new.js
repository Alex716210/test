'use strict';


document.addEventListener('DOMContentLoaded', () => {


    const movieDB = {
        movies: [
            "Логан",
            "вархаммер",
            "Зохан",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Регби 23-55",
            "ЗА СПЕЦНАЗ",
            
        ]
    };


    const adv = document.querySelectorAll('.promo__adv'),
        genres = document.querySelector('.promo__genre'),
        poster = document.querySelector('.promo__bg'),
        listOfFilms = document.querySelector('.promo__interactive-list'),
        checkbox = document.querySelector('[type="checkbox"]'),
        addForm = document.querySelector('form.add'),
        addInput = document.querySelector('.adding__input');



    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorit = checkbox.checked;


        if (newFilm) {
            if (newFilm.length > 10) {
                newFilm = `${newFilm.substring(0,11)}...`;
            }
            if (favorit) {
                console.log('Ваш любимый фильм!!!');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createListOfFilms(listOfFilms, movieDB.movies);
        }
        event.target.reset();
    });

    function deleteArr(arr) {
        arr.forEach((item) => {
            item.remove();
        });
    }
    deleteArr(adv);


    function changeElement() {
        genres.textContent = "Драма";

        poster.style.backgroundImage = "URL('img/bg.jpg')";
    }
    changeElement();

    function sortArr(arr) {
        arr.sort();
    }
    sortArr(movieDB.movies);

    function createListOfFilms(parent, films) {

        parent.innerHTML = "";

        films.forEach((item, i) => {

            parent.innerHTML += `
           <li class="promo__interactive-item">${i + 1} ${item}
                  <div class="delete"></div>
           </li>
       `;
        });


        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', () => {
                item.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createListOfFilms(listOfFilms, movieDB.movies);
            });
        });
    }

    createListOfFilms(listOfFilms, movieDB.movies);
});