import { waitForLogin } from "../components/Redux-Store/Login/login-saga";
import { all } from "redux-saga/effects";
import { waitForCountry,waitForState, waitForCity, waitForGetProduct, waitForGetProductById } from "../components/Redux-Store/Product/product-saga";

export default function* rootSaga() {
    yield all([waitForLogin(),waitForCountry(),waitForState(),waitForCity(),waitForGetProduct(),waitForGetProductById()])
}