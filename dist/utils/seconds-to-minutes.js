const secondsToMinutes = (t) => {
    const mins = Math.floor(t / 60);
    const seconds = t % 60;
    return `${mins}${seconds ? ':' + seconds : ''}`.trim();
};
export default secondsToMinutes;
