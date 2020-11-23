import Image from 'next/image';

const StoryBlock = ({ imgSrc, text }) => {
    console.log('this is the img', imgSrc);
    return (
        <div style={{ height: '500px' }} >
            {imgSrc && <Image src={imgSrc} width={375} height={812} />}
            {text && <p>{text}</p>}
        </div>
    );
};

export default StoryBlock;
