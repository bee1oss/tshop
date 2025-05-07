import { ArrayMinSize, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProductDto {
	@IsString({
		message: 'title is nessecary'
	})
	@IsNotEmpty({
		message: 'title not be a empty'
	})
	title: string

	@IsString({
		message: 'description is nessecary'
	})
	@IsNotEmpty({
		message: 'description is not be a empty'
	})
	description: string

	@IsNumber(
		{},
		{
			message: 'Price is number'
		}
	)
	@IsNotEmpty({
		message: 'Price is not be a empty'
	})
	price: number

	@IsString({
		message: 'Add at least one photo',
		each: true
	})
	@ArrayMinSize(1, {
		message: 'Add at least one photo'
	})
	@IsNotEmpty({
		each: true,
		message: 'path for photo cannot be empty'
	})
	images: string[]

	@IsString({
		message: 'category is nessecary'
	})
	@IsNotEmpty({
		message: 'ID category cannot be empty'
	})
	categoryId: string

	@IsString({
		message: 'color os nessecary'
	})
	@IsNotEmpty({
		message: 'ID color cannot be empty'
	})
	colorId: string
}
