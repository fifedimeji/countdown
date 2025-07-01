const countdown = document.querySelector('.countdown')

// SET LAUNCH DATE
const launchDate = new Date('Aug 30, 2025 13:00:00').getTime()

// UPDATE EVERY SECOND
const interval = setInterval(() => {
    // GET DATE AND TIME IN MS
    const now = new Date().getTime()
    // TIME FROM NOW TILL LAUNCH DATE
    const time = launchDate - now
    // TIME CALCULATIONS
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    const secs = Math.floor((time % (1000 * 60)) / 1000)

    // DISPLAY RESULT
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${secs}<span>Seconds</span></div>
    `

    // IF LAUNCH DATE PASSED
    if(time < 0){
        // STOP COUNTDOWN
        clearInterval(intvl)
        // STYLE AND OUTPUT TEXT
        countdown.style.color = '#FF851B'
        countdown.innerHTML = 'Launched!'
    }
}, 1000)