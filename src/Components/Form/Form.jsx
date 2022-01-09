import { Formik, Form, Field, ErrorMessage } from "formik";

import {loginR} from '../../SDK/httpR.js';
import { useNavigate } from "react-router-dom";
export default function FormLogin() {
  let navigate = useNavigate();
  //esta funcion se encarga de redireccionar al home si el email y la contraseña son correctas
  function handleClick() {
    let retrievedObject = localStorage.getItem("JWToken");
    if (retrievedObject != null) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  const getToken = (valores) => {

    loginR(valores.email,valores.password)
      .then((response) => {
        console.log(response);
        // Put the object into storage
        localStorage.setItem("JWToken", JSON.stringify(response));

        // Retrieve the object from storage
        let retrievedObject = localStorage.getItem("JWToken");

        console.log("JWToken: ", JSON.parse(retrievedObject));

        handleClick();
      })
      .catch((err) => alert("Invalid email or password " + err));
  };

  return (
    <Formik
      initialValues={{
        email: "challenge@alkemy.org",
        password: "react",
      }}
      onSubmit={(valores, { resetForm }) => {
        resetForm(); //se vuelven a establecer como values de los inputs initialValues
        console.log(valores);
        console.log("send it");
        getToken(valores);
      }}
      validate={(
        valores //se empieza a ejecutar cuando tcamos el input
      ) => {
        let errores = {};
        if (!valores.email) {
          errores.email = "write your email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "You have entry an invalid e-mail address.Please try again";
        }
        if (!valores.password) {
          errores.password = "write your password";
        }
        return errores;
      }}
    >
      {(props) => (
        //<form className="form-group card border-primary mb-3" onSubmit={props.handleSubmit} style={{width:"50%"}}>
        <Form className="form-group card border-primary mb-3">
          <div className="card-body mx-auto p-5">
            <div className="form-floating">
              <Field
                type="email"
                name="email"
                id="email"
                className={
                  props.touched.email && props.errors.email
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
                placeholder="Write your Email"
                style={{ width: "100%" }}
              ></Field>

              <label htmlFor="email">Email</label>
              {/*se linkea con el id del input*/}
              <small id="emailHelp" className="form-text  text-success">
                We'll never share your email with anyone else.
              </small>
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="invalid-feedback">{props.errors.email}</div>
                )}
              />
            </div>
            <div className="form-floating">
              <Field
                type="password"
                name="password"
                id="password"
                className={
                  props.touched.password && props.errors.password
                    ? "form-control is-invalid"
                    : "form-control is-valid"
                }
                placeholder="Write your password"
                style={{ width: "100%" }}
              ></Field>
              <label htmlFor="password">Password</label>
              {/*se linkea con el id del input*/}
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="invalid-feedback">
                    {props.errors.password}
                  </div>
                )}
              />
            </div>
          </div>

          <button className="btn btn-lg btn-primary" type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
