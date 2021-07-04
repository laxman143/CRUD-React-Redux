import { REQUEST_COUNTRY, SUCCESS_COUNTRY, FAILED_COUNTRY, REQUEST_STATE, SUCCESS_STATE, FAILED_STATE, REQUEST_CITY, SUCCESS_CITY, FAILED_CITY, REQUEST_ADD_PRODUCT, SUCCESS_ADD_PRODUCT, FAILED_ADD_PRODUCT, REQUEST_GET_PRODUCT, SUCCESS_GET_PRODUCT, FAILED_GET_PRODUCT, REQUEST_GET_PRODUCT_BY_ID, SUCCESS_GET_PRODUCT_BY_ID, FAILED_GET_PRODUCT_BY_ID } from "./product-type";


const initialProduct = {
    // product:  {
        country : [],
        state: [],
        city: [],
        productList: [],
        editProduct: {},
    // },
    success:false,
    error:""
}

// const getLoadingState = (intialValue) => ({
//     isLoading: true,
//     state: intialValue,
//     error: '',
// });

// const getSuccessState = (value) => ({
//     state: value,
//     isLoading: false,
//     error: '',
// });

// const getErrorState = (error, defaultValue) => ({
//     error,
//     state: defaultValue,
//     isLoading: false,
// });

// case: SUCCESS_LIST:  { return getSuccessState([...state, action.payload]); }
const ProductReducer = (state = initialProduct,action:any) => {
    switch (action.type) {
        // case REQUEST_COUNTRY: {
        //     return getLoadingState([]);
        // }       
        // case  SUCCESS_COUNTRY:{
        //     return getSuccessState(action.payload);
        // }
        // case FAILED_COUNTRY: {
        //     return getErrorState(action.payload, []);
        // }
        case REQUEST_COUNTRY: {
            return {
                ...state
            }
        }       
        case  SUCCESS_COUNTRY:{
            return {
                ...state,
                country : action.payload
            }
        }
        case FAILED_COUNTRY: {
            return {
                ...state,
                error : "error"
            }
        }
        case REQUEST_STATE: {
            return {
                ...state
            }
        }       
        case  SUCCESS_STATE:{
            return {
                ...state,
                state : action.payload
            }
        }
        case FAILED_STATE: {
            return {
                ...state,
                error : "error"
            }
        }
        case REQUEST_CITY: {
           return {
                ...state
            }
        }       
        case  SUCCESS_CITY:{
            return {
                ...state,
                city : action.payload
            }
        }
        case FAILED_CITY: {
            return {
                ...state,
                error : "error"
            }
        }
        case REQUEST_ADD_PRODUCT: {
            return {
                ...state
            }
        }
        case SUCCESS_ADD_PRODUCT: {
            return {
                ...state,
                success: action.payload
            }
        }
        case FAILED_ADD_PRODUCT: {
            return {
                ...state,
                error : "error"
            }
        }
        case REQUEST_GET_PRODUCT: {
            return {
                ...state
            }
        }
        case SUCCESS_GET_PRODUCT: {
            return {
                ...state,
                productList: action.payload
            }
        }
        case FAILED_GET_PRODUCT: {
            return{
                ...state,
                error: 'Error'
            }
        }
        case REQUEST_GET_PRODUCT_BY_ID: {
            return {
                 ...state
             }
         }       
         case  SUCCESS_GET_PRODUCT_BY_ID:{
             return {
                 ...state,
                 editProduct : action.payload
             }
         }
         case FAILED_GET_PRODUCT_BY_ID: {
             return {
                 ...state,
                 error : "error"
             }
         }
    
        default: return state
    }
}

export default ProductReducer