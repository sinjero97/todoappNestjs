import { Controller, Get, Req, Post, Header, Param, Body, Query, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { ListAllEntities } from './list-cat.dto';
import { UpdateCatDto } from './update-cat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Post()
    async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
    }
    
    @Get()
    async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<any> {
        return this.catsService.findById(id);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<any> {
        return this.catsService.delete(id);
    }

    @Put(':id')
    async update(
        @Param('id') id: number,
        @Body() updateCatDto: UpdateCatDto
    ): Promise<any> {
        return this.catsService.update(id, updateCatDto.name, updateCatDto.age, updateCatDto.breed);
    }
}
