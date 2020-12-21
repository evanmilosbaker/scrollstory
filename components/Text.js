const Text = ({ text }) =>
    text ? (
        <div
            style={{ zIndex: 1000 }}
            className='shadow-sm bg-white bg-opacity-50 absolute right-10 left-10'>
            <p
                style={{ zIndex: 1001 }}
                className='pl-5 pr-5 relative'
                dangerouslySetInnerHTML={{ __html: text }}
            />
        </div>
    ) : null;

export default Text;
