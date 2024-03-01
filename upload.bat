chcp 65001

@echo off

:: 设置 React 项目目录
set project_dir=E:\newBlog\orangeBlog\weiBlog

:: 进入项目目录 
cd %project_dir%

:: 构建生产环境代码
@REM call yarn build

:: 删除构建目录
:: if exist build rd /s /q build

:: 重新安装依赖
:: call npm rebuild 

:: 升级 Node.js 版本(以 v12.14.1 为例)
:: call npm install -g n
:: call n 12.14.1 

:: 升级 React 脚手架(还以 v3.4.1 为例)
:: call npm install -g react-scripts@3.4.1 

:: ssh root@129.211.220.139

scp -r ./.next ./public ./data ./package.json ./next.config.js root@101.43.63.71:/home/blog.7miaoyu.com/
:: scp -r  ./package.json ./Dockerfile ./docker-compose.yaml ./.dockerignore dist/* .config/* root@101.43.63.71:/home/remote

@REM REM 获取当前日期和时间
@REM set datetime=%date:~3,4%%date:~8,2%%date:~11,2%
@REM echo 当前时间：%datetime%

@REM REM 压缩文件
@REM bz.exe c %datetime%.zip ./dist/

@REM REM 移动文件
@REM set source_folder=E:\myProject\remoteControl\control_server
@REM set destination_folder=E:\myProject\content_backup

@REM set file_name=%datetime%.zip

@REM move "%source_folder%\%file_name%" "%destination_folder%\remote_back_%file_name%"

@REM echo "%source_folder%\%file_name%"已成功移动到"%destination_folder%\"backend_%file_name%"文件夹。

:: 暂停
pause