import { useState , useEffect} from 'react';

import getGithubUser from './api/ProfileApi';
import getRepositories from './api/RepositoriesApi';
import NotFound from './images/notfound.png';

import SearchBar from './components/SearchBar';
import MiniCard from './components/MiniCard';
import RepositoriesCard from './components/RepositoriesCard';

import './index.css'

function App() {

  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [filter, setFilter] = useState(true);

  async function handleSearch(username) {
    if (!username) return;
    const data = await getGithubUser(username);
    const repositories = await getRepositories(username);
    
    setData(data);
    setRepositories(repositories);
    setFilter(true);  
  }

  useEffect(() => {
    handleSearch('GitHub'); 
  }, [])

  const handleFilter = () => {
    setFilter(!filter);
  }

  const filterRepositories = filter && repositories.length > 0 ? repositories.slice(0, 4) : repositories;

  return (
    <div className='min-h-screen bg-[#20293A] font-medium text-[#4A5567]'>
      <header id='image-bkg' className='flex justify-center'>
        <SearchBar handleSearch={handleSearch}/>
      </header>
      <main className='mx-16 xl:mx-32'>
        <header className='sm:flex items-end gap-10 '>
          <img src={data.avatar_url ? data.avatar_url : NotFound} alt="Avatar" className='border-8 rounded-2xl border-[#20293A] -mt-10 w-32 h-auto self-start'/>
          <article className='flex flex-col lg:flex-row gap-4 self-center mt-4 lg:mt-0'>
            <MiniCard label={"Followers"} value={data.followers}/>
            <MiniCard label={"Following"} value={data.following}/>
            <MiniCard label={"Location"} value={data.location}/>
          </article>
        </header>

        <article>
          <header className='mt-4 mb-7'>
            <h1 className='text-white text-[32px]'>GitHub</h1>
            <h2 className='text-base text-[#CDD5E0] font-normal' >How people build software.</h2>
          </header>

          <section className='grid grid-cols-1 lg:grid-cols-2 gap-7'>

            {repositories.length > 0 && 
              filterRepositories.map((repository) => (
                <RepositoriesCard key={repository.id} url={repository.html_url} name={repository.name} description={repository.description} license={repository.license ? repository.license.spdx_id : ''} forks={repository.forks_count} stars={repository.stargazers_count} updated={repository.updated_at}/>
              ))

            }
            
          </section>
          <button onClick={handleFilter} className='text-center text-[#CDD5E0] text-sm w-full my-14'>
            {repositories.length > 0 ? filter? 'View all repositories' : 'View less repositories' : ''}
          </button>
        </article>
      </main>


    </div>
  )
}

export default App
