'use strict';

// презентация
// главное изображение
let mainPhoto = document.querySelector(".presentation-main");

// переменная содержащая все карточки-радиокнопки
let cards = document.querySelectorAll(".card-presenration")

// цикл обрабатывающий действие клик по блоку карточки
cards.forEach(function(card) {
    card.addEventListener("click", function(e) {
        let card = e.target.closest(".card-presenration")
        //получение пути к изображению, который отображен в карточке
        let src = card.querySelector("img").src;

        //изменение главного изображения
        mainPhoto.setAttribute("src", src)
    });
});

// слайдер
// тело слайдера
let slider = document.querySelector('.container-slider-body');
// кнопка вперед
let nextButton = document.querySelector('.button-slider-right');
// кнопка назад
let prevButton = document.querySelector('.button-slider-left');
// ширина слайда
let slideWidth = slider.querySelector('.card-slider').scrollWidth;
// слайдер + gap
slideWidth += 20;

nextButton.addEventListener('click', function(e) {
    slider.scrollLeft += slideWidth;
});

prevButton.addEventListener('click', function(e) {
    slider.scrollLeft -= slideWidth;
}); 

// аккордеон
let cardsAccordion = document.querySelectorAll(".card-accordion");

cardsAccordion.forEach(cardAccordion => {
    cardAccordion.addEventListener("click", function (e) {
        let card = e.target.closest('.card-accordion');

        // переменная с иконкой
        let icon = card.querySelector("img");

        // переменная с телом карточки
        let cardBody = card.querySelector(".card-accordion-body");


        // проверка на то есть ли у элемента класс, говорящий о том что иконку развернули - раскрыли аккордеон
        if (icon.classList.contains("rotate-icon")) {
            // скрываем блок с ответами
            cardBody.classList.remove("card-accordion-body-animation");
            // удаляем класс анимации вращения
            icon.classList.remove("rotate-icon");
        } else {
            // запускаем анимацию раскрытия карточки аккордеона
            cardBody.classList.add("card-accordion-body-animation");
            //  добавляем анимацию вращения иконки
            icon.classList.add("rotate-icon");
        }

       
    })
});

// анимация "Наверх" в шапке
document.querySelector(".to-header").addEventListener("click", function(e){
    document.documentElement.scrollTop = 0;
})

// меню мобильное
let menu = document.querySelector(".menu-phone")
// блок кнопки бургер
let iconMenu = document.querySelector(".header-phone-icon");
// изображение кнопки бургера
let iconMenuImg = document.querySelector(".header-phone-icon-img");
// шапка мобильного меню
let headerPhoneContainer = document.querySelector(".header-phone")
// элементы после нажатия на которых должно закрываться меню
let menuCloseButton = document.querySelectorAll(".menu-phone-close");
// вместо лого "Меню"
let headerMenuTitle = document.querySelector(".header-phone-title");
// лого
let logo = document.querySelector(".logo");
let F = 0; // меню отключено


// анимация открытия и закрытия окна по кнопке меню
iconMenu.addEventListener("click", function (e) {

    if (F==0) {
        
        logo.classList.add("none");
        e.target.setAttribute("src", "images/icon/close-white.svg");
        iconMenuImg.classList.add("rotate");
        menu.classList.remove("none");
        headerMenuTitle.classList.remove("none");
        headerPhoneContainer.classList.add("header-phone-open")


        F=1; // открыли меню
    }else{
        
        logo.classList.remove("none");
        e.target.setAttribute("src", "images/icon/burger-white.svg")
        iconMenuImg.classList.remove("rotate");
        menu.classList.add("none");
        headerMenuTitle.classList.add("none");
        headerPhoneContainer.classList.remove("header-phone-open")

        F=0; // закрыли
    }
})

// реализация закрытия окна после нажатия на пункты меню
menuCloseButton.forEach(function (button) {
    button.addEventListener("click", function (e) {
        logo.classList.remove("none");
        iconMenuImg.setAttribute("src", "images/icon/burger-white.svg")
        iconMenuImg.classList.remove("rotate");
        menu.classList.add("none");
        headerMenuTitle.classList.add("none");
        headerPhoneContainer.classList.remove("header-phone-open")

        F=0; // закрыли
    })
})

// изменение лого от размеров экрана
window.addEventListener("resize", function() {
    if (window.innerWidth < 1366){
        this.document.querySelector(".logo-img").setAttribute("src", "images/logo/mobile-static.svg")
    } else{
        this.document.querySelector(".logo-img").setAttribute("src", "images/logo/static.svg")
    }
});