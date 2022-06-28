

const randomEmote = document.querySelector('#randomEmote')
const randomPhrase = document.querySelector('#randomPhrase')
const refreshButton = document.querySelector('#refreshButton')



// onclick="generateRandoms()"

function getRandomIndex(length) {
	return Math.floor(Math.random() * length)
}



function generateRandoms(){
  
	let selectedRandomEmote = asciimoji[getRandomIndex(asciimoji.length)]
	let selectedRandomPhrase = phrases[getRandomIndex(phrases.length)]
	randomEmote.textContent = selectedRandomEmote
	document.title = `${document.title} | ${selectedRandomEmote}`

	randomPhrase.textContent = selectedRandomPhrase

}



refreshButton.addEventListener('click',(el) =>{
	generateRandoms()
})





generateRandoms()











