import React, { useEffect, useState } from 'react';

type MenuItem = {
    id: number;
    name: string;
    price: number;
};

const MenuPage: React.FC = () => {
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Выполняем GET-запрос к серверу
        fetch('http://localhost:5000/api/menu')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch menu');
                }
                return response.json();
            })
            .then(data => {
                setMenuItems(data);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuPage;
