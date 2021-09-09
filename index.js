const hourEl = document.querySelector('.hour'),
      minuteEl = document.querySelector('.minute'),
      secondEl = document.querySelector('.second'),
      timeEl = document.querySelector('.time'),
      dateEl = document.querySelector('.date'),
      toggleBtn = document.querySelector('.toggle');

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


      toggleBtn.addEventListener('click', () => {
          const html = document.querySelector('html');

          if (html.classList.contains('dark')) {
              html.classList.remove('dark');
              toggleBtn.innerHTML = 'Dark Mode';
          } else {
              html.classList.add('dark');
              toggleBtn.innerHTML = 'Light Mode';
          }
      })

      function setTime() {
          const time = new Date(),
                month = time.getMonth(),
                day = time.getDay(),
                hours = time.getHours(),
                hoursForClock = hours % 12,
                minutes = time.getMinutes(),
                seconds = time.getSeconds(),
                ampm = hours >= 12 ? 'PM' : 'AM';
          

                hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`;
                minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`;
                secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`;

                // timeEl.innerHTML = `${hours}:${minutes} ${ampm}`;
                timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
                dateEl.innerHTML = `${months[month]}, ${days[day]} <sapn class="circle">${day}</sapn>`
        }

            const scale = (num, in_min, in_max, out_min, out_max) => {
                return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
            }

            setTime();

            setInterval(setTime, 1000)