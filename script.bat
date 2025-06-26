@ECHO OFF

:: Vérification des variables
ECHO %date% - %time:~0,5% --- VERIFICATION DES VARIABLES >> script.log
IF NOT EXIST config.bat (
    ECHO Le fichier de configuration config.bat est manquant. Veuillez le créer avant d'exécuter ce script. >> script.log
    EXIT /B 1
)
call config.bat

IF NOT EXIST %CSVFOLDER%file.csv (
    ECHO %date% - %time:~0,5% Le dossier d'installation de StreamerBot est mal défini ou le fichier file.csv est manquant. >> script.log
    EXIT /B 1
)
IF NOT EXIST %GITEXE% (
    ECHO Le dossier GIT est mal défini ou le fichier git.exe est manquant. >> script.log
    EXIT /B 1
)

IF NOT EXIST %PROJECTFOLDER% (
    ECHO Le dossier du projet est mal défini >> script.log
    EXIT /B 1
)

ECHO %date% - %time:~0,5% --- COPIE DU CSV >> script.log
COPY /Y %CSVFOLDER%file.csv %PROJECTFOLDER%data\test.csv >> script.log
ECHO %date% - %time:~0,5% --- MISE A JOUR GIT >> script.log
CD /D %PROJECTFOLDER%
%GITEXE% add data\test.csv >> script.log
%GITEXE% commit -m "Synchro %date% - %time:~0,5%" >> script.log
%GITEXE% push >> script.log
ECHO %date% - %time:~0,5% --- FIN DU SCRIPT >> script.log