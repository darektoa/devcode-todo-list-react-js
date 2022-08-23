import CONFIG from '../../../config';
import { className as classname } from '../../../utilities/string-helper';

const Brand = (props) => {
    const { children, className, value, ...attrs } = props;

    return (
        <span {...attrs}
            className={classname('font-bold text-white', className)}
            data-cy="header-title">
            { children || value || CONFIG.APP.NAME }      
        </span>
    );
}

export default Brand;