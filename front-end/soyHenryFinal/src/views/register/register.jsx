import style from "./register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Google from "../../components/google/google";
import { useForm } from "react-hook-form";
import { useState } from "react";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerError = useSelector((state) => state.registrationError);

  const { handleSubmit, formState: { errors }, register } = useForm();
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const onSubmit = async (data) => {
    const { name, email, contraseña, recontraseña } = data;

    if (contraseña !== recontraseña) {
      alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
      return;
    }

    setShowPassword(false);

    dispatch(registerUser(name, email, contraseña, navigate));
  };

  const handlePasswordFocus = () => {
    setPasswordFocused(true);
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else if (field === 'repeatPassword') {
      setShowRepeatPassword(!showRepeatPassword);
    }
  };

  return (
    <div className={style.container}>
      <form className={style.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className={style.loginContent}>
            Nombre:
            <input
              type="text"
              {...register("name", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 40,
                  message: "El nombre no debe tener más de 40 caracteres",
                },
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Introduzca un nombre válido.",
                },
              })}
            />
            {errors.name && (
              <p className={style.error}>{errors.name.message}</p>
            )}
          </label>
        </div>

        <div>
          <label className={style.loginContent}>
            Email:
            <input
              type="email"
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "El email es incorrecto. Introduce un email válido.",
                },
              })}
            />
            {errors.email && (
              <p className={style.error}>{errors.email.message}</p>
            )}
          </label>
        </div>

        <div>
          <label className={style.loginContent}>
            Contraseña:
            <div className={style.passwordInputContainer}>
              <input
                type={showPassword ? "text" : "password"}
                {...register("contraseña", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "La contraseña debe tener al menos 6 caracteres",
                  },
                  maxLength: {
                    value: 15,
                    message: "La contraseña no debe tener más de 15 caracteres",
                  },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Ingrese una contraseña correcta.",
                  },
                })}
                onFocus={handlePasswordFocus}
              />
              <label
                className={style.togglePasswordButton}
                onClick={() => togglePasswordVisibility('password')}
              >
                👁️
              </label>
            </div>
            {errors.contraseña && (
              <p className={style.error}>{errors.contraseña.message}</p>
            )}
            {passwordFocused && (
              <p className={style.passwordRules}>
                La contraseña debe tener entre 6 y 15 caracteres. <br />
                Al menos una mayúscula, una minúscula y un número.
              </p>
            )}
          </label>
        </div>

        <div>
          <label className={style.loginContent}>
            Repetir contraseña:
            <div className={style.passwordInputContainer}>
              <input
                type={showRepeatPassword ? "text" : "password"}
                {...register("recontraseña", {
                  required: "Este campo es obligatorio",
                })}
              />
              <label
                className={style.togglePasswordButton}
                onClick={() => togglePasswordVisibility('repeatPassword')}
              >
                👁️
              </label>
            </div>
            {errors.recontraseña && (
              <p className={style.error}>{errors.recontraseña.message}</p>
            )}
          </label>
        </div>

        <div className={style.buttons}>
          <button className={style.buttonLogin} type="submit">
            Register
          </button>
          <p>|</p>
          <Link className={style.register} to="/login">
            Log In
          </Link>
        </div>
        {registerError && <p className={style.error}>Error al registrar.</p>}
        <Google />
      </form>
    </div>
  );
}

export default Register;
