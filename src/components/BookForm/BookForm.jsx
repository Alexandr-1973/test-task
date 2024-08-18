import css from "./BookForm.module.css";
import { Field, Formik, Form } from "formik";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import "react-widgets/styles.css";
import "flatpickr/dist/themes/material_green.css";

import { useState } from "react";

const BookForm = () => {
  const [type, setType] = useState("text");

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    date: Yup.string()
      .min(10, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    text: Yup.string().min(3, "Too Short!").max(50, "Too Long!"),
  });

  const initialValues = {
    name: "",
    email: "",
    date: "",
    text: "",
  };

  const handleSubmit = () => {};

  return (
    <div className={css.genDiv}>
      <div className={css.titleDiv}>
        <h3 className={css.title}>Book your campervan now</h3>
        <p className={css.titleP}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={ContactFormSchema}
      >
        <Form className={css.form}>
          <div className={css["form-divs"]}>
            <Field
              type="text"
              name="name"
              placeholder="Name"
              autoComplete="off"
              className={css.elemInput}
            />
            <ErrorMessage className={css.error} name="name" component="p" />
          </div>

          <div className={css["form-divs"]}>
            <Field
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className={css.elemInput}
            />
            <ErrorMessage className={css.error} name="email" component="p" />
          </div>

          <div className={css["form-divs"]}>
            <Field
              type={type}
              name="date"
              placeholder="Booking date"
              onFocus={() => setType("date")}
              onBlur={() => setType("text")}
              autoComplete="off"
              className={css.elemInput}
            />

            <ErrorMessage className={css.error} name="date" component="p" />
          </div>

          <div className={css["form-divs"]}>
            <Field
              as="textarea"
              name="text"
              id="comments"
              cols="30"
              rows="10"
              placeholder="Comment"
              className={css.area}
            />
            <ErrorMessage className={css.error} name="text" component="p" />
          </div>

          <button type="submit" className={css.btn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookForm;
