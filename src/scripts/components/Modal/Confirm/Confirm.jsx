import {className as classname} from '../../../utilities/string-helper';
import Button from '../../../components/Button';
import { useEffect, useState } from 'react';

const Confirm = (props) => {
    const {children, className, onClose, onShow, onSubmit, show, ...attrs} = props;
    const [showMe, setShowMe] = useState(show);

    const closeHandle = () => {
        if(onClose) onClose();
        setShowMe(false);
    };

    const showHandle = () => {
        if(onShow) onShow();
    }

    const submitHandle = () => {
        if(onSubmit) {
            onSubmit();
            setShowMe(false);
        }
    }

    useEffect(() => {
        if(new Boolean(show)) showHandle();
        setShowMe(show);
    }, [show]);

    return (
        <div onClick={closeHandle}
            className={classname('w-screen h-screen bg-slate-900 bg-opacity-10 fixed top-0 left-0 flex justify-center items-center transition-all duration-200', showMe || 'scale-0 opacity-0')}>
            <section {...attrs}
                className={classname("w-11/12 max-w-lg p-11 bg-white rounded-xl", className)}>
                <div className="w-full flex flex-col items-center text-center">
                    { children }
                </div>
                <div className="flex justify-center font-semibold">
                    <Button className="mr-5 px-12 text-[#4A4A4A] bg-[#F4F4F4]" onClick={closeHandle} data-cy="modal-delete-cancel-button">Batal</Button>
                    <Button className="px-12 text-white bg-danger" onClick={submitHandle} data-cy="modal-delete-confirm-button">Hapus</Button>
                </div>
            </section>
        </div>
    );
}

export default Confirm;