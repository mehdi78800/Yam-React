import {useSelector, useDispatch} from 'react-redux';
import { add_yam, set_nb_throw, show_dice } from '../actions/actions-types';

const Form = () => {

    const { nb_throw } = useSelector(state => state );
    const dispatch = useDispatch();

    const handleChange = e => {
        const { value: nb_throw } = e.target;

        dispatch(set_nb_throw(nb_throw));
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(show_dice());
        dispatch(add_yam());
    }

    return (
        <form className="col-12" onSubmit={handleSubmit}>
            <label >
                Nombre de lancer(s) :
                <input className="form-control" type="number" min="1" onChange={handleChange} value={nb_throw} />
            </label>
            <button className="btn btn-primary " type="submit" >Lancer</button>
        </form>
    )
}

export default Form;