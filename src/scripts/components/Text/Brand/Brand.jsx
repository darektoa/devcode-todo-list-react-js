import CONFIG from '../../../config';
import Str from '../../../utilities/string-helper';

const Brand = (props) => {
    const { children, className, value, ...attrs } = props;

    return (
        <span {...attrs}
            className={Str.className('font-bold text-white', className)}
            data-cy="header-title">
            { children || value || CONFIG.APP.NAME }      
        </span>
    );
}

export default Brand;