const initialState = {
    isLoading: false,
    currentFolder: "",
    userFolders: [],
    userFiles: [],
    adminFolders: [],
    adminFiles: [],
}

const fileFoldersReducer = (state = initialState, action) =>{
        switch(action.type){
            default: return state;
        }
}

export default fileFoldersReducer;