import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { postDto } from './dto/post.dto';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @ApiOperation({ summary: 'Create Post' })
  @ApiResponse({ status: 201, type: 'Created' })
  @Post()
  @UsePipes(new ValidationPipe())
  async newPost(@Body() dto: postDto) {
    return this.postService.new(dto);
  }

  @ApiOperation({ summary: 'get Posts' })
  @ApiResponse({ status: 200, type: [Post] })
  @Get()
  async get() {
    return this.postService.get();
  }

  @ApiOperation({ summary: 'Delete All Posts' })
  @ApiResponse({ status: 200, type: 'Deleted' })
  @Delete()
  async delete() {
    return this.postService.delete();
  }
}
