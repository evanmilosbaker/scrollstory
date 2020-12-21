import Images from '../components/Images';
import Text from '../components/Text';

const StoryBlock = ({ text, images, ...props }) => {
    return (
        <div className='h-screen relative'>
            <Text text={text} />
            <Images images={images} {...props} />
        </div>
    );
};

export default StoryBlock;
