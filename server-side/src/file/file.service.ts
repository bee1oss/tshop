import { Injectable } from '@nestjs/common'
import { FileResponse } from './file.interface'
import { writeFile, ensureDir } from 'fs-extra'
import { path } from 'app-root-path'

@Injectable()
export class FileService {
	async saveFiles(files: Express.Multer.File[], folder: string = 'products') {
		const uploadedFolder = `${path}/uploads/${folder}`

		await ensureDir(uploadedFolder)

		const resopse: FileResponse[] = await Promise.all(
			files.map(async file => {
				const originalName = `${Date.now()}-${file.originalname}`

				await writeFile(
					`${uploadedFolder}/${originalName}`,
					file.buffer
				)

				return {
					url: `/uploads/${folder}/${originalName}`,
					name: originalName
				}
			})
		)
		return resopse
	}
}
