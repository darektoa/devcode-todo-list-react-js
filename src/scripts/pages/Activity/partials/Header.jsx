import { ActivityData } from "../../../data";
import { create } from "../../../redux/activity";
import { useDispatch } from "react-redux";
import Button from "../../../components/Button";
import Icon from "../../../components/Icon";

const Header = (props) => {
    const dispatch = useDispatch();

    const createActivity = () => {
        ActivityData
            .create({title: 'New Activity', email: 'todo@example.com'})
            .then(result => dispatch(create(result.data)));
    }

    return (
        <section className="flex items-center pt-11 pb-14">
            <h1 className="items-center text-3xl font-bold" data-cy="activity-title">Activity</h1>
            <Button className="flex ml-auto bg-primary" data-cy="activity-add-button" onClick={createActivity}>
                <Icon name="plus" className="w-6" />
                <span className="ml-1.5 font-bold text-white">Tambah</span>
            </Button>
        </section>
    );
}

export default Header;