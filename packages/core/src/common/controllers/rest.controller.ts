import {
  Class,
  Context,
  Controller,
  Delete,
  Get,
  HttpResponseCreated,
  HttpResponseMethodNotAllowed,
  HttpResponseNotFound,
  HttpResponseNotImplemented,
  HttpResponseOK,
  Patch,
  Post,
  Put,
  ServiceManager
} from '../../core';
import { isObjectDoesNotExist } from '../errors';
import { IResourceCollection } from '../services';

@Controller()
export abstract class RestController {
  abstract collectionClass: Class<Partial<IResourceCollection>>;

  constructor(private services: ServiceManager) { }

  getQuery(ctx: Context): object {
    return {};
  }

  @Delete('/')
  delete() {
    return new HttpResponseMethodNotAllowed();
  }

  @Delete('/:id')
  async deleteById(ctx: Context) {
    const collection = this.services.get(this.collectionClass);
    if (!collection.deleteById) {
      return new HttpResponseNotImplemented();
    }

    try {
      return new HttpResponseOK(await collection.deleteById(ctx.user, ctx.request.params.id, {}));
    } catch (error) {
      if (isObjectDoesNotExist(error)) {
        return new HttpResponseNotFound();
      }
      throw error;
    }
  }

  @Get('/')
  async get(ctx: Context) {
    // schema and id
    // hooks
    const collection = this.services.get(this.collectionClass);
    if (!collection.find) {
      return new HttpResponseNotImplemented();
    }

    const query = this.getQuery(ctx);
    return new HttpResponseOK(await collection.find(ctx.user, { query }));
  }

  @Get('/:id')
  async getById(ctx: Context) {
    const collection = this.services.get(this.collectionClass);
    if (!collection.findById) {
      return new HttpResponseNotImplemented();
    }

    try {
      return new HttpResponseOK(await collection.findById(ctx.user, ctx.request.params.id, {}));
    } catch (error) {
      if (isObjectDoesNotExist(error)) {
        return new HttpResponseNotFound();
      }
      throw error;
    }
  }

  @Patch('/')
  patch() {
    return new HttpResponseMethodNotAllowed();
  }

  @Patch('/:id')
  async patchById(ctx: Context) {
    const collection = this.services.get(this.collectionClass);
    if (!collection.modifyById) {
      return new HttpResponseNotImplemented();
    }

    try {
      return new HttpResponseOK(await collection.modifyById(
        ctx.user, ctx.request.params.id , ctx.request.body, {}
      ));
    } catch (error) {
      if (isObjectDoesNotExist(error)) {
        return new HttpResponseNotFound();
      }
      throw error;
    }
  }

  @Post('/')
  async post(ctx: Context) {
    const collection = this.services.get(this.collectionClass);
    if (!collection.create) {
      return new HttpResponseNotImplemented();
    }

    return new HttpResponseCreated(await collection.create(ctx.user, ctx.request.body, {}));
  }

  @Post('/:id')
  postById() {
    return new HttpResponseMethodNotAllowed();
  }

  @Put('/')
  put() {
    return new HttpResponseMethodNotAllowed();
  }

  @Put('/:id')
  async putById(ctx: Context) {
    const collection = this.services.get(this.collectionClass);
    if (!collection.updateById) {
      return new HttpResponseNotImplemented();
    }

    try {
      return new HttpResponseOK(await collection.updateById(
        ctx.user, ctx.request.params.id, ctx.request.body, {}
      ));
    } catch (error) {
      if (isObjectDoesNotExist(error)) {
        return new HttpResponseNotFound();
      }
      throw error;
    }
  }

}