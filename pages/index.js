import Head from 'next/head';
import StoryBlock from '../components/StoryBlock';
import fetchContent from '../api/index';

export default function Home({storyBlocks}) {
    return (
        <div>
            <Head>
                <title>scrollstory</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="container mx-auto">
                    {storyBlocks.map((storyBlock) => (
                        <StoryBlock {...storyBlock} key={storyBlock.id}/>
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
