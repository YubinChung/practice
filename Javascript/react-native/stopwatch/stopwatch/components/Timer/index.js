import { connect } from "react-redux";
import Timer from "./presenter";
import { bindActionCreators } from "redux";
import { actionCreators as actionTimer } from "../../reducer";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

//dispatch - 액션을 리듀서로 보내는 함수
function mapDispatchToProps(dispatch) {
  return {
    startTimer: bindActionCreators(actionTimer.startTimer, dispatch),
    restartTimer: bindActionCreators(actionTimer.restartTimer, dispatch),
    addSecond: bindActionCreators(actionTimer.addSecond, dispatch)
  };
}

//component와 props 를 연결함
export default connect(mapStateToProps, mapDispatchToProps)(Timer);
