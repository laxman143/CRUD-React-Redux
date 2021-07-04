import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserAddEditProfile: React.FC<any> = ({ history, match }) => {

    const { id } = match.params;
    const isAddMode = !id;
    const [user, setUser] = useState();
    const [showPassword, setShowPassword] = useState(false);
  

    let initialValues = {
        id:0,
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        password: '',
        confirmPassword: ''
    };
    const [editProfile,setEditProfile] = useState(initialValues);
    const validationSchema = Yup.object({
        title: Yup.string().required("Title is required"),
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string().email("Email is invalie")
            .required("Email is required"),
        role: Yup.string()
            .required('Role is required'),
        password: Yup.string()
            .concat(isAddMode ? Yup.string().required('Password is required') : Yup.string().notRequired())
            .min(6, "Password must be at least 6 character"),
        confirmPassword: Yup.string()
            .when('password', (password: any, schema: any) => {
                if (password || isAddMode)
                    return schema.required('Confirm password is required');
            })
            .oneOf([Yup.ref('password')], "Password must match.")

    })

    const onSubmit = (values: any, onSubmitProps: any) => {

        if(isAddMode) {
        axios.post(`User`, values).then((respons:any)=>{
            
            history.push('.');
        }).catch(()=>{
            onSubmitProps.setSubmitting(false);
        }) } 
        else {
            axios.put(`User/${id}`, values).then((respons:any)=>{
            
            history.push('..');
        }).catch(()=>{
            onSubmitProps.setSubmitting(false);
        }) 
        }
    }

    useEffect(() => {
        if (!isAddMode) {
            // get user and set form fields
            axios.get(`User/${id}`).then((respons:any)=>{
               setEditProfile(respons.data);
            }).catch(()=>{
               
            }) 
        }
    },[]);
   


    return (
     <div  key = { id > 0  ? editProfile.id : null}>
    <Formik
        // initialValues={initialValues}
        initialValues= { id > 0 ? editProfile: initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {

            ({ errors, touched, isSubmitting, setFieldValue }) => {

             


              return  (<Form>
                    <h1>{isAddMode ? "Add User" : "Edit User"}</h1>

                    <div className="form-row form-style">
                        <div className="form-group col">
                            <label>Title</label>
                            <Field name="title" as="select" className={'form-control' + (errors.title && touched.title ? 'is-invalid' : "")}>
                                <option value=""></option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Ms">Ms</option>
                            </Field >
                            <ErrorMessage name="title" component="div" className="invalid-feedback" />
                        </div>


                        <div className="form-group col-5">
                            <label>First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group col-5">
                            <label>Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-7">
                            <label>Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group col">
                            <label>Role</label>
                            <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')}>
                                <option value=""></option>
                                <option value="User">User</option>
                                <option value="Admin">Admin</option>
                            </Field>
                            <ErrorMessage name="role" component="div" className="invalid-feedback" />
                        </div>
                    </div>

                    {!isAddMode &&
                        <div>
                            <h3 className="pt-3">Change Password</h3>
                            <p>Leave blank to keep the same password</p>
                        </div>}

                    <div className="form-row">
                        <div className="form-group col">
                            <label>password
                    {!isAddMode && (!showPassword
                                    ? <span> - <a onClick={() => setShowPassword(!showPassword)} className="text-primary">Show</a></span>
                                    : null )
                                    // <span>- {user.password}</span>
                                }
                            </label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>

                        <div className="form-group col">
                            <label>Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                            {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                            Submit</button>
                        <Link to={isAddMode ? '.' : '..'} className="btn btn-link">Cancel</Link>
                    </div>
                </Form>)
            }
        }
    </Formik>
    </div>
    )

        
}
export default UserAddEditProfile