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
  };
}
function restartTimer() {
  return {
    type: RESTART_TIMER
  };
}

function addSecond() {
  return {
    type: ADD_SECONDS
  };
}

//Reducer
const TIMER_DURATION = 1500;

const initialState = {
  isPlaying: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};
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
      return applyAddSecond(state);
    default:
      return state;
  }
}

//Reducer Functions
function applyStartTimer(state) {
  //기존 state를 함께 작성하지 않으면 아래 대입된 값만 남고 모두 지워짐
  return {
    ...state, //현재 가지고 있는 state에
    isPlaying: true // 변경된 값을 대입함
  };
}

function applyRestartTimer(state) {
  return { ...state, isPlaying: false, elapsedTime: 0 };
}

function applyAddSecond(state) {
  if (state.elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isPlaing: false
    };
  }
}
//Export Action Creators

const actionCreators = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreators };

//Export Reducer
export default reducer;
