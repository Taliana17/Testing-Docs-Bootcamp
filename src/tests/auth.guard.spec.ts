import { AuthGuard } from '../auth/auth.guard';
import { JwtService } from '@nestjs/jwt';
import { ExecutionContext } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';

describe('AuthGuard (unit, no Nest DI)', () => {
  let guard: AuthGuard;
  let mockJwt: JwtService;

  beforeEach(() => {
    mockJwt = {
      verify: jest.fn(),
    } as unknown as JwtService;
    guard = new AuthGuard(mockJwt);
  });

  function mockContext(authHeader?: string): ExecutionContext {
    return {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: { authorization: authHeader },
        }),
      }),
    } as unknown as ExecutionContext;
  }

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should allow access with valid token', () => {
    (mockJwt.verify as jest.Mock).mockReturnValue({ userId: 1 });
    const context = mockContext('Bearer validtoken');
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should throw on invalid token', () => {
    (mockJwt.verify as jest.Mock).mockImplementation(() => {
      throw new Error('invalid token');
    });
    const context = mockContext('Bearer invalidtoken');

    expect(() => guard.canActivate(context)).toThrow(UnauthorizedException);
  });
});
