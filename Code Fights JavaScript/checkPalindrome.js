function checkPalindrome(inputString) {
    var reverse = inputString.split("").reverse().join("");
    if(inputString === reverse){
       return true;
       } else {
       return false;
       }
}
