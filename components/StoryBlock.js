import Image from 'next/image';

const StoryBlock = ({ imgSrc, text }) => {
    console.log('this is the img', imgSrc);
    return (
        <div className='storyBlock' style={{ height: '500px' }}>
            {imgSrc && <Image src={imgSrc} layout='fill' />}
            {text && <p>{text}</p>}
        </div>
    );
};

export default StoryBlock;
