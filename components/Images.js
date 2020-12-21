import NextImage from 'next/image';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Image = ({ yValue, setYValue, img, numberOfImages, imageIndex, storyBlockIndex }) => {
    const { ref, inView } = useInView({
        threshold: 0.01
    });

    const heights = {
        1: 'h-full',
        2: 'h-1/2',
        3: 'h-1/3'
    };
    useEffect(() => {
        setYValue({
            previousPageYOffset: window.pageYOffset,
            scrollDirection: yValue.previousPageYOffset
        });
    }, [inView]);

    return (
        <div
            style={{ zIndex: `${storyBlockIndex}${imageIndex}` }}
            ref={ref}
            className={`${heights[numberOfImages]} w-screen`}>
            <div
                className={`${
                    inView
                        ? 'opacity-100 fixed top-0 bottom-0 left-0 right-0'
                        : 'opacity-0 relative'
                } transition-opacity duration-250 ease-in-out delay-500`}>
                <NextImage src={`https:${img.url}`} layout='fill' className={`object-cover`} />
            </div>
        </div>
    );
};

const Images = ({ images = [], ...props }) => {
    return images.length > 0 ? (
        <>
            {images.map((img, imageIndex, { length }) => (
                <Image
                    key={img.url}
                    img={img}
                    imageIndex={imageIndex}
                    numberOfImages={length}
                    {...props}
                />
            ))}
        </>
    ) : null;
};

export default Images;
