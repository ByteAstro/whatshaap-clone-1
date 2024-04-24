import Conversations from './Conversations';
import MenuHeader from './MenuHeader';
import MenuSearch from './MenuSearch';

const Menu = () => {
    return (
        <div className="min-h-full">
            <MenuHeader />
            <MenuSearch />
            <Conversations />
        </div>
    )
}

export default Menu