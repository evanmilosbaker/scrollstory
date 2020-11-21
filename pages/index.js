import Head from 'next/head';
import StoryBlock from '../components/StoryBlock';

export default function Home({ storyBlocks }) {
    console.log('these are the props in render', storyBlocks);
    return (
        <div className="container">
            <Head>
                <title>scrollstory</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="mainContainer">
                    {storyBlocks.map((storyBlock) => (
                        <StoryBlock {...storyBlock} />
                    ))}
                </div>
            </main>

            <footer></footer>
        </div>
    );
}

export async function getStaticProps() {
    return {
        props: {
            storyBlocks: [
                {
                    text: 'hi evan'
                },
                {
                    text: 'hi evan 1',
                    imgSrc: '/photos/1-1.jpg'
                },
                {
                    text: 'hi evan'
                },
                {
                    text: 'hi evan 1',
                    imgSrc: '/photos/1-2.jpg'
                },
                {
                    text: 'hi evan'
                },
                {
                    text: 'hi evan 1',
                    imgSrc: '/photos/1-3.jpg'
                },
                {
                    text: 'hi evan'
                },
                {
                    text: 'hi evan 1',
                    imgSrc: '/photos/1-4.jpg'
                },
                {
                    text: 'hi evan'
                },
                {
                    text: 'hi evan 1',
                    imgSrc: '/photos/1-5.jpg'
                }
            ]
        }
    };
}
