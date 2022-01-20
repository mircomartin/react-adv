import { Formik, Form } from 'formik'
import { MySelectInput, MyTextInput } from '../components'
import * as Yup from 'yup'

import formJson from '../data/custom-form.json'

const initialValues: { [key: string]: any } = {} 
const requiredFields: { [key: string]: any } = {} 

for (const input of formJson) {
    initialValues[input.name] = input.value

    if(!input.validations) continue

    let schema = Yup.string()

    for (const rule of input.validations) {
        if(rule.type === 'required'){
            schema = schema.required('Este campo es requerido')
        }
        if(rule.type === 'minLength'){
            schema = schema.min((rule as any).value, 'Este campo al menos debe contener 5 caracteres')
        }
        if(rule.type === 'email'){
            schema = schema.email('El formato de es incorrecto')
        }
        
    }

    requiredFields[input.name] = schema
}

const validationSchema = Yup.object({...requiredFields})

export const DynamicFormPage = () => {
    return (
        <div>
            <h1>Dynamic Form</h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={ (values) => {
                    console.log(values)
                }}
            >
                {
                    (formik) => (
                        <Form>
                            {
                                formJson.map( ({ type, name, placeholder, label, options}) => {

                                    if( type === 'input' || type === 'password' || type === 'email') {
                                        
                                        return <MyTextInput 
                                            key={name}
                                            label={label} 
                                            name={name}
                                            type={type as any} 
                                            placeholder={placeholder}
                                        />

                                    } else if ( type === 'select' ) {
                                        return <MySelectInput 
                                            key={name}
                                            label={label} 
                                            name={name}
                                        >
                                            <option value=''>Select an Option</option>
                                            {
                                                options?.map( ({id,label}) => (
                                                    <option key={id} value={id}>{label}</option>
                                                ))
                                            }
                                        </MySelectInput>
                                    }

                                    return <span>Type: { type } no es soportado</span>
                                })
                            }

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}
