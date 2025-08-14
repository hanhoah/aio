#!/bin/bash

# Farben für Ausgabe
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Aktuellen Branch bekommen
CURRENT_BRANCH=$(git symbolic-ref --short HEAD)

echo -e "${YELLOW}Starte Deployment für Branch: ${CURRENT_BRANCH}${NC}"

# Überprüfen, ob es ungespeicherte Änderungen gibt
if [[ -n $(git status -s) ]]; then
  echo -e "${YELLOW}Es gibt ungespeicherte Änderungen. Änderungen werden committet...${NC}"
  
  # Änderungen zum Staging hinzufügen
  git add .
  
  # Commit-Nachricht abfragen oder Standard verwenden
  read -p "Commit-Nachricht eingeben (oder Enter für Standard-Nachricht): " COMMIT_MSG
  COMMIT_MSG=${COMMIT_MSG:-"Update: Automatischer Commit vor Deployment"}
  
  # Commit erstellen
  git commit -m "$COMMIT_MSG"
fi

# Code auf Vercel deployen
echo -e "${YELLOW}Deploye Code auf Vercel...${NC}"

# Mit NPX Vercel ausführen (ohne Interaktion)
npx vercel --prod

# Git push ausführen
echo -e "${YELLOW}Pushe Änderungen zum Remote-Repository...${NC}"
git push origin $CURRENT_BRANCH

echo -e "${GREEN}Deployment abgeschlossen!${NC}"