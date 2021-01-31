import { isFreeBSD } from '.';

test('should return true if process.platform is freebsd', () => {
  Object.defineProperty(process, 'platform', { value: 'freebsd' });

  expect(isFreeBSD()).toBe(true);
});

test('should return false if process.platform is not freebsd', () => {
  Object.defineProperty(process, 'platform', { value: 'win32' });

  expect(isFreeBSD()).toBe(false);
});

test('should return false if process.platform does not exist', () => {
  Object.defineProperty(process, 'platform', { value: 'freebsd' });
  delete (process as any).platform;
  expect(isFreeBSD()).toBe(false);
});

test('should return false if process variable does not exist', () => {
  Object.defineProperty(process, 'platform', { value: 'freebsd' });
  delete (global as any).process;
  expect(isFreeBSD()).toBe(false);
});
