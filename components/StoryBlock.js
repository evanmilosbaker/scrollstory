import { useInView } from 'react-intersection-observer';
import Images from '../components/Images';
import Text from '../components/Text';
import determineThreshold from '../utils/determineThreshold';

const StoryBlock = ({ text, images }) => {
    const thresholds = determineThreshold(images.length);
    const { ref, inView, entry } = useInView({
        threshold: thresholds
    });

    const hasImages = Array.isArray(images) && images.length > 0;
    const displayImage = hasImages && entry && inView && entry.boundingClientRect.y >= 0;
    const activeImageIndex = !displayImage
        ? 0
        : thresholds.reduce((acc, curr, idx) => {
              if (
                  entry.intersectionRatio <= curr + 0.03 &&
                  entry.intersectionRatio >= curr - 0.03
              ) {
                  return idx === thresholds.length ? idx - 1 : idx;
              } else {
                  return acc;
              }
          }, null);

    return (
        <div ref={ref} className='h-screen flex content-start'>
            {text && <Text text={text} />}
            {hasImages && (
                <Images
                    images={images}
                    displayImage={displayImage}
                    activeImageIndex={activeImageIndex}
                />
            )}
        </div>
    );
};

export default StoryBlock;
