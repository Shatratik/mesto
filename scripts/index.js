let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let close = document.querySelector('.popup__close-button');
let name = document.querySelector('.profile__name');
let title = document.querySelector('.profile__title');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__input_id_name');
let jobInput = formElement.querySelector('.popup__input_id_title');

// Профиль
function handleOpen(){
    nameInput.value = name.textContent
    jobInput.value = title.textContent
    popup.classList.add('popup_opened');
};

function handleClose(){
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', handleOpen);

close.addEventListener('click', handleClose);

function handleFormSubmit (evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    title.textContent = jobInput.value;
    handleClose();
}

formElement.addEventListener('submit', handleFormSubmit); 

// Добавить карточку

function handleOpen(){
    nameInput.value = name.textContent
    jobInput.value = title.textContent
    popup.classList.add('popup_opened');
};

function handleClose(){
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', handleOpen);

close.addEventListener('click', handleClose);

function handleFormSubmit (evt) {
    evt.preventDefault();

    name.textContent = nameInput.value;
    title.textContent = jobInput.value;
    handleClose();
}

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 

const elements__list = document.querySelector(".elements__list"); 




initialCards.forEach((card) => {
    const element =  document.createElement("li")
    element.classList.add("element")

    let flag = false


    const button = document.createElement("button")
    button.classList.add("element__delete-button")
    button.addEventListener("click", () => {
        deleteCard(element)
    })

    const image = document.createElement("img")
    image.classList.add("element__mask-group")
    image.src = card.link

    const element__container = document.createElement("div")
    element__container.classList.add("element__container")    
    const name = document.createElement("h2")
    name.classList.add("element__text")
    name.textContent = card.name

    const button2 = document.createElement("button")
    button2.classList.add("element__like-button")
    
    button2.addEventListener("click", () => {
        if(!flag){ 
            button2.classList.add("black__heart")
            flag=true
        }
        else{
            button2.classList.remove("black__heart")
            flag=false
        }
    })
    
    elements__list.appendChild(element)
    element.appendChild(image)
    element.appendChild(button)
    element.appendChild(element__container)     
    element__container.appendChild(name)
    element__container.appendChild(button2)
})





