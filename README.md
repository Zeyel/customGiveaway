# CONTEXTE
Projet qui traite un csv récupéré en dehors, s'il est différent de celui du repository git, le synchronise et le pousse.

Interface de visualisation du csv déployé en GitHub Pages

# INSTALLATION POUR WINDOWS
- **SANS GIT INSTALLE**
    - Créer un dossier utils à la racine du projet
    - Télécharger [Git.Portable](https://github.com/git-for-windows/git/releases/download/v2.50.0.windows.1/PortableGit-2.50.0-64-bit.7z.exe) et l'inclure dans le dossier utils
    - Extraire l'executable Git en double cliquant sur le fichier téléchargé
- **AVEC GIT INSTALLÉ**
    - Simplement remplir la variable `GITEXE=` avec la valeur `git`

# PARAMETRAGE

- Remplir le fichier `config.bat` avec les informations demandées
```bat
set PROJECTFOLDER=path/to/project/
set GITEXE=path/to/git_portable/bin/git.exe
set CSVFOLDER=path/to/csvfileToCopyFolder
```

# COMMENTAIRES

Automatisation du projet non inclus dans cette documentation