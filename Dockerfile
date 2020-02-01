FROM node
MAINTAINER pea3nut "626954412@qq.com"
ENV PORT=80

RUN mkdir /short-night-homepage
COPY . /short-night-homepage/

WORKDIR /short-night-homepage
RUN rm -rf /short-night-homepage/node_modules
RUN npm install --production


EXPOSE 80

ENTRYPOINT ["npm","start"]
