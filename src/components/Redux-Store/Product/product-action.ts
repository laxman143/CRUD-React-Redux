import { REQUEST_COUNTRY, SUCCESS_COUNTRY, FAILED_COUNTRY, FAILED_CITY, SUCCESS_CITY, REQUEST_CITY, REQUEST_STATE, SUCCESS_STATE, FAILED_STATE, REQUEST_ADD_PRODUCT, SUCCESS_ADD_PRODUCT, FAILED_ADD_PRODUCT, REQUEST_GET_PRODUCT, SUCCESS_GET_PRODUCT, FAILED_GET_PRODUCT, REQUEST_GET_PRODUCT_BY_ID, SUCCESS_GET_PRODUCT_BY_ID, FAILED_GET_PRODUCT_BY_ID } from "./product-type"

export const countryRequest =() => {
   return {
        type: REQUEST_COUNTRY
    }
}

export const countrySuccess = (payload:any) => {
     return {
        type: SUCCESS_COUNTRY,
        payload: payload
    }
}

export const countryFailed = (error:any) => {
    return {
        type: FAILED_COUNTRY,
        payload: error
    }
}

export const stateRequest =(countryId:number) => {
    return {
         type: REQUEST_STATE,
         countryId:countryId
     }
 }
 
 export const stateSuccess = (payload:any) => {
      return {
         type: SUCCESS_STATE,
         payload: payload
     }
 }
 
 export const stateFailed = (error:any) => {
     return {
         type: FAILED_STATE ,
         payload: error
     }
 }


 export const cityRequest =(stateId:number) => {
    return {
         type: REQUEST_CITY,
         stateId:stateId
     }
 }
 
 export const citySuccess = (payload:any) => {
      return {
         type: SUCCESS_CITY,
         payload: payload
     }
 }
 
 export const cityFailed = (error:any) => {
     return {
         type: FAILED_CITY,
         payload: error
     }
 }


 export const addProductRequest = (product:any) => {
    return {
        type: REQUEST_ADD_PRODUCT,
        product: product
    }
 }


 export const addProductSuccess = (payload:any) => {
    return {
        type: SUCCESS_ADD_PRODUCT,
        payload:payload
    }
 }

 export const addProductFailed = (error:any) => {
    return {
        type: FAILED_ADD_PRODUCT,
        payload : error
    }
 }

 export const getProductRequest = () => {
     return {
         type: REQUEST_GET_PRODUCT
     }
 }

 export const getProductSuccess = (payload:any) => {
    return {
        type: SUCCESS_GET_PRODUCT,
        payload: payload

    }
 }

 export const getProductFailed = (error:any)=> {
    return {
        type :  FAILED_GET_PRODUCT,
        payload: error
    }
 }

 export const getProductByIdRequest = (productId:number) => {
     return {
         type : REQUEST_GET_PRODUCT_BY_ID
     }
 }

 export const getProductByIdSuccess = (payload: any) => {
     return {
         type: SUCCESS_GET_PRODUCT_BY_ID,
         payload: payload
     }
 }

 export const getProductByIdFailed = (error:any) => {
     return {
         type : FAILED_GET_PRODUCT_BY_ID,
         payload: error
     }
 }