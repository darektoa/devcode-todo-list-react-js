import {className as classname} from "../../utilities/string-helper";

const Illustration = (props) => {
    const { className, ext="svg", name, ...attrs} = props;

    return (
        <div {...attrs}
            className={classname(`bg-no-repeat bg-contain`, className)}
            style={{ backgroundImage: `url('/illustrations/${name}.${ext}')` }}>    
        </div>
    );
}

export default Illustration;