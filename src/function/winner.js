
function win(picked, housePicked) {
    if (picked == 'rock' && housePicked == 'scissors') {
        return 'win'
    } else if (picked == 'rock' && housePicked == 'paper') {
        return 'lose'
    } else if (picked == 'paper' && housePicked == 'scissors') {
        return 'lose'
    } else if (picked == 'paper' && housePicked == 'rock') {
        return 'win'
    } else if (picked == 'scissors' && housePicked == 'paper') {
        return 'win'
    } else if (picked == 'scissors' && housePicked == 'rock') {
        return 'lose'
    } else if (picked == housePicked) {
        return 'draw'
    }
}

export default win;