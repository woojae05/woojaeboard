export const convertTime = (time: string) => {
    const convertedTime = new Date(time.split("T")[0])
    return convertedTime;
}