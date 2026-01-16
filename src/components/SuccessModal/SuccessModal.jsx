import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SuccessModal.css";

function SuccessModal({ isOpen, onClose, onSignIn }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSignIn) {
      onSignIn();
    }
  };

  return (
    <div className="success-modal">
      <ModalWithForm
        title="Registration successfully completed!"
        buttonText="Sign in"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default SuccessModal;
