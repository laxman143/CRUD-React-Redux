import React, { useEffect, useState } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import { IProduct, IAddress } from '../Model/product.model';
import * as Yup from 'yup';
import { connect } from 'react-redux';

import { countryRequest, stateRequest, cityRequest, addProductRequest, getProductByIdRequest } from '../../Redux-Store/Product/product-action';
let initialValues: IProduct = {
    id: 0,
    categoryId: 0,
    productName: "",
    productImage: "",
    productRate: undefined,
    productQuntity: undefined,
    manufacturerCountry: undefined,
    manufacturerState: undefined,
    manufacturerCity: undefined,
    productManufacturerDate: undefined,
    productQuality: undefined,
    manufacturerAddress: [{ street: "", pincode: "" }]
}

const CustomerForm: React.FC<any> = (props: any) => {
    const { getCountry, getStateByCountryId, getCityByStateId, addProduct, country, state, city, successAddProduct, editProduct, getProductById } = props;
    // const { id } = useParams();
    debugger
    const id: number = props.match.params.id
    const [isAddForm, setIsAddForm] = useState(false);
    const [fileObject, setFileObject] = useState({ productImage: '' })
    const location = useLocation();
    const validationSchema = Yup.object({
        categoryId: Yup.number().required('Required'),
        productName: Yup.string().required('Required'),
        productImage: Yup.string().required('Required'),
        productRate: Yup.number().required('Required'),
        productQuntity: Yup.number().required('Required'),
        manufacturerCountry: Yup.number().required('Required'),
        manufacturerState: Yup.number().required('Required'),
        manufacturerCity: Yup.number().required('Required'),
        productManufacturerDate: Yup.date().required('Required'),
        productQuality: Yup.array().required('Required'),
        manufacturerAddress: Yup.array().of(
            Yup.object().shape({
                street: Yup.string().required('Required'),
                pincode: Yup.number().required('Required')
            })
        ).required('Muse have address')

    })

    const onSubmit = (value: any, onSubmitProps: any) => {
        debugger
        console.log(value, onSubmitProps);
        addProduct(value);

    }

    const onChangeDate = (event: any) => {
        console.log("Date ", event.target.value);
    }

    const changeProductImage = (event: any) => {
        let render = new FileReader();
        let file = event?.target.files[0];

        render.onloadend = () => {
            setFileObject({ productImage: render.result as string });
        }
        render.readAsDataURL(file)

    }

    const onChangeCountry = (event: any) => {
        debugger
        getStateByCountryId(event.target.value)
        alert(JSON.parse(editProduct))
    }

    const onChangeState = (event: any) => {

        getCityByStateId(event.target.value)
    }



    useEffect(() => {
        getCountry();

    }, [])

    useEffect(() => {
        debugger
        if (Number(id) > 0) {
            getProductById(id);
        }
    }, [id])

    useEffect(() => {
        setIsAddForm(location.pathname.includes('add'))
        console.log(isAddForm)
    }, [location])

    useEffect(() => {
        if (successAddProduct) {
            // if(Number(id)) {
            //     alert("Product Updated Successfully")
            // }  else {
            alert("Product Added Successfully")
            // }

        }
    }, [successAddProduct])

    return (<div key={id ? (editProduct ? editProduct.id : null) : null}>
        {isAddForm ? "Add Customer" : "Edit Customer"}
        <Link to="/customer">Customer list</Link>

        <Formik
            initialValues={id > 0 ? editProduct : initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {
                (formik) => {
                    return (
                        <Form>

                            <div  className="container">
                                <div className="form-group row">
                                    <label  className="col-sm-4 col-form-label">Product Name</label>
                                    <div className="col-sm-8">
                                    <Field name="productName" type="text" className="form-control"></Field>
                                    <ErrorMessage name="productName" component="div"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Image</label>
                                    <div className="col-sm-8">
                                    <Field type="file" name="productImage" className="form-control" onChange={changeProductImage}></Field>
                                    {fileObject.productImage && <img style={{ width: '100px', height: '50px' }} src={fileObject.productImage} />}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Rate</label>
                                    <div className="col-sm-8">
                                    <Field name="productRate" type="text" className="form-control"></Field>
                                    <ErrorMessage name="productRate" component="div"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Quntity</label>
                                    <div className="col-sm-8">
                                    <Field  name="productQuntity" type="text" className="form-control"></Field>
                                    <ErrorMessage name="productQuntity" component="div"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Country</label>
                                    <div className="col-sm-8">
                                    <Field as="select" name="manufacturerCountry" onChange={onChangeCountry} className="form-control">
                                        <option value="" >Select </option>
                                        {country && country.map((item: any) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}


                                    </Field>
                                    <ErrorMessage name="manufacturerCountry" component="div"></ErrorMessage>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label  className="col-sm-4 col-form-label">State</label>
                                    <div className="col-sm-8">
                                    <Field as="select" name="manufacturerState" onChange={onChangeState} className="form-control">
                                        <option value="">Select </option>
                                        {state && state.map((item: any) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}

                                    </Field>
                                    <ErrorMessage name="manufacturerState" component="div"></ErrorMessage>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">City</label>
                                    <div className="col-sm-8">
                                    <Field as="select" name="manufacturerCity" className="form-control">
                                        <option value="">Select </option>
                                        {city && city.map((item: any) => (
                                            <option key={item.id} value={item.id}>{item.name}</option>
                                        ))}

                                    </Field>
                                    <ErrorMessage name="manufacturerCity" component="div"></ErrorMessage>
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label  className="col-sm-4 col-form-label">Manufacture Date</label>
                                    <div className="col-sm-8">
                                    <Field  name="productManufacturerDate" className="form-control" type="date" onChange={onChangeDate}></Field>
                                    <ErrorMessage name="productManufacturerDate" component="div"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label  className="col-sm-4 col-form-label">Quality</label>
                                    <div className="col-sm-8">
                                    <div role="group">
                                        <label><Field className="form-control" type="checkbox"  name="productQuality" value="High" /> High</label>
                                        <label><Field className="form-control" type="checkbox"  name="productQuality" value="Medium" /> Medium</label>
                                        <label><Field className="form-control" type="checkbox"  name="productQuality" value="Low" /> Low</label>
                                    </div>
                                    <ErrorMessage name="productQuality" component="div"></ErrorMessage>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label className="col-sm-4 col-form-label">Manufacture Address</label>
                                    <div className="col-sm-8">          
                                    <FieldArray  name="manufacturerAddress">
                                        {
                                            fieldArrayProps => {
                                                const { form, remove, push } = fieldArrayProps;
                                                const { values, errors } = form;
                                                const address = values.manufacturerAddress || []
                                                return (<>
                                                    {(address || []).map((addr: any, index: number) => (
                                                        <div key={index}>
                                                            <label htmlFor={`address.${index}.street`}>Address {index + 1}</label>
                                                            <Field name={`address.${index}.street`} placeholder="street" type="text"  className="form-control"></Field>
                                                            <ErrorMessage name={`errors.manufacturerAddress.${index}.street`} component="div" />

                                                            <div className="field-error">
                                                                {/* {errors != "__proto__" ? errors?.manufacturerAddress[index]?.street : ""} */}
                                                            </div>

                                                            <label htmlFor={`address.${index}.pincode`}></label>
                                                            <Field className="form-control" name={`address.${index}.pincode`} placeholder="pincode" type="text"></Field>
                                                            <ErrorMessage name={`errors.manufacturerAddress.${index}.pincode`} component="div" />
                                                            {/* {errors ? errors?.manufacturerAddress[index]?.pincode : ""} */}
                                                            {index > 0 && (<button type="button" onClick={() => remove(index)}>X</button>)}
                                                        </div>
                                                    ))}

                                                    <br />
                                                    <button className="form-control btn" type="button" onClick={() => push({ street: "", pincode: "" })}>Add</button>
                                                </>)
                                            }
                                        }
                                    </FieldArray>
                                        </div>
                                </div>
                                <div className="form-group row">
                                <div className="col-sm-4">
                                    </div>
                                <div className="col-sm-8">
                                    <button className="form-control btn" type="button" onClick={() => formik.validateForm()}>Validate all</button>
                                    <button className="form-control btn" type="submit">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>


    </div>)
}

const mapStateToProps = (state: any) => {
    debugger
    return {
        country: state.product.country,
        state: state.product.state,
        city: state.product.city,
        successAddProduct: state.product.success,
        editProduct: state.product.editProduct
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCountry: () => dispatch(countryRequest()),
        getStateByCountryId: (countryId: number) => dispatch(stateRequest(countryId)),
        getCityByStateId: (stateId: number) => dispatch(cityRequest(stateId)),
        addProduct: (product: IProduct) => dispatch(addProductRequest(product)),
        getProductById: (productId: number) => dispatch(getProductByIdRequest(productId))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm)