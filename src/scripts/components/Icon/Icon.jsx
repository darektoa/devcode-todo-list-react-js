import {className as classname} from "../../utilities/string-helper";

const Icon = (props) => {
    const {className, ext='svg', name, ...attrs} = props;

    return (
        <div {...attrs}
            className={classname(`aspect-square bg-[] bg-no-repeat bg-contain`, className)}
            style={{ backgroundImage: `url(/icons/${name}.${ext})` }}>
        </div>
    );
}

export default Icon;