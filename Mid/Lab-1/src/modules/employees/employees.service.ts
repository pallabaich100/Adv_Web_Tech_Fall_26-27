
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Employee } from "./employee.entity";

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  create(data: Partial<Employee>) {
    const employee = this.employeeRepository.create(data);
    return this.employeeRepository.save(employee);
  }

  findAll() {
    return this.employeeRepository.find({
      select: [
        "id",
        "name",
        "email",
        "phone",
        "age",
        "yearsOfWorking",
      ],
    });
  }

  async findOne(id: number) {
    const employee = await this.employeeRepository.findOne({
      where: { id },
      select: [
        "id",
        "name",
        "email",
        "phone",
        "age",
        "yearsOfWorking",
      ],
    });

    if (!employee) {
      throw new NotFoundException("Employee not found");
    }

    return employee;
  }

  async update(id: number, data: Partial<Employee>) {
    await this.findOne(id);
    await this.employeeRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.employeeRepository.delete(id);
    return { message: "Employee deleted successfully" };
  }
}

