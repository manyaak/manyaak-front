export const sendDataToMobile = (data: any) => {
  const sender = (window as any).ReactNativeWebView?.postMessage;
  if (sender) {
    sender(typeof data === 'string' ? data : JSON.stringify(data));
  }
};
