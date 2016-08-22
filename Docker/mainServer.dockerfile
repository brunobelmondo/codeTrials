FROM node
COPY CodeTrials .
RUN npm install
EXPOSE 3000
CMD npm start
