import { Module } from '@nestjs/common';
import { TrainerService } from './trainer.service';
import { TrainerController } from './trainer.controller';
import { PokemonModule } from 'src/pokemon/pokemon.module';

@Module({
  imports: [
    PokemonModule, 
  ],
  controllers: [TrainerController],
  providers: [TrainerService],
})
export class TrainerModule {}