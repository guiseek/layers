import { GraphQLDefinitionsFactory } from '@nestjs/graphql'
import { join } from 'path'

const definitionsFactory = new GraphQLDefinitionsFactory()
definitionsFactory.generate({
  typePaths: ['./libs/**/*.graphql'],
  path: join(process.cwd(), 'src/graphql.ts'),
  outputAs: 'class',
  emitTypenameField: true,
})
