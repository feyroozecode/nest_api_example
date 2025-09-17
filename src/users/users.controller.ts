import { Body, Controller, Delete, Get, Param, Post, Put, Query, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';

@Controller('users')   // /users
export class UsersController {
     
    // constructor
    constructor(private readonly usersService: UsersService){}

    //GET      /users         // get all users
    @Get()
    findAll(@Query('/role') role?: 'intern' | 'engineer' | 'admin'){
        return this.usersService.findAll(role);
    }

    // GET interns  need to be before any dynamic routes, example of importes route ORDER
    @Get('interns')
    findAllInterns(){
        return this.usersService.findAll('intern');
    }

    //GET      /users/:id    // get one user
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number){
        return this.usersService.findOne(id);
    }

    //POST     /users        // create a user
    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto){
        return this.usersService.create(createUserDto);
    }

    // PUT      /users/:id    // update a user
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto: UpdateUserDto){
       return this.usersService.update( id, updateUserDto);
    }

    // DELETE   /users/:id    // delete a user
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
      return this.usersService.delete(id);
    }
    
}
