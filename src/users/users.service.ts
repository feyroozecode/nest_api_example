import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
    private users =
        [
            {
                "id": 1,
                "name": "Moussa",
                "email": "moussa@gmail.com",
                "role": "admin"
            },
            {
                "id": 2,
                "name": "Mohamed",
                "email": "mohamed@gmail.com",
                "role": "intern"
            },
            {
                "id": 3,
                "name": "Ahmed",
                "email": "ahmed@gmail.com",
                "role": "engineer"
            }
        ]

    findAll(role?: 'intern' | 'engineer' | 'admin'){
       if(role) {
           return this.users.filter(user => user.role === role); // Only return user with roles is passed
       }    
       return this.users;
    }

    findOne(id: number){
        return this.users.find(user => user.id === id); // +id converts string to number
    }


    /**
     * 
     * @param user 
     * @returns 
     */
    create(user: {name: string, email:string, role: 'intern' | 'engineer' | 'admin'}){
        const userByHeighestd = [...this.users].sort((a,b) => b.id - a.id)[0];
        
        // if user with the same name 
        if(this.users.find(u => u.name === user.name)) throw new Error('User already exists');
        const newUser = {
            id: userByHeighestd.id + 1,
            ...user
        }
        this.users.push(newUser);
        return newUser;
    }

    /**
     * 
     * @param id 
     * @param updatedUser 
     * @returns 
     */
    update(id: number, updatedUser: {name?:string, email?:string, role?: 'intern' | 'engineer' | 'admin'}){
        this.users = this.users.map(user => {
            if(user.id === id){
                return {
                    ...user,
                    ...updatedUser
                }
            }
            return user;
        })
        return this.findOne(id);
    }

    /**
     * 
     * @param id 
     * @returns 
     */
    delete(id: number){
        const removedUser = this.findOne(id);

        this.users = this.users.filter(user => user.id !== id);

        return removedUser;
    }
}