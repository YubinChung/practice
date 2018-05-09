//action을 보내면 redux는 reducer를 실행
// Import

//Actions
const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECONDS = "ADD_SECONDS";

//Action Creators

function startTimer() {
    return {
        type: START_TIMER
    }
}
function restartTimer() {
    return {
        type: RESTART_TIMER
    }
}
function addSeconds() {
    return {
        type: ADD_SECONDS
    }
}

//Reducer
const TIMER_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime : 0,
    timerDuration: TIMER_DURATION
}
/**
 *  reducer는 함수 일뿐. 액션을 보낼때마다 리덕스는 자동으로 리듀서를 실행함. default
 * @param {...state} state
 * @param {*} action
 */

function reducer(state = initialState, action) {
    switch (action.type) {
        case START_TIMER: 
            return applyStartTimer(state);
        case RESTART_TIMER: 
            return applyRestartTimer(state);
        case ADD_SECONDS: 
            return applyAddSeconds(state);
        default:
            return state;
    }
}

//Reducer Functions
function applyStartTimer(state){
    return {
        ...state,
        isPlaying: true
    }
}
function applyRestartTimer(state){
    return {
        ...state,
        isPlaying: false,
        elapsedTime: 0
    }
}
function applyAddSeconds(state){
    if (state.elapsedTime< TIMER_DURATION) {
        return {
            ...state,
            elapsedTime: state.elapsedTime +1
        }
    } else {
        return {
            ...state,
            isPlaying: false
        }
    }
}


//Export Action Creators
const actionCreators = {
    startTimer,
    restartTimer,
    addSeconds
}

export { actionCreators };

//Export Reducer
export default reducer;
