import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'

import { upperDirectiveTransformer } from './common/directives/upper-case.directive'
import { CatsModule } from './cats/cats.module'
import { DogsModule } from './dogs/dogs.module'
import { environment } from './envs/env'

console.log(environment);


@Module({
  imports: [
    CatsModule,
    DogsModule,
    TypeOrmModule.forRoot(environment.db),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      transformSchema: (schema) => upperDirectiveTransformer(schema, 'upper'),
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
