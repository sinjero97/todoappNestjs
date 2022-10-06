import { Injectable, NotFoundException } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [{id: 1,name: "hi", age: 10, breed: ""},{id: 2,name: "yyyy", age: 10, breed: ""}];

  create(cat: Cat) {
    cat.id = this.cats.length+1;
    this.cats.push(cat);
    console.log(cat);
    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findById(id: number): any {
    console.log(id);
    const catIndex = this.cats.find(elem => elem.id === +id);
    console.log(catIndex);
    if (catIndex === undefined) {
      throw new NotFoundException();
    }
    return catIndex;
  }

  delete(id: number): any {
    const index = this.cats.findIndex(elem => elem.id === +id);
    if (index === -1) {
      throw new NotFoundException();
    }
    this.cats.splice(index);
    return { message: 'Todo Deleted' };
  }

  update(id: number, name: string, age: number, breed: string): any {
    const index = this.cats.findIndex(elem => elem.id === +id);
    if (index === -1) {
      throw new NotFoundException();
    }
    const singleCat = this.cats[index];
    if (name) {
      singleCat.name = name;
    }
    if (age) {
      singleCat.age = age;
    }
     else if (breed) {
      singleCat.breed = breed;
    }
    this.cats[index] = singleCat
    return { message: 'Cat Updated' };
  }


}
