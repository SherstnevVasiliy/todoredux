import {useDispatch} from 'react-redux'
import {addTask} from '../action'

const InputForm = () => {
    const dispatch = useDispatch();

    const formHandler = (event:any) => {
        

        event.preventDefault();
        console.log(event.target.elements);
        let data = event.target.elements;
        dispatch(addTask(data.id.value));

    }

    return <div>
        <form onSubmit={formHandler}>
            <div>
                <input type = 'text' name = 'id' placeholder = 'input task...'/>
            </div>
            <div>
                <button type='submit'>Add new task</button>
            </div>
        </form>
    </div>
}

export default InputForm