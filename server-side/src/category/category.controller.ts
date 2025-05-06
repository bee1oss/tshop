import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Param,
	Post,
	Put,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { CategoryService } from './category.service'
import { Auth } from 'src/auth/decorators/auth.decirator'
import { CategoryDto } from './dto/category.dto'

@Controller('categories')
export class CategoryController {
	constructor(private readonly categoryService: CategoryService) {}

	@Auth()
	@Get('by-storeId/:storeId')
	async getByStoreId(@Param('storeId') storeId: string) {
		return this.categoryService.getByStoreId(storeId)
	}

	@Auth()
	@Get('by-id/:id')
	async getById(@Param('id') id: string) {
		return this.categoryService.getById(id)
	}

	@UsePipes(new ValidationPipe())
	@Auth()
	@HttpCode(200)
	@Post('/:storeId')
	async create(@Param('storeId') storeId: string, @Body() dto: CategoryDto) {
    return this.categoryService.create(storeId,dto)
  }

  @UsePipes(new ValidationPipe())
  @Auth()
  @HttpCode(200)
  @Put('/:id')
  async update(@Param('id') id:string,@Body() dto:CategoryDto){
    return this.categoryService.update(id,dto)
  }

  @Auth()
  @HttpCode(200)
  @Delete('/:id')
  async delete(@Param('id') id:string){
    return this.categoryService.delete(id)
  }

}
