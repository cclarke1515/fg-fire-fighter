function collision({ rect1, rect2 }) {
    return (
        rect1.attackBox.position.x + rect1.attackBox.width >= rect2.position.x 
        && rect1.attackBox.position.x <= rect2.position.x + rect2.width
        && rect1.attackBox.position.y + rect1.attackBox.height >= rect2.position.y
        && rect1.attackBox.position.y <= rect2.position.y + rect2.height
    )
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId)
    document.querySelector('#displayText').style.display = 'flex'
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'TIE'
    }
    else if (player.health >= enemy.health) {
        document.querySelector('#displayText').innerHTML = 'PLAYER 1 WINS'
    }
    else if (player.health <= enemy.health) {
        document.querySelector('#displayText').innerHTML = 'PLAYER 2 WINS'
    }
}

let timer = 99
let timerId
function decreaseTimer() {
    timerId = setTimeout(decreaseTimer, 1000)
    if (timer > 0) {
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0) {
        determineWinner({ player, enemy })
    }
}