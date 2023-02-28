import {
  Field,
  InterfaceType, ObjectType,
} from 'type-graphql';

@InterfaceType()
export abstract class Example {
  @Field(() => String)
  id!: string;
}

@InterfaceType( { implements: Example })
export abstract class SuperExample extends Example {
  @Field(() => String)
  somethingElse!: string;
}

@ObjectType({ implements: SuperExample })
export class SuperSuperExample extends SuperExample {}

@ObjectType({ implements: SuperExample })
export class SuperDuperExample extends SuperExample {
  constructor(somethingElse: string) {
    super();
    this.id = '123';
    this.somethingElse = somethingElse;
  }
}
