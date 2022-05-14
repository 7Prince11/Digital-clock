const clock = document.getElementById('for_js')

let hours = new Date().getHours()
let minutes = new Date().getMinutes()
let seconds = new Date().getSeconds()
let pm = hours >= 12 ? ' PM' : 'AM'
hours = hours % 12
hours = hours ? hours : 12
minutes = minutes < 10 ? '0' + minutes : minutes
let strTime = `${hours}:${minutes}:${seconds} ${pm}`

clock.innerHTML = strTime;

const PM = () => {
	let hours = new Date().getHours()
	let minutes = new Date().getMinutes()
	let seconds = new Date().getSeconds()
	let pm = hours >= 12 ? ' PM' : 'AM'
	hours = hours % 12
	hours = hours ? hours : 12
	minutes = minutes < 10 ? '0' + minutes : minutes
	let strTime = `${hours}:${minutes}:${seconds} ${pm}`
	return strTime
}

setInterval(() => (clock.innerHTML = PM()), 1000)
