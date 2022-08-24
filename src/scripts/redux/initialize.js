import * as Activity from './activity';
import { useDispatch } from 'react-redux';
import { ActivityData } from '../data';

const Initialize = () => {
    const dispatch = useDispatch();

    ActivityData.get().then(result => {
        dispatch(Activity.init(result.data));
    });
}

export default Initialize;