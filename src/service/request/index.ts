import { getServiceEnvConfig } from '~/.env-config';
import { createRequest } from './request';

const { url, proxyPattern } = getServiceEnvConfig(import.meta.env);

const isHttpProxy = import.meta.env.VITE_HTTP_PROXY === 'N';
const isHttpMock = import.meta.env.VITE_HTTP_MOCK === 'Y';

export const request = isHttpMock
  ? createRequest({ baseURL: '/mock' })
  : createRequest({ baseURL: isHttpProxy ? proxyPattern : url });
// export const request = createRequest({ baseURL: '/mock' });
// export const mockRequest = createRequest({ baseURL: '/mock' });
