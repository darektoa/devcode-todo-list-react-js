import {className as classname} from "../../utilities/string-helper";
import { useEffect, useState } from "react";

const Toast = (props) => {
    const {children, className, show, value, ...attrs} = props;
    const [showMe, setShowMe] = useState(show);

    useEffect(() => setShowMe(show), [show]);

    return (
        <section {...attrs}
            className={classname('max-w-md px-7 py-5 rounded-xl bg-white fixed top-5 right-5 transition-all duration-300', className, showMe || '-right-full')}>
            { children || value}
        </section>
    );
}

export default Toast;