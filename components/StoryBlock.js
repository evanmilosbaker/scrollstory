import { useState } from 'react';
import Image from 'next/image';
import { Waypoint } from 'react-waypoint';

const StoryBlock = ({ text, image, id }) => {
    const [displayImage, setDisplayImage] = useState(false)
    const onEnter = () => {
        if (image && image.url) {
            setDisplayImage(true)
        }
    };
    const onLeave = () => {
        setDisplayImage(false)
    }
    return (
        <>
            <Waypoint onEnter={onEnter} onLeave={onLeave} key={id} />
            <div className="h-screen flex content-start mb-px" >
                {text && <p className="mb-auto ml-auto mr-auto p-10 z-10 shadow-sm">{text}</p>}
            </div>
            {image.url && (<div className={`fixed ${displayImage ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000 top-0 bottom-0 left-0 right-0 z-0`}>
                <Image src={`https:${image.url}`} layout="fill" className="object-cover" />
            </div>)}
        </>
    );
};

export default StoryBlock;
