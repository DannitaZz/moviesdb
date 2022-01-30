FROM node:16
WORKDIR /home/Movies/
ADD ./front/ ./front/
ADD ./back/ ./back/
RUN cd ./front/ && npm install
RUN cd ./back/ && npm install
RUN cd ./front/ && npm run build
RUN cp -R ./front/build/ ./back/build
EXPOSE 3000
CMD cd ./back/ && npm start

# construir imagen:
# docker build -t movies .
# ejecturar contenedor:
# docker run -p 3000:3000 movies 