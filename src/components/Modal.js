import ReactDOM from "react-dom";

export default function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-backdrop">
      <div
        className="modal"
        style={{
          border: "10px solid",
          borderColor: "#233D4D",
          textAlign: "center",
        }}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
