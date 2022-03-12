import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class TraceIdMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('traceid Middleware =========>');
    req.middleware = 'traceid';
    next();
  }
}
