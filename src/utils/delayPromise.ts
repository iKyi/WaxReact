const delayPromise = (interval: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, interval);
  })
}
export default delayPromise;