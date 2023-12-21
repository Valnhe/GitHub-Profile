import PropTypes from 'prop-types';

function MiniCard ({label, value}) {
    return (
        <article className="bg-[#111729] w-fit h-fit px-5 py-3 rounded-xl">
            <span>{label}</span>
            <hr className="h-full w-[1px] border-[1px] mx-4 border-[#4A5567] inline"/>
            <span className="text-white font-normal">{value ? value : label=== 'Location' ? 'Not Found' : '0'}</span>

        </article>
    )
} 

MiniCard.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default MiniCard;