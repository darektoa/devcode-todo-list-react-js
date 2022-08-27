import {className as classname} from "../../../utilities/string-helper";
import { Link } from "react-router-dom";
import Icon from "../../Icon";

const Activity = (props) => {
    const { className, data, deleteHandle, to, ...attrs } = props;
    const createdAt = (new Date(data.created_at)).toLocaleDateString('id-ID', { 
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <Link {...attrs}
            to={to || `/activities/${data.id}`}
            className={classname("min-w-[12rem] aspect-square px-7 py-6 bg-white rounded-xl shadow-md flex flex-col justify-between", className)}>
            <h3 className="font-bold text-lg" data-cy="activity-item-title">{data.title}</h3>
            <div className="flex justify-between items-center">
                <span className="text-sm text-[#888]" data-cy="activity-item-date">{ createdAt }</span>
                <Icon name="trash-gray" className="w-6" onClick={deleteHandle} data-cy="activity-item-delete-button" />
            </div>
        </Link>
    );
}

export default Activity;