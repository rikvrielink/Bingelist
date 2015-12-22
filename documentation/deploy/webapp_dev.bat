@ECHO OFF
@cd ../../webapp
ECHO Running 'npm install'
call npm install
ECHO Running 'bower install'
call bower install
ECHO Running 'grunt develop'
@grunt develop
pause
