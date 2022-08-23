import Text from "../Text";
import {className as classname} from "../../utilities/string-helper";

const Header = (props) => {
    const {className, ...attrs} = props;

    return (
        <header {...attrs}
            className={classname('w-full bg-primary h-[105px]', className)}
            data-cy="header-background">
            <div className="container h-full flex items-center">
                <Text.Brand className="text-2xl" />
            </div>
        </header>
    )
}

export default Header;