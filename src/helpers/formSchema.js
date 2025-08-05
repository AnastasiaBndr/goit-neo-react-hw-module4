import * as Yup from "yup";

const regex = `^[0-9]{3}-[0-9]{2}-[0-9]{2}$`

export const FormSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, "Too short!")
        .max(50, "Too long!")
        .required("Required"),
    number: Yup.string().matches(regex, 'Wrong format! The number must be 111-11-11')
        .min(9, "Too short!")
        .max(9, "Too long!")
        .required("Required"),
});
