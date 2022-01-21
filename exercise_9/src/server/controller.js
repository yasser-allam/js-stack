// @flow

export const homePage = (): null => null;

export const helloPage = (): { hello: { message: string, ... }, ... } => ({
  hello: { message: 'Server-side preloaded message' },
});

export const helloAsyncPage = (): {
  hello: { messageAsync: string, ... },
  ...
} => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
});

export const helloEndpoint = (num: number): { serverMessage: string, ... } => ({
  serverMessage: `Hello from the server! (received ${num})`,
});
