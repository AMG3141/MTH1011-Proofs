/**
 * Randomly choose a new theorem
 *
 * @param {string} theoremImg The id of the image showing the theorem
 * @param {string} proofImg   The id of the image showing the proof
 */
function nextTheorem(theoremImg, proofImg) {
	var randNum = Math.floor(Math.random() * 9);
	document.getElementById(theoremImg).src = ".\\images\\" + randNum + ".png";
	hideProof(proofImg);
}

/**
 * Show the proof of the currently displayed theorem
 *
 * @param {string} theoremImg The id of the image showing the theorem
 * @param {string} proofImg   The id of the image showing the proof
 */
function showProof(theoremImg, proofImg) {
	thmSrc = document.getElementById(theoremImg).src;
	thmNum = thmSrc[thmSrc.length - 5];
	document.getElementById(proofImg).src = ".\\images\\proof" + thmNum + ".png";
}

/**
 * Set the proof image to the default
 *
 * @param {string} proofImg   The id of the image showing the proof
 */
function hideProof(proofImg) {
	document.getElementById(proofImg).src = ".\\images\\defaultProof.png";
}