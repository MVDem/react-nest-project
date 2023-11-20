import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users.service';
import { User } from '../users.model';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(userDto: LoginUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
    generateToken(user: User): Promise<{
        token: string;
    }>;
    private validateUser;
}
