@echo off
set NODE_EXTRA_CA_CERTS=C:\Users\ddoan\Project\certificate\cacert.pem
eas update --branch production --message "Fix UI bug and update content"
@REM eas update:list --branch production
pause
