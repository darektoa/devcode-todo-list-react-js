import { useSelector } from 'react-redux';
import Partial from "./partials";

const Activity = (props) => {
    const { data } = useSelector(state => state.activity);
    
    return (
        <section className="container">
            <Partial.Header />
            <Partial.Content data={data} />
        </section>
    );
}

export default Activity;