#!/bin/bash

# Farben für Ausgabe
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Füge Deploy-Alias zur .bashrc hinzu...${NC}"

# Pfad zum aktuellen Verzeichnis
CURRENT_DIR=$(pwd)

# Prüfen, ob der Alias bereits existiert
if grep -q "alias deploy-aio=" ~/.bashrc; then
  echo -e "${YELLOW}Alias existiert bereits. Wird aktualisiert...${NC}"
  # Entferne den alten Alias
  sed -i '/alias deploy-aio=/d' ~/.bashrc
fi

# Füge den neuen Alias hinzu
echo "alias deploy-aio='cd $CURRENT_DIR && ./deploy.sh'" >> ~/.bashrc

echo -e "${GREEN}Alias 'deploy-aio' wurde zur .bashrc hinzugefügt!${NC}"
echo -e "${YELLOW}Bitte führen Sie 'source ~/.bashrc' aus oder starten Sie ein neues Terminal, um den Alias zu aktivieren.${NC}"