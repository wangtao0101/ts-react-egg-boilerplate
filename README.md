
yarn build
打包整个server文件夹

server/app/sql有数据库文件 数据库名i18n

cd server
yarn start
yarn stop
port 7001

nginx转发到 /i18n/即可
```
location /i18n/ {
    proxy_redirect off;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    proxy_set_header X-Forwarded-Proto https;

    proxy_pass http://xxxxxx/i18n/;
}
```