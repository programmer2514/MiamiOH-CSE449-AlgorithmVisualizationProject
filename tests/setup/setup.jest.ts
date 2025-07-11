import { enableFetchMocks } from 'jest-fetch-mock';
import { TextEncoder } from 'util';

enableFetchMocks();
global.TextEncoder ||= TextEncoder;
