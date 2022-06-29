

const randomEmote = document.querySelector('#randomEmote')
const randomPhrase = document.querySelector('#randomPhrase')
const refreshButton = document.querySelector('#refreshButton')


const originalDocumentTitle = document.title



// onclick="generateRandoms()"


/**
 * get a random number from 0 to length
 * @param {number} length 
 * @returns number
 */
function getRandomIndex(length) {
	return Math.floor(Math.random() * length)
}


/**
 * get the random data form the 2 arrays of phrases and emojies
 */
function generateRandoms(){
  
	let selectedRandomEmote = asciimoji[getRandomIndex(asciimoji.length)]
	let selectedRandomPhrase = phrases[getRandomIndex(phrases.length)]
	randomEmote.textContent = selectedRandomEmote
	document.title = `${originalDocumentTitle} | ${selectedRandomEmote}`

	randomPhrase.textContent = selectedRandomPhrase

}



refreshButton.addEventListener('click',(el) =>{
	generateRandoms()
})





generateRandoms()











