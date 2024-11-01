import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post } from './entity/post.entity';

@Module({
  controllers: [PostController],
  providers: [PostService, Post],
})
export class PostModule {}
