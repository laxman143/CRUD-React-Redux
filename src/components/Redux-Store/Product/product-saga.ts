import { takeEvery, call, put } from "redux-saga/effects";
import axios from 'axios';
import { countrySuccess, countryFailed, stateSuccess, citySuccess, addProductSuccess, addProductFailed, getProductSuccess, getProductFailed, getProductByIdSuccess, getProductByIdFailed } from "./product-action";
import { REQUEST_COUNTRY, REQUEST_STATE, REQUEST_CITY, REQUEST_ADD_PRODUCT, REQUEST_GET_PRODUCT, REQUEST_GET_PRODUCT_BY_ID } from "./product-type";

export function* waitForCountry() {
    
    yield takeEvery(REQUEST_COUNTRY, getCountry)
}

function* getCountry() {
    // try {
    const country: any = [{ id: 1, name: "India" }, { id: 2, name: "US" }]//yield call(() => axios.get("http://localhost:3000/country"));
    // const country: any = yield call(() => axios.get("http://localhost:3000/country"));
    yield put(countrySuccess(country))
    // } catch (error) {
    //     yield put(countryFailed("Error"))
    // }
}


export function* waitForState() {
    yield takeEvery(REQUEST_STATE, getStateByCountryId);
}

function* getStateByCountryId(country: any) {
    const state: any = [{ id: 1, name: "Gujarat", countryId: 1 }, { id: 2, name: "Maharastra", countryId: 1 }]
    const stateList: any = state.filter((h: any) => h.countryId == country.countryId);
    yield put(stateSuccess(stateList));
}


export function* waitForCity() {
    yield takeEvery(REQUEST_CITY, getCityByStateId);
}

function* getCityByStateId(state: any) {
    const city: any = [{ id: 1, name: "Surat", stateId: 1 }, { id: 2, name: "Mumbai", stateId: 2 }]
    const cityList: any = city.filter((h: any) => h.stateId == state.stateId);
    yield put(citySuccess(cityList));
}


export function* waitForAddProduct() {
    yield takeEvery(REQUEST_ADD_PRODUCT, addUpdateProduct);
}

function* addUpdateProduct(product: any) {
    try {
        if (product.payload.id != 0 && product.payload.id > 0) {
            yield call(() => axios.post(`http://localhost:3000/Product/${product.payload.id}`, product.payload))
            yield put(addProductSuccess(true))
        } else {
            yield call(() => axios.post('http://localhost:3000/Product', product.payload))
            yield put(addProductSuccess(true))
        }

    } catch (error) {
        yield put(addProductFailed('Error'))
    }
}


export function* waitForGetProduct() {
    yield takeEvery(REQUEST_GET_PRODUCT, getProduct)
}

function* getProduct() {
    try {
        // const product:any =   yield call(()=> axios.get('http://localhost:3000/Product/'));
        const product = [{ id: 1, productName: 'Product1' }, { id: 2, productName: 'Product2' }]
        debugger
        yield put(getProductSuccess(product))
    } catch (error) {
        yield put(getProductFailed("Error"))
    }
}




export function* waitForGetProductById() {
    yield takeEvery(REQUEST_GET_PRODUCT_BY_ID, getProductById)
}

function* getProductById(product: any) {
    try {
        // const product:any =   yield call(()=> axios.get(`http://localhost:3000/Product/${product.id}`));
        const product = { id: 1, productName: 'Product1' , productRate : 10,productQuntity :10,manufacturerCountry:1,manufacturerState:1,manufacturerCity:1,productManufacturerDate:"2021-06-18",productQuality:["High","Medium"],manufacturerAddress:[{street : "asd",pincode:"asd"},{street : "asd",pincode:"asd"}]};
        yield put(getProductByIdSuccess(product))
    } catch (error) {
        yield put(getProductByIdFailed("Error"))
    }
}