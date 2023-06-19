import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as auth from './Auth'

export default function Register({setInfoTooltip, setSuccessfully}) {
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const navigete = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    const { email, password } = formValue;
    e.preventDefault();
    auth.register(email, password)
    .then(() => {
      setSuccessfully(true);
      // navigete('/sign-in');
    }).finally(() => setInfoTooltip(true));
  }

  return (
    <div className="register">
      <h2 className="register__title">Регистрация</h2>
      <form className="register__form" onSubmit={handleSubmit}>
        <input placeholder="Email" className="register__input" type="email" name="email" value={formValue.email} onChange={handleChange} required></input>
        <input placeholder="Пароль" className="register__input" type="password" name="password" value={formValue.password} onChange={handleChange} required></input>
        <button className="register__button" onSubmit={handleSubmit} type="submit">Зарегистрироваться</button>
      </form>
      <div>
        <p className="register__paragraph">Уже зарегистрированы?
          <Link to="/sign-in" className="register__href">  Войти</Link>
        </p>
      </div>
    </div>
  );
}