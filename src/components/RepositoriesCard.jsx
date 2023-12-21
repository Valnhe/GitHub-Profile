import StarIcon from '../images/Star.svg';
import NestingIcon from '../images/Nesting.svg';
import ChieldIcon from '../images/Chield_alt.svg';

function repositoriesCard({url , name , description , license , forks , stars , updated}) {

    const currentDate = new Date();
    const parsedOriginalDate = new Date(updated);

    const timeDifference = currentDate - parsedOriginalDate;
    const formattedDate  = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return (
        <article className="bg-gradient-to-r from-[#111729] to-[#1D1B48] w-full h-fit px-6 py-6 rounded-xl">
            <a href={url} target="_blanck" >
            <h3 className="text-xl text-white">
                {name}
            </h3>
            <p className="text-base text-[#CDD5E0] font-normal my-2">
                {description}
            </p>
            <footer className="flex flex-col sm:flex-row text-center gap-2 text-[#CDD5E0]">

                {
                    license ? (
                        <section className='flex items-center gap-1'>
                            <img src={ChieldIcon} alt="Star Icon"/>
                            <p>{license}</p>
                        </section>
                    ) : ''
                }

                <section className='flex items-center gap-1'>
                    <img src={NestingIcon} alt="Star Icon"/>
                    <p>{forks}</p>
                </section>

                <section className='flex items-center gap-1'>
                    <img src={StarIcon} alt="Star Icon"/>
                    <p>{stars}</p>
                </section>
                
                <span className='text-sm self-end ml-5'>updated {formattedDate === 0 ? 'today' : `${formattedDate} days ago`}</span>

            </footer>
        </a>

        </article>
        
    )

} export default repositoriesCard;
