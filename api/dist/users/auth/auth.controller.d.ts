import { AuthService } from './auth.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(userDto: LoginUserDto): Promise<{
        token: string;
    }>;
    registration(userDto: CreateUserDto): Promise<{
        token: string;
    }>;
}
