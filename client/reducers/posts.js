function posts(state = [], action) {
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log('Incrementing Likes!!');
            const i=action.index;
            return [
                ...state.slice(0, i), //before the one we are updating stays the same
                {...state[i], likes: state[i].likes +1}, // we just increment the like of the clicked one according to its index
                ...state.slice(i + 1), // after the one we are updating stays the same
            ]
            default: 
            return state;
    }
}

export default posts;