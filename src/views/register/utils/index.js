import * as Yup from 'yup'

export const YurPlayerSchema = Yup.object().shape({
    document_type: Yup.string().required("Iltmos, formani to'ldiring!"),
    document_number: Yup.string().required("Iltmos, formani to'ldiring!"),
    document_date: Yup.string().required("Iltmos, formani to'ldiring!"),
    name: Yup.string().required("Iltmos, formani to'ldiring!"),
    capital_founder: Yup.string().required("Iltmos, formani to'ldiring!"),
    inn: Yup.string().required("Iltmos, formani to'ldiring!"),
    country: Yup.string().required("Iltmos, formani to'ldiring!"),
    phone: Yup.string().required("Iltmos, formani to'ldiring!"),
    email: Yup.string().email('Invalid email').required("Iltmos, formani to'ldiring!")
})

export const JisPlayerSchema = Yup.object().shape({
    document_type: Yup.string().required("Iltmos, formani to'ldiring!"),
    document_number: Yup.string().required("Iltmos, formani to'ldiring!"),
    name: Yup.string().required("Iltmos, formani to'ldiring!"),
    capital_founder: Yup.string().required("Iltmos, formani to'ldiring!"),
    inn: Yup.string().required("Iltmos, formani to'ldiring!"),
    phone: Yup.string().required("Iltmos, formani to'ldiring!"),
    email: Yup.string().email('Invalid email').required("Iltmos, formani to'ldiring!")
})

// Manager Formik Validate
export const YurMSchema = Yup.object().shape({
    document_type: Yup.string().required("Iltmos, formani to'ldiring!"),
    document_number: Yup.string().required("Iltmos, formani to'ldiring!"),
    document_date: Yup.string().required("Iltmos, formani to'ldiring!"),
    name: Yup.string().required("Iltmos, formani to'ldiring!"),
    capital_founder: Yup.string().required("Iltmos, formani to'ldiring!"),
    inn: Yup.string().required("Iltmos, formani to'ldiring!"),
    country: Yup.string().required("Iltmos, formani to'ldiring!")
})

export const JisMSchema = Yup.object().shape({
    document_type: Yup.string().required("Iltmos, formani to'ldiring!"),
    document_number: Yup.string().required("Iltmos, formani to'ldiring!"),
    name: Yup.string().required("Iltmos, formani to'ldiring!"),
    capital_founder: Yup.string().required("Iltmos, formani to'ldiring!"),
    inn: Yup.string().required("Iltmos, formani to'ldiring!")
})

// Address Formik Validate

export const AddressSchema = Yup.object().shape({
    cadastor_number: Yup.string().required("Iltmos, formani to'ldiring!"),
    address: Yup.string().required("Iltmos, formani to'ldiring!"),
    address_type: Yup.string().required("Iltmos, formani to'ldiring!"),
    phone: Yup.string().required("Iltmos, formani to'ldiring!"),
    email: Yup.string().email('Invalid email').required("Iltmos, formani to'ldiring!")
})