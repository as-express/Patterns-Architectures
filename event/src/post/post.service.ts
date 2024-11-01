import { Injectable } from '@nestjs/common';
import { Post } from './entity/post.entity';
import { postDto } from './dto/post.dto';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class PostService {
  constructor(
    private post: Post,
    private eventEmitter: EventEmitter2,
  ) {}

  async new(dto: postDto) {
    this.post.posts.push(dto);
    this.post.postCount += 1;

    const title = 'Created new post in server';
    this.eventEmitter.emit('post.created', { title });

    return 'Created';
  }

  async get() {
    return this.post;
  }

  async delete() {
    this.post.postCount = 0;
    this.post.posts = [];

    const title = 'The all posts is deleted';
    this.eventEmitter.emit('post.deleted', { title });

    return 'Deleted';
  }
}
