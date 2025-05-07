import { Injectable } from '@nestjs/common'
import path from 'path'
import { FileResponse } from './file.interface'
import { writeFile, ensureDir } from 'fs-extra'

@Injectable()
export class FileService {
	async saveFiles(files: Express.Multer.File[], folder: string = 'products') {
		const uploadFolder = `${path}/uploads/${folder}`

		await ensureDir(uploadFolder)

		const resopse: FileResponse[] = await Promise.all(
			files.map(async file => {
				const originalName = `${Date.now()}-${file.originalname}`

				await writeFile(`${uploadFolder}/${originalName}`, file.buffer)

				return {
					url: `/uploads/${folder}/${originalName}`,
					name: originalName
				}
			})
		)
		return resopse
	}
}
