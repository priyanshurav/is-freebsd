export const isFreeBSD = (): boolean => {
  if (typeof process === 'undefined' || typeof process.platform !== 'string')
    return false;
  return process.platform === 'freebsd';
};
