import React from "react";

const FooterContent = ({ dispatch, totalQuestions, index }) => {
  return (
    <>
      {index < totalQuestions ? (
        <button className="btn" onClick={() => dispatch({ type: "nextQuestions" })}>
          Next
        </button>
      ) : (
        <button className="btn" onClick={() => dispatch({ type: "finishScreen" })}>
          Finish
        </button>
      )}
    </>
  );
};

export default FooterContent;



