# NestJS için temel imaj
FROM node:18

# Uygulama dizinine geç
WORKDIR /app

# Bağımlılık dosyalarını kopyala
COPY package*.json ./

# Bağımlılıkları yükle
RUN npm install

# Kodları kopyala
COPY . .

# Prisma client'i üret (optional: build sonrası da olabilir)
RUN npx prisma generate

# Uygulamayı build et (isteğe bağlı)
RUN npm run build

# Uygulama başlat
CMD ["npm", "run", "start:dev"]
