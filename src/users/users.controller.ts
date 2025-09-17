import { Body, Controller, Delete, Get, Param, Post, Put, Query, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

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
    createUser(@Body() user: {name: string, email:string, role: 'intern' | 'engineer' | 'admin'}){
        return this.usersService.create(user);
    }

    // PUT      /users/:id    // update a user
    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() user: {name?:string, email?:string, role?: 'intern' | 'engineer' | 'admin'}){
       return this.usersService.update( id, user);
    }

    // DELETE   /users/:id    // delete a user
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number){
      return this.usersService.delete(id);
    }
    
}
