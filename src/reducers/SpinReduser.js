const initialState = {
    animation: false,
    spinspeed:50,
};


export default function SpinReduser(state = initialState, action) {

    switch (action.type) {
        case 'START_SPIN_REELS':
            return { ...state, animation: action.animation }
        case 'END_SPIN_REELS':
            return { ...state, animation: action.animation }
        case 'FAST_SPIN':
            return { ...state, spinspeed: action.spinspeed }


            
        default:
            return state;
    }

}