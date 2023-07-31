# Use uma imagem Node.js oficial como a base
FROM node:20

RUN mkdir /usr/src/angulartips

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/angulartips

RUN npm i -g @angular/cli

COPY . .

# Exponha a porta em que a aplicação está escutando (altere a porta 3000 para a porta correta)
EXPOSE 4200

RUN ls -a

RUN pwd

CMD ng serve --disable-host-check --proxy-config proxy.config.js --host 0.0.0.0 --port 4200




