import { Body, Controller, Get, Post } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    @Get('/')
    GetAllBoard(): Board[] {
        return this.boardsService.getAllBorad();
    }

    @Post()
    createBoard(
        @Body('title') title: string,
        @Body('description') description: string
    ): Board {
        return this.boardsService.CreateBoard(title, description);

    }
}
