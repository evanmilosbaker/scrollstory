import Head from 'next/head';
import { useState } from 'react';
import StoryBlock from '../components/StoryBlock';
import fetchContent from '../api/index';

export default function Home({ storyBlocks }) {
    const [yValue, setYValue] = useState({
        previousPageYOffset: null,
        scrollDirection: null
    });
    return (
        <div>
            <Head>
                <title>scrollstory</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='container mx-auto'>
                    {storyBlocks.map((storyBlock, storyBlockIndex) => (
                        <StoryBlock
                            {...storyBlock}
                            storyBlockIndex={storyBlockIndex}
                            yValue={yValue}
                            setYValue={setYValue}
                            key={storyBlock.id}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export async function getStaticProps() {
    const storyBlocks = await fetchContent();
    return { props: { storyBlocks } };
}
