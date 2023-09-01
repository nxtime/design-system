import React from "react";
import { useToast } from "../../src";

const ToastPageDemo = () => {
  const { dispatch } = useToast();
  return (
    <div className="container center" style={{ width: "100%", height: "100%" }}>
      <button
        className="btn btn-danger"
        onClick={() => {
          dispatch({
            type: "danger",
            message: "This is a danger toast",
          });
        }}
      >
        Open Danger Toast
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          dispatch({
            message: "This is an informative toast",
            variant: "base-200",
            size: "small",
          });
        }}
      >
        Open Info Toast
      </button>
    </div>
  );
};

export default ToastPageDemo;
