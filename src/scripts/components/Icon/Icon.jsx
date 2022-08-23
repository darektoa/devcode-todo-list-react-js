import {className as classname} from "../../utilities/string-helper";

const Icon = (props) => {
    const {className, ext='svg', name, ...attrs} = props;

    return (
        <div {...attrs}
            className={classname(`aspect-square bg-[url('/icons/${name}.${ext}')] bg-no-repeat bg-contain`, className)}>
        </div>
    );
}

export default Icon;