# Establece la imagen base para el frontend
FROM node:14 as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el package.json y el package-lock.json a la imagen
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del frontend al directorio de trabajo
COPY . .

# Construye los archivos estáticos del frontend
RUN npm run build

# Etapa de producción
FROM nginx:latest

# Copia los archivos estáticos del frontend a la imagen de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expone el puerto en el que se ejecuta Nginx
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
