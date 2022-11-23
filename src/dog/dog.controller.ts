import { Body,Controller, Post } from '@nestjs/common';
//import { create } from 'domain';
import { createDogDto } from './Dto/create-dog.dto';

@Controller('dog')
export class DogController {
    @Post()
    async createDog(@Body() createdog:createDogDto){
        return `This name of the dog is ${createdog.name}`;
    }
}
