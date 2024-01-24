const clock = document.querySelector('#clock')


setInterval(()=>{
     const time = new Date()
     const accurateTime = time.toLocaleTimeString()
     clock.innerHTML = accurateTime},
    1000)
