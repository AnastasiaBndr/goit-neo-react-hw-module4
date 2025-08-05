import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import { FormSchema } from "../../helpers";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    addContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FormSchema}
    >
      <Form className={css["form-container"]}>
        <div className={css["fields-container"]}>
          <div className={css["name-field-container"]}>
            <label className={css.label} htmlFor={nameFieldId}>
              Name
            </label>
            <Field
              className={css.field}
              type="text"
              name="name"
              id={nameFieldId}
            />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>

          <div className={css["name-field-container"]}>
            <label className={css.label} htmlFor={numberFieldId}>
              Number
            </label>
            <Field
              className={css.field}
              type="text"
              name="number"
              id={numberFieldId}
            />
            <ErrorMessage
              className={css.error}
              name="number"
              component="span"
            />
          </div>
        </div>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
