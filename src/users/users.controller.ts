import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')   // /users
export class UsersController {
     
    //GET      /users         // get all users
    @Get()
    findAll(@Query('/role') role?: 'intern' | 'engineer' | 'admin'){
        return [];
    }

    // GET interns  need to be before any dynamic routes, example of importes route ORDER
    @Get('interns')
    findAllInterns(){
        return [];
    }

    //GET      /users/:id    // get one user
    @Get(':id')
    findOne(@Param('id') id: string){
        return{ id } ;
    }


    //POST     /users        // create a user
    @Post()
    createUser(@Body() user: {}){
        return user ;
    }

    // PUT      /users/:id    // update a user
    @Put(':id')
    update(@Param('id') id: string){
        return{
            "message": "user with id: " + id + " updated successfully",
            
        } ;
    }

    // DELETE   /users/:id    // delete a user
    @Delete(':id')
    delete(@Param('id') id: string){
        return {
            "message": "user with id: " + id + " deleted successfully",   
        }
    }
    
   
}
