// complete the given function

function palindrome(str){
	 // Step 1: Normalize the string
    let cleaned = ""; // Initialize an empty string for cleaned characters
    for (let char of str.toLowerCase()) {
        // Check if the character is alphanumeric
        if (char.match(/[a-z0-9]/)) {
            cleaned += char; // Append to cleaned string
        }
    }

    // Step 2: Reverse the cleaned string
    let reversed = cleaned.split('').reverse().join('');

    // Step 3: Compare the cleaned string with the reversed string
    return cleaned === reversed; // Return true if they match
}



module.exports = palindrome
