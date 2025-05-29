# 1. Node.js 빌드 단계
FROM node:18 AS builder

WORKDIR /app

# package.json과 lock 파일 복사
COPY package*.json ./

# 의존성 설치
RUN npm install

# 소스코드 복사
COPY . .

# React 앱 빌드
RUN npm run build


# 2. NGINX 배포용 단계
FROM nginx:stable-alpine

# 빌드된 파일을 nginx 디렉토리에 복사
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
