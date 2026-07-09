import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Chỉ khớp với các đường dẫn public, bỏ qua thư mục tĩnh (_next, api, v.v.)
  matcher: ['/', '/(en|vi)/:path*']
};