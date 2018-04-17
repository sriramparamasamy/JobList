export default function (state={}, action) {
    switch(action.type) {
        case "JOBS_SELECTED":
            return action.payload;
            break;
    }
    return state; 

    
}