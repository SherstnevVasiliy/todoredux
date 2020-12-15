const tasks = (state: [{id:number, task: string, done: boolean}], action:any) => {
    switch (action.type) {
        case 'ADD_TASK' :
            console.log('add task work');
            console.log(state);
            return [
                ...state,{
                    id: 1,
                    task: action.id,
                    done: false
                }
            ]
            default: return state
    }
}

export default tasks