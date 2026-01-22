import ModalWithForm from "../ModalWithForm/ModalWithForm.jsx";
import { useFormWithValidation } from "../../hooks/useFormWithValidation.js";

function SignInModal({ isOpen, onClose, onSwitchToRegister, onLogin }) {
  const defaultValues = { email: "", password: "" };

  const { values, errors, touched, handleChange, showErrors } =
    useFormWithValidation(defaultValues);

  const isSubmitDisabled =
    !values.email ||
    !values.password ||
    Boolean(errors.email) ||
    Boolean(errors.password);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitDisabled) {
      return;
    }

    if (typeof onLogin === "function") {
      onLogin(values.email, values.password);
    }
  };

  return (
    <ModalWithForm
      title="Sign in"
      buttonText="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isSubmitDisabled={isSubmitDisabled}
      secondaryAction={
        <button
          type="button"
          className="modal__secondary-button"
          onClick={onSwitchToRegister}
        >
          <span className="modal__span-btntext">or</span> Register
        </button>
      }
    >
      <label htmlFor="login-email" className="modal__label">
        Email
        <input
          name="email"
          type="email"
          className={`modal__input ${
            (showErrors || touched.email) && errors.email
              ? "modal__input_type_error"
              : ""
          }`}
          id="login-email"
          placeholder="Email"
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

      <label htmlFor="login-password" className="modal__label">
        Password
        <input
          name="password"
          type="password"
          className={`modal__input ${
            (showErrors || touched.password) && errors.password
              ? "modal__input_type_error"
              : ""
          }`}
          id="login-password"
          placeholder="Password"
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
    </ModalWithForm>
  );
}

export default SignInModal;
