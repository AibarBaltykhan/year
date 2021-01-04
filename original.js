
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  figcaption = document.querySelector('figcaption'),
  blockquote = document.querySelector('blockquote');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
    let Date1 = new Date ();
    let Date2 = new Date (2019, 11, 23);
    let Days = Math.floor((Date1.getTime() - Date2.getTime())/(1000*60*60*24));
  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${Days} Days of happiness`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  if (hour > 4 && hour < 12) {
    // Morning
    document.body.style.backgroundImage =
      "url('./assets/фото/8.jpg')";
    greeting.textContent = 'Доброе утро, жаным!';
    document.body.style.color = 'white';
  } else if (hour >= 12 && hour < 20) {
    // Afternoon
    document.body.style.backgroundImage =
      "url('./assets/фото/10.jpg')";
    greeting.textContent = 'Каждый день с тобой - прекрасный!';
    document.body.style.color = 'white';
  } else {
    // Evening
    document.body.style.backgroundImage =
      "url('./assets/фото/7.jpg')";
    greeting.textContent = 'Люблю тебя!';
    document.body.style.color = 'white';
  }
  document.body.weather.style.backgroundImage = 
  "url('./assets/фото/4.jpg')";
}

function setQuote() {
  let quote = [];
  quote[0] = 'Любовь - это когда она засыпает под твои любимые фильмы';
  quote[1] = 'Любовь - это вместе пытаться открыть вино подручными средствами';
  quote[2] = 'Любовь - это извиняться за свою победу в карты (морской бой, квиз и тд)';
  quote[3] = 'Любовь - это вместе смотреть СУК';
  quote[4] = 'Любовь - это делать друг другу массаж';
  quote[5] = 'Любовь - это обсуждать секс в мельчайших подробностях';
  quote[6] = 'Любовь - это ревновать к коллегам и одноклассникам';
  quote[7] = 'Любовь - это принимать душ совместно';
  quote[8] = 'Любовь - это вместе выбирать, что заказывать в вольт';
  quote[9] = 'Любовь - это ходить вместе на квиз плиз';
  quote[10] = 'Любовь - это когда для тебя готовят вкусности';
  quote[11] = 'Любовь - это когда всю неделю ждешь воскресение';
  quote[12] = 'Любовь - это вместе стирать простынь в отеле';
  quote[13] = 'Любовь - это греть руки в карманах друг друга';
  quote[14] = 'Любовь - это целоваться (и не только) в парке';
  quote[15] = 'Любовь - это бриться перед каждой встречей';
  quote[16] = 'Любовь - это когда ради тебя встают пораньше, чтобы приготовить завтрак';
  quote[17] = 'Любовь - это планировать совместное будущее';
  quote[18] = 'Любовь - это получать самые лучшие подарки на праздники';
  let today = new Date();
  let Date1 = new Date ();
  let Date2 = new Date (2019, 11, 23);
  let Days = Math.floor((Date1.getTime() - Date2.getTime())/(1000*60*60*24));
  blockquote.textContent = quote[(Days+12)%19];
  //figcaption.textContent = 'Aibar';
}


// Run
setQuote();
showTime();
setBgGreet();

