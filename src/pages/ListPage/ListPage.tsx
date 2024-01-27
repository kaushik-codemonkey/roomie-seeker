import React, { useEffect, useState } from 'react';
import { User } from '../../types/User';


interface ListPageProps {
    user?: User; // Pass the authentication state as a prop
}

const ListPage: React.FC<ListPageProps> = ({ user }) => {
    useEffect(() => {
        document.title = "Listing"
    }, [])

    return <div> List Page</div>
};

export default ListPage;
