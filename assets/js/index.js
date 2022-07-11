

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
 * @returns {array} [randomEmote, randomPhrase]
 */
function generateRandoms(){
  
	let selectedRandomEmote = asciimoji[getRandomIndex(asciimoji.length)]
	let selectedRandomPhrase = phrases[getRandomIndex(phrases.length)]

	return [selectedRandomEmote,selectedRandomPhrase]
}


/**
 * update page title and content divs
 * @param {array} data
 */
function updatePage(data){
	document.title = `${originalDocumentTitle} | ${data[0]}`
	
	randomEmote.textContent = data[0]
	randomPhrase.textContent = data[1]
}





refreshButton.addEventListener('click',(el) =>{
	updatePage(generateRandoms())
})







let data = generateRandoms()


updatePage(data)






