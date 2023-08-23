const getTimeDifference = (inputDate) => {
    const now = new Date();
    const input = new Date(inputDate);

    const timeDifference = now - input;
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (minutesDifference < 60) {
        return `${minutesDifference} minute(s) ago`;
    } else if (hoursDifference < 24) {
        return `${hoursDifference} hour(s) ago`;
    } else {
        return `${daysDifference} day(s) ago`;
    }
}
export default getTimeDifference;
// Example usage
//const inputDate = "2023-08-20T15:00:00"; // Replace with your input date and time
//const timeAgo = getTimeDifference(inputDate);
//console.log(timeAgo);
