export const formatDate = (date) => {
    let hours = new Date(date).getHours();
    let minutes = new Date(date).getMinutes();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    return `${hours}:${minutes}`
}