import { CheckRightsMiddleware } from './check-rights.middleware';

describe('CheckRightsMiddleware', () => {
  it('should be defined', () => {
    expect(new CheckRightsMiddleware()).toBeDefined();
  });
});
