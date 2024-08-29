import '../App.css';

function SearchBar() {
    return (
        <>
            <div className='search-container'>
                <div className='search-icon'>
                    <i className='bi bi-search'></i>
                </div>
                <div className='search-input'>
                    <input
                    type='text'
                    name='search-city'
                    placeholder='Search city...'
                    />
                </div>
            </div>
        </>
    )
}

export default SearchBar;