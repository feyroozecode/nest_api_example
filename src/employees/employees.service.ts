import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class EmployeesService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createEmployeeDto: CreateEmployeeDto) {
    return await this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll() {
    return await this.databaseService.employee.findMany();
  }

  async findOne(id: number) {
    return await this.databaseService.employee.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return await this.databaseService.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    return await this.databaseService.employee.delete({
      where: { id },
    });
  }
}
