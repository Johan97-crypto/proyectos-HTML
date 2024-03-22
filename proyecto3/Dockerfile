# Utiliza la imagen de node como base para construir la imagen de Docker
FROM node:16

# Establece el directorio de trabajo en /app dentro del contenedor
WORKDIR /app

# Copia el archivo package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto de los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto 3000 para que se pueda acceder a la aplicación desde fuera del contenedor
EXPOSE 3000

# Comando para ejecutar la aplicación cuando se inicie el contenedor
CMD ["npm", "start"]
#docker build -t nombre-imagen .
#docker run -p 3000:3000 nombre-imagen
