# 使用 Node.js 作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制前端代码到工作目录
COPY . .

# 安装依赖并构建项目
RUN npm install && npm run build

# 使用 Nginx 作为服务器
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
