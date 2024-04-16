// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { StudentsService } from 'src/students/students.service';
import { TeacherService } from 'src/teachers/teachers.service';

@Injectable()
export class AuthService {
  constructor(
    private studentsService: StudentsService,
    private jwtService: JwtService,
    private teachersService: TeacherService,
  ) {}

  //   async validateUser(username: string, password: string): Promise<any> {
  //     // Here you should validate your user from the database
  //     const mockUsername = 'admin';
  //     const mockPassword = await bcrypt.hash('password', 10); // Hashed password

  //     if (
  //       username === mockUsername &&
  //       (await bcrypt.compare(password, mockPassword))
  //     ) {
  //       return { userId: 1, username: mockUsername };
  //     }

  //     throw new UnauthorizedException();
  //   }

  async loginStudent(user: any) {
    const student = await this.studentsService.logIn(
      user.body.email,
      user.body.password,
    );
    console.log(student);
    const payload = { email: student.email, sub: student.id, role: 'student' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  async loginTeacher(user: any) {
    const teacher = await this.teachersService.logIn(
      user.body.email,
      user.body.password,
    );
    console.log(teacher);
    const payload = { email: teacher.email, sub: teacher.id, role: 'teacher' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
