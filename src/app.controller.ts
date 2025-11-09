import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Root controller for the application.
 * Provides the main health-check or welcome endpoint.
 */
@Controller()
export class AppController {

  /**
   * Initializes the controller with the AppService dependency.
   * @param appService - Service that provides the welcome message.
   */
  constructor(private readonly appService: AppService) {}

  /**
   * Returns a welcome message from the application.
   * Used as a basic health-check or root enpoint.
   * @returns A string greeting message.
   */
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}