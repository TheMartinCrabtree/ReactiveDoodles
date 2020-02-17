

const Reducer=(state, action)=>{
    
    switch(action.type){
        case 'UPDATE_NAME':
            return{
                ...state,
                username: action.payload
            };
        case 'UPDATE_VIEW':
            return{
                ...state,
                activeViews: action.payload
            }

        default: 
            return state;
    };
};

export default Reducer;


