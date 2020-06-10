FROM node:12.13.0

ENV NODE_ENV production
ENV IN_K8S 1

USER node

COPY --chown=node:node package.json yarn.lock /home/node/code/
RUN cd /home/node/code && yarn install

ADD --chown=node:node . /home/node/code

RUN cd /home/node/code \
    && yarn sequelize db:migrate

WORKDIR /home/node/code

EXPOSE 8080

RUN echo 'alias semo="npx semo"' >> /home/node/.bashrc
RUN echo 'alias app="npx semo app"' >> /home/node/.bashrc

CMD ["pm2-docker", "deploy/env/production/pm2.yml"]
