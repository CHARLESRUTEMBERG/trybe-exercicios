
const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
     const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
     weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //A tag <ul> deve conter o id 'days';
//Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li>;
//Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li>;
//Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li>.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const createDaysOfTheMonth = () => {
  let daysList = document.querySelector('#days');
  for (let index = 0; index < decemberDaysList.length; index += 1) {
    let day = decemberDaysList[index];
    let dayIten = document.createElement('li');
    dayIten.innerHTML = day;
    if (day === 24 || day === 31) {
      dayIten.className = 'day holiday';
      daysList.appendChild(dayIten);
    }else if (day ===4 || day === 11 || day ===18) {
      dayIten.className = 'day friday';
      daysList.appendChild(dayIten);
    }else if (day === 25) {
      dayIten.className = 'day holiday friday';
      daysList.appendChild(dayIten);
    }else {
      dayIten.className = 'day';
      dayIten.innerHTML = day;
      daysList.appendChild(dayIten);
    }
  }
}
createDaysOfTheMonth();

const botonHoliday = (botonName) => {
  let div = document.getElementsByClassName('buttons-container')[0];
  let boton = document.createElement('button');
  let botonId = 'btn-holiday';
  boton.innerHTML = botonName;
  boton.id = botonId;

  div.appendChild(boton);
}
botonHoliday('Feriados');

const holiday = () => {
  let holidayBoton = document.getElementById('btn-holiday');
  let holidays = document.querySelectorAll('.holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  holidayBoton.addEventListener('click', () => {
    for (index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === setNewColor) {
        holidays[index].style.backgroundColor = backgroundColor;
      } else {
        holidays[index].style.backgroundColor = setNewColor;
      }
    }
  });
};
holiday();
 
 const fridayBoton = (botonName) => {
  let botonContainer = document.querySelector('.buttons-container');
  let newBoton = document.createElement('button');
  let newBotonId = 'btn-friday';

  newBoton.innerHTML = botonName;
  newBoton.id = newBotonId;
  botonContainer.appendChild(newBoton);
 }
 fridayBoton('Sexta-feira');

 const friday = () => {
  let fridayBoton = document.getElementById('btn-friday');
  let fridays = document.querySelectorAll('.friday');
  let backgroundColor = 'rgb(238,238,238)';
  let setNewColor = 'white';

  fridayBoton.addEventListener('click', () => {
    for (index = 0; index < fridays.length; index += 1) {
      if (fridays[index].style.backgroundColor === setNewColor) {
        fridays[index].style.backgroundColor = backgroundColor;
      } else {
        fridays[index].style.backgroundColor = setNewColor;
      }
    }
  });
};
friday();

const dayMouseOver = () => {
  let days = document.getElementById('days');
  days.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';

  });
}

const dayMouseOut = () => {
  let days = document.getElementById('days');
  days.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';

  });
}
dayMouseOver();
dayMouseOut();

const myTasks = (tasks) => {
  let newMyTasks = document.querySelector('.my-tasks');
  let newMyTasksElement = document.createElement('span');

  newMyTasksElement.innerHTML =  tasks;
  newMyTasks.appendChild(newMyTasksElement);
}
myTasks('projeto');

const newColor = (color) => {
  let myTasks = document.querySelector('.my-tasks');
  let div = document.createElement('div');
  div.className = 'task';
  div.style.backgroundColor = color;
  myTasks.appendChild(div);
}
newColor('green');

const taskClass = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let mytasks = document.querySelector('.task');
  
  myTasks.addEventListener('click', (event) => {
    if (selectedTask.length === 0) {
      event.target.className = 'task selected';
    }else {
      event.target.className = 'task';
    }
  });
}
taskClass();

const setDayColor = () => {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;

  days.addEventListener('click', (event) => {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color
    } else if (eventTargetColor === taskColor) {
      event.target.style.color = 'rgb(119, 119, 119)';
    }
  });
}
setDayColor();

const addNewTask = () => {
  let getInputField = document.querySelector('#task-input');
  let addInputButton = document.querySelector('#btn-add');
  let getTaskList = document.querySelector('.task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      let newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  })
}
addNewTask();

