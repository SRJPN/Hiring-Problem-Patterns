var findNumber = (indices, results = [], matched = '') => {
    if (!indices || !indices.length) {
        results.push(matched);
        return;
    }
    return indices[0].reduce((result, currentIndex) => {
        if (currentIndex < matched[matched.length - 1]) {
            return result;
        }
        findNumber(indices.slice(1), results, `${matched}${currentIndex}`);
        return results;
    }, [])
};

var findIndices = (str, pattern) => str.split('').map((e, i) => e === pattern ? i : '').filter(String);


exports.Run = (str, patternsToMatch) => {
    return patternsToMatch.reduce((results, x) => {
        var indices = x.split('').map(pattern => findIndices(str, pattern));
        var result = findNumber(indices);
        return [...results, ...result];
    }, []);
};