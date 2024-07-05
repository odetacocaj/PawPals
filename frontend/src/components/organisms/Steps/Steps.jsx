import "./Steps.scss";

function Steps() {
  return (
    <div className="stepper-wrapper">
      <div className="stepper-item active">
        <div className="step-counter"></div>
        <div className="step-name">Find your pet</div>
        <div className="step-description">Select a pet from our adoption list.</div>
      </div>
      <div className="stepper-item ">
        <div className="step-counter"></div>
        <div className="step-name">Know your pet</div>
        <div className="step-description">Schedule a visit with the chosen one.</div>
      </div>
      <div className="stepper-item ">
        <div className="step-counter"></div>
        <div className="step-name">Take your pet</div>
        <div className="step-description">Follow the adoption process.</div>
      </div>
    </div>
  );
}

export default Steps;
