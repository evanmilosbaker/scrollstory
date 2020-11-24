import Image from 'next/image';

const StoryBlock = ({text, image}) => {
    return (
        <div style={{ height: '500px' }} >
            {image && image.url && <Image src={`https:${image.url}`} width={375} height={812} />}
            {text && <p>{text}</p>}
        </div>
    );
};

export default StoryBlock;
