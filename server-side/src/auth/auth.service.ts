import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { hash } from 'argon2'
import { AuthDto } from './dto/auth.dto'


@Injectable()
export class AuthService {
	constructor(private readonly prisma: PrismaService) {}

	async getById(id: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				stores: true,
				favorites: true,
				orders: true
			}
		})
		return user
	}

	async getByEmail(email: string) {
		const user = await this.prisma.user.findUnique({
			where: {
				email
			},
			include: {
				stores: true,
				favorites: true,
				orders: true
			}
		})
		return user
	}
    
    async create(dto:AuthDto){
        return this.prisma.create(
            {
                data:{
                    name: dto.name,
                    email:dto.email,
                    password: await hash(dto.password)
                }
            }
        )
    }
}
