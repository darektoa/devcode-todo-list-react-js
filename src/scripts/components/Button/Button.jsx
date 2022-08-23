import {className as classname} from "../../utilities/string-helper";

const Button = (props) => {
    const {children, className, value, ...attrs} = props;

    return (
        <button {...attrs}
            className={classname('py-3 px-7 rounded-full', className)}>
            {children || value}
        </button>
    );
}

export default Button;