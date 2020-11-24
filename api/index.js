import { createClient } from 'contentful';
import parseArrayToObject from '../utils/parseArrayToObject';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const formatContent = (content) => {
    const images = content.fields.scrollstoryImages.map(image => image.fields.file);
    const imageDictionary = parseArrayToObject(images, 'fileName');
    const { blocks } = content.fields.scrollstoryBlocks;
    return blocks.map(block => ({
        ...block,
        image: imageDictionary[block.imgSrc] || {}
    }));
}

const getAppSpecificContent = (content) => {
    const scrollstorySpecificContent = content.filter(item => !!item.fields.scrollstoryBlocks)
    return scrollstorySpecificContent[0];
}

const fetchContent = async () => {
    const content = await client.getEntries();
    if (Array.isArray(content.items)) {
        return formatContent(getAppSpecificContent(content.items))
    }
    console.log(`Contentful Fetch Error: ${content}`)
}

export default fetchContent;