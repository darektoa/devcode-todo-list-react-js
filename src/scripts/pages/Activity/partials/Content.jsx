import { ActivityData } from '../../../data';
import { remove } from '../../../redux/activity';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from '../../../components/Card';
import Icon from '../../../components/Icon';
import Illustration from "../../../components/Illustration";
import Modal from '../../../components/Modal';
import Text from '../../../components/Text';
import Toast from '../../../components/Toast';

const Content = (props) => {
    const { data } = props;
    const [wantToDelete, setWantToDelete] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const dispatch = useDispatch();

    const deleteActivity = () => {
        if(!wantToDelete.id) return;

        ActivityData
            .delete(wantToDelete.id)
            .then(() => {
                dispatch(remove(wantToDelete));
                toastDelete();
            })

        setWantToDelete(false);
    }

    const modalDelete = (event, item) => {
        event.preventDefault();
        event.stopPropagation();
        setWantToDelete(item);
    }

    const closeModalDelete = () => {
        setWantToDelete(false);
    }

    const toastDelete = (duration=2000) => {
        setDeleted(wantToDelete);
        setTimeout(() => setDeleted(false), duration);
    }

    return (
        <section className="flex flex-wrap justify-between">
            <Modal.Confirm show={wantToDelete} onClose={closeModalDelete} onSubmit={deleteActivity} data-cy="modal-delete">
                <Icon name="danger-alert" className="w-20 mb-8" data-cy="modal-delete-icon" />
                <Text className="mb-12 text-lg" data-cy="modal-delete-title">
                    Apakah anda yakin menghapus activity <br />
                    <span className="font-bold">"{wantToDelete.title}"?</span>
                </Text>
            </Modal.Confirm>

            <Toast show={deleted} className="flex items-center" data-cy="modal-information">
                <Icon name="success-info" className="mr-3 w-6" data-cy="modal-information-icon" />
                <Text className="text-sm" data-cy="modal-information-title">Activity Berhasil Dihapus</Text>
            </Toast>

            { 
                data ? data.map(item => 
                <Card.Activity data={item}
                    key={item.id}
                    className="mb-5 w-[23%]"
                    deleteHandle={(event) => modalDelete(event, item)}
                    data-cy={`activity-item-${item.id}`} />) :

                <Illustration name="empty-activity"
                    className="w-3/4 aspect-[16/10] mx-auto"
                    data-cy="activity-empty-state" />
            }
        </section>
    );
}

export default Content;