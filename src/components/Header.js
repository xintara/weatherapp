import Location from './Location';
import SearchBar from './SearchBar';
import Settings from './Settings';

function Header() {
    return <div className='Header'>
        <Location />
        <SearchBar />
        <Settings />
    </div>
}

export default Header;