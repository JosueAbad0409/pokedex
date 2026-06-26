import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TrainerModule } from './trainer/trainer.module';



@Module({
  imports: [PokemonModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-pokemon'),
    TrainerModule
  ],
})
export class AppModule {}
