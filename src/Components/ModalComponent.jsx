import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faXmark,
  faXmarkCircle,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

Modal.setAppElement("#root");

function ModalComponent({ isModalOpen, setIsModalOpen, status }) {
  return (
    <Modal
      className="modal"
      isOpen={isModalOpen}
      onRequestClose={() => setIsModalOpen(false)}
      style={{
        overlay: {
          backgroundColor: "rgba(0,0,0,.73)",
        },
        content: {
          color: "#333",
          position: "fixed",
          top: "50%",
          left: "50%",
          background: status === "success" ? "#e7ffdb" : "#fae7e6",
          padding: "20px",
          transform: "translate(-50%, -50%)",
          width: "280px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "64px",
        },
      }}>
      <div>
        {status === "success" ? (
          <>
            <FontAwesomeIcon icon={faCheckCircle} size="xl" />{" "}
            <span
              style={{
                fontSize: "1.25rem",
                marginLeft: "4px",
                color: "green",
                fontWeight: "700",
                letterSpacing: "0.04rem",
              }}>
              Success
            </span>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faXmarkCircle} size="xl" />{" "}
            <span
              style={{
                fontSize: "1.25rem",
                marginLeft: "4px",
                color: "red",
                fontFamily: "ubuntubold",
                letterSpacing: "0.008rem",
              }}>
              Error Occurred
            </span>
          </>
        )}
      </div>
      <button
        onClick={() => setIsModalOpen(false)}
        style={{
          padding: "7px 10px",
          border: "none",
          marginTop: "2px",
          borderRadius: "3px",
          background: status === "success" ? "#e7ffdb" : "#fae7e6",
        }}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={faXmark}
          size="2x"
        />
      </button>
    </Modal>
  );
}

export default ModalComponent;
