const timer = (deadline) => {
   const timerHours = document.getElementById('timer-hours')
   const timerMinutes = document.getElementById('timer-minutes')
   const timerSeconds = document.getElementById('timer-seconds')

   const getTimeRemaining = () => {
      let dateStop = new Date(deadline).getTime()
      let dateNow = new Date().getTime()
      let timeRemaining = (dateStop - dateNow) / 1000
      let hours = Math.floor(timeRemaining / 60 / 60)
      let minutes = Math.floor((timeRemaining / 60) % 60)
      let seconds = Math.floor(timeRemaining % 60)

      if (timeRemaining <= 0) {
         hours = 0;
         minutes = 0;
         seconds = 0;
         timeRemaining = 0;
      }
      return { timeRemaining, hours, minutes, seconds }
   }
   const addZero = (num) => (num < 10 ? '0' + num : num);
   const updateClock = () => {
      let getTime = getTimeRemaining()

      timerHours.textContent = addZero(getTime.hours);
      timerMinutes.textContent = addZero(getTime.minutes);
      timerSeconds.textContent = addZero(getTime.seconds);

      console.log("tick2");

      if (getTime.timeRemaining <= 0) {
         clearInterval(idInterval);
      }
   }
   const idInterval = setInterval(updateClock, 1000);
   updateClock()
}
export default timer;