// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');
  day = document.querySelector('.day');
  btn = document.querySelector('.btn-picture');
  base = './assets/images/';
  images0 = ['1.jpg', '2.jpg', '3.jpg']
  images1 = ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg'];
  images2 = ['07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg'];
  images3 = ['13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg'];
  images4 = ['19.jpg', '20.jpg', '04.jpg', '08.jpg', '12.jpg', '16.jpg'];
  let i;
  let k = 0;


// Show Time
function showTime() {
  var Date1 = new Date ();
  var Date2 = new Date (2019, 11, 23);
  var Days = Math.floor((Date2.getTime() - Date1.getTime())/(1000*60*60*24));
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    dayOfWeek = today.getDay(),
    dayOfMonth = today.getDate(),
    month = today.getMonth();

    if (dayOfWeek === 0 ) {
      dayOfWeek = 'Sunday';
    } else if (dayOfWeek === 1) {
      dayOfWeek = 'Monday';
    } else if (dayOfWeek === 2) {
      dayOfWeek = 'Tuesday';
    } else if (dayOfWeek === 3) {
      dayOfWeek = 'Wednesday';
    } else if (dayOfWeek === 4) {
      dayOfWeek = 'Thursday';
    } else if (dayOfWeek === 5) {
      dayOfWeek = 'Friday';
    } else if (dayOfWeek === 6) {
      dayOfWeek = 'Saturday';
    }

    if (month === 0) {
      month = 'January';
    } else if (month === 1) {
      month = 'February';
    } else if (month === 2) {
      month = 'March';
    } else if (month === 3) {
      month = 'April';
    } else if (month === 4) {
      month = 'May';
    } else if (month === 5) {
      month = 'June';
    } else if (month === 6) {
      month = 'July';
    } else if (month === 7) {
      month = 'August';
    } else if (month === 8) {
      month = 'September';
    } else if (month === 9) {
      month = 'October';
    } else if (month === 10) {
      month = 'November';
    } else if (month === 11) {
      month = 'December';
    }


  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  day.innerHTML = `${dayOfWeek}<span>, </span>${month}<span> </span>${dayOfMonth}`;
  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12 && hour >= 6) {
    // Morning
    //document.body.style.backgroundImage =
   //   "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18 && hour >= 12) {
    // Afternoon
   // document.body.style.backgroundImage =
   //   "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24 && hour >= 18){
    // Evening
   // document.body.style.backgroundImage =
   //   "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  } else {
    // Night
   // document.body.style.backgroundImage =
   // "url('https://i.ibb.co/924T2Wv/night.jpg')";
  greeting.textContent = 'Good Night, ';
  document.body.style.color = 'white';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}


function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}
function getImage() {
  index = i % 24;
  let folder;
  k = k % 3;
  if (i < 6) {
    folder = 'night/';
  } else if (i < 12) {
    folder = 'morning/';
  } else if (i < 18) {
    folder = 'afternoon/';
  } else {
    folder = 'evening/'
  }
  const imageSrc = base + folder + images0[(index%3)+1];
  viewBgImage(imageSrc);
  btn.disabled = true;
  setTimeout(function() { btn.disabled = false }, 1000);
} 


let today = new Date(),
  i = today.getHours();
btn.addEventListener('click', getImage);
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();