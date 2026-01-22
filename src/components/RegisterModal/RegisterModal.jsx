import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const RegisterModal = ({ isOpen, onRegister, onClose, onSwitchToLogin }) => {
  const defaultValues = {
    email: "",
    password: "",
    username: "",
  };

  const { values, handleChange, errors, showErrors, touched } =
    useFormWithValidation(defaultValues);

  const isSubmitDisabled =
    !values.email ||
    !values.password ||
    !values.username ||
    Boolean(errors.email) ||
    Boolean(errors.password) ||
    Boolean(errors.username);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSubmitDisabled) {
      return;
    }

    if (onRegister) {
      onRegister();
    }
  };

  return (
    <ModalWithForm
      title="Register"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      secondaryAction={
        <button
          type="button"
          className="modal__secondary-button"
          onClick={onSwitchToLogin}
        >
          <span className="modal__span-btntext">or</span> Log In
        </button>
      }
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          name="email"
          type="email"
          className={`modal__input ${
            (showErrors || touched.email) && errors.email
              ? "modal__input_type_error"
              : ""
          }`}
          id="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          required
        />
        {(showErrors || touched.email) && errors.email && (
          <span className="modal__error modal__error_visible">
            {errors.email}
          </span>
        )}
      </label>

      <label htmlFor="password" className="modal__label">
        Password
        <input
          name="password"
          type="password"
          className={`modal__input ${
            (showErrors || touched.password) && errors.password
              ? "modal__input_type_error"
              : ""
          }`}
          id="password"
          placeholder="Enter password"
          value={values.password}
          onChange={handleChange}
          required
        />
        {(showErrors || touched.password) && errors.password && (
          <span className="modal__error modal__error_visible">
            {errors.password}
          </span>
        )}
      </label>
      <label htmlFor="username" className="modal__label">
        Username
        <input
          name="username"
          type="text"
          className={`modal__input ${
            (showErrors || touched.username) && errors.username
              ? "modal__input_type_error"
              : ""
          }`}
          id="username"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
          required
        />
        {(showErrors || touched.username) && errors.username && (
          <span className="modal__error modal__error_visible">
            {errors.username}
          </span>
        )}
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
