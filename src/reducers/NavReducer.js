
// const Reducer=(state, action)=>{
//     console.log("reducer checking action payload", action.payload)
//     console.log("reducer check action type", action.type)
//     console.log("reducer state:", state)
    
//     switch(action.type){
//         case 'SET_ALL_ROBOTS':
//             return{
//                 ...state,
//                 allRobots: action.payload
//             };
//         case 'ADD_ROBOT':
//             return  {
//                 ...state,
//                 robotHanger: [...state.robotHanger, action.payload] 
//             };
//         case 'REMOVE_ROBOT':
//             return{
//                 ...state,
//                 robotHanger: state.robotHanger.filter((robot)=>{ 
//                     return robot.id !== action.payload.id ;
//                 })
//             };
//         default:
            
//             return state;
//     };

// };


