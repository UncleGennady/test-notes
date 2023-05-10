export const searchNotes = (notes, filterField, word) => {
    return notes.map((note) => {
        const stringArr = note.values[filterField].split(' ');
        const hasMatch = stringArr.some((item) => item.toLowerCase() === word.toLowerCase());

        if (hasMatch) {
            const highlightedArr = stringArr.map((item) => {
                if (item.toLowerCase() === word.toLowerCase()) {
                    return `<mark>${item}</mark>`;
                } else {
                    return item;
                }
            });

            return {
                ...note,
                values: {
                    ...note.values,
                    [filterField]: highlightedArr.join(' ')
                }
            };
        }

        return note;
    });
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