import { combineReducers } from "redux";
import fileFoldersReducer from "./fileFoldersReducers";
import authReducer from "./authreducer";


const rootReducer =  combineReducers({auth: authReducer, fileFolders: fileFoldersReducer})


export default rootReducer;