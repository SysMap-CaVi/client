# Define a imagem base
FROM node:14-alpine
  
  # Define o diretório de trabalho dentro do contêiner
WORKDIR /app
  
  # Copia o arquivo package.json e o package-lock.json
COPY package*.json ./
  
  # Instala as dependências do projeto
RUN npm install
  
  # Copia o resto dos arquivos do projeto
COPY . .
  
  # Define a porta do contêiner
EXPOSE 3000
  
  # Comando para iniciar o aplicativo
CMD ["npm", "start"]
