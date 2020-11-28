import Image from 'next/image';

const Images = ({ images, displayImage, activeImageIndex }) => {
    return (
        <div>
            {images.map((img, i) => (
                <div
                    key={img.url}
                    className={`${
                        displayImage && activeImageIndex === i
                            ? 'opacity-100 fixed top-0 bottom-0 left-0 right-0'
                            : 'opacity-0'
                    } transition-opacity duration-1000 z-0 `}>
                    <Image src={`https:${img.url}`} layout='fill' className={`object-cover`} />
                </div>
            ))}
        </div>
    );
};

export default Images;
