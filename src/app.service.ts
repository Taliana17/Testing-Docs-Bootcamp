import { Injectable } from '@nestjs/common';

/**
 * Root service of the application.
 * Provides basic application-level functionality, such as health checks or welcome messages.
 */
@Injectable()
export class AppService {

  /**
   * Returns a simple greeting message.
   * Often used as a basic health-check endpoint for the API.
   * @returns The string "Hello World".
   */
  getHello(): string {
    return 'Hello World!';
  }
}
