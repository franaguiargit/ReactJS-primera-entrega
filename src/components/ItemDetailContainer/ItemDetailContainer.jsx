import { useState, useEffect } from 'react';
import { getUnProducto } from '../../asyncmock';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        getUnProducto(1)
            .then(res => {
                setProducto(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err);
                setLoading(false);
            });
    }, []);

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
