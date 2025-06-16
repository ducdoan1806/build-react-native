@echo off
set NODE_EXTRA_CA_CERTS=C:\Users\ddoan\Project\certificate\cacert.pem
@REM eas build
eas build -p android --profile production
pause
