import { useState } from 'react';
import SearchIcon from '../images/Search.svg';

function SearchBar() {

    const [username, setUsername] = useState('');
    
    const handleSubmit = (e) => {
        setUsername(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(username);
        setUsername('');
    }

    return (
        <article className="bg-[#20293A] rounded-xl w-4/5 lg:w-2/5 xl:w-1/3 h-fit px-3 py-3 mt-10 ">
            <form onClick={handleClick}>
                <label className='flex gap-2'>
                    <button type="submit">
                        <img src={SearchIcon} alt="Search Icon" className='inline'/>
                    </button>
                    <input type="text" placeholder="username" className="bg-transparent font-medium placeholder:font-[450] text-[#97A3B6] placeholder:text-[#97A3B6]" value={username} onChange={handleSubmit}/>
                </label>
            </form>
            
        </article>
    )
} export default SearchBar;