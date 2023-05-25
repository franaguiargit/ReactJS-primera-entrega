import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { idItem } = useParams();


    useEffect(() => {
        getUnProducto(idItem)
            .then(res => {
                setProducto(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, [idItem]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            {producto && <ItemDetail {...producto} />}
        </div>
    );
}

export default ItemDetailContainer;
