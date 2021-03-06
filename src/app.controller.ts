import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
// import { Get, Controller, Res, Render } from '@nestjs/common';
// import { Response } from 'express';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private appService: AppService) {}

//   @Get()
//   root(@Res() res: Response) {
//     return res.render(
//       this.appService.getViewName(),
//       { message: 'Hello world!' },
//     );
//   }
// }
