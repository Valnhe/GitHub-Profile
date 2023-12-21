import StarIcon from '../images/Star.svg';
import NestingIcon from '../images/Nesting.svg';
import ChieldIcon from '../images/Chield_alt.svg';

function repositoriesCard({url}) {
    return (
        <article className="bg-gradient-to-r from-[#111729] to-[#1D1B48] w-full lg:w-1/2 px-5 py-3 rounded-xl">
            <a href={url} target="_blanck" >
            <h3 className="text-xl text-white">
                nombre del repositories
            </h3>
            <p className="text-base text-[#CDD5E0] font-normal my-2">
                Descripcion
            </p>
            <footer className="flex text-center gap-2 text-[#CDD5E0]">
            <section className='flex items-center gap-1'>
                    <img src={ChieldIcon} alt="Star Icon"/>
                    <p>MIT</p>
                </section>
                
                <section className='flex items-center gap-1'>
                    <img src={NestingIcon} alt="Star Icon"/>
                    <p>valor</p>
                </section>

                <section className='flex items-center gap-1'>
                    <img src={StarIcon} alt="Star Icon"/>
                    <p>valor</p>
                </section>
                
                <span className='text-sm self-end ml-5'>updated dias days ago</span>

            </footer>
        </a>

        </article>
        
    )

} export default repositoriesCard;
