const determineThreshold = (numberOfImages) => {
    if (numberOfImages === 1) {
        return [0.01, 0.99]
    } else if (numberOfImages === 2) {
        return [0.01, 0.5, 0.99]
    } else if (numberOfImages === 3) {
        return [0.01, 0.33, 0.66, 0.99]
    } else {
        return [0.01, 0.99]
    }
};

export default determineThreshold;