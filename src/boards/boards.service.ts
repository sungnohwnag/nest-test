import { Injectable } from '@nestjs/common';

@Injectable()
export class BoardsService {
  private boards = [];
  getAllBorad() {
    return this.boards;
  }
}
