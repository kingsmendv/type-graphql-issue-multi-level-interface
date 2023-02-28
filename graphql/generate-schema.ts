import 'reflect-metadata';
import { buildSchemaSync } from 'type-graphql';
import { Container } from 'typedi';

import {
  QueryResolver
} from './resolvers';

buildSchemaSync({
  container: Container,
  resolvers: [QueryResolver],
  emitSchemaFile: true,
  validate: false,
});