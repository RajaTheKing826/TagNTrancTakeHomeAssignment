export function resolveWithTimeout<T>(
  response: T,
  customTimeOut = 2000
): Promise<T> {
  const timeOut = process.env.IS_JEST ? 0 : customTimeOut;
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), timeOut);
  });
}
