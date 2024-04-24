import { useState } from 'react';
import Conversations from './Conversations';
import MenuHeader from './MenuHeader';
import MenuSearch from './MenuSearch';

const Menu = () => {
    const [text, setText] = useState('');

    return (
        <div className="min-h-full bg-orange-200">
            <MenuHeader />
            <MenuSearch setText={setText} />
            <Conversations text={text} />
        </div>
    )
}

export default Menu