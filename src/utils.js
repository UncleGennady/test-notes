export const searchNotes = (posts, searchFields, searchQuery) => {
    const lowercaseQuery = searchQuery.toLowerCase();

    return posts.reduce((filteredPosts, post) => {
        const matchesSearchQuery = searchFields.some((field) => {
            const fieldValue = post.values[field];
            const lowercaseFieldValue = fieldValue.toLowerCase();
            return lowercaseFieldValue.includes(lowercaseQuery);
        });

        if (matchesSearchQuery) {
            const updatedPost = { ...post };

            searchFields.forEach((field) => {
                const fieldValue = post.values[field];
                updatedPost.values[field] = highlightMatches(fieldValue, lowercaseQuery);
            });

            filteredPosts.push(updatedPost);
        } else if (searchQuery === '') {
            filteredPosts.push(post);
        }

        return filteredPosts;
    }, []);
};

const highlightMatches = (text, query) => {
    const regex = new RegExp(query, 'gi');
    return text.replace(regex, (match) => `<mark>${match}</mark>`);
};

const getDateClosing = () => {
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return (value)=>{
        const date = new Date(value);
        const mounth = month[date.getMonth()];
        const day = date.getDate().toString().padStart(2, '0');

        let dayOfMounth;

        if(day.length === 2 && day.slice(0,1) === '1'){
            dayOfMounth = day+"th";
        }else if(day.slice(day.length-1)==="1"){
            dayOfMounth = day+"st"
        }else if(day.slice(day.length-1)==="2"){
            dayOfMounth = day+"nd"
        }else if(day.slice(day.length-1)==="3"){
            dayOfMounth = day+"rd"
        }else {
            dayOfMounth = day+"th"
        }
        const year = date.getFullYear()

        return (`${mounth} ${dayOfMounth}, ${year}`)
    }
}
export const getDate = getDateClosing()