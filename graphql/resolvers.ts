import {
  Query,
  Resolver,
} from 'type-graphql';
import { Example, SuperDuperExample, SuperSuperExample } from './types'

@Resolver()
export class QueryResolver {
  constructor() {}

  @Query(() => Example)
  async getExample(
  ): Promise<Example> {
    return new SuperSuperExample()
  }

  @Query(() => SuperDuperExample)
  async getSuperExample(
  ): Promise<Example> {
    return new SuperDuperExample('hello')
  }
}
