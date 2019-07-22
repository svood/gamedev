 function SpinStart () {
    return {
        type: 'START_SPIN_REELS',
        animation : true
    }
}

function spinEnd() {
    return {
        type: 'END_SPIN_REELS',
        animation : false
    }
}

function FastSpeen(speed) {
    return {
        type: 'FAST_SPIN',
        spinspeed : speed
    }
}

export {SpinStart,spinEnd,FastSpeen}







