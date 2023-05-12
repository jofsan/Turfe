#!/bin/bash

#  mensagem commit
if [ -z "$1" ]
  then
    echo "mensagem para o commit."
    exit 1
fi

# fazer commit
git add .
git commit -m "$1"

# Faz o push
git push

echo "Commit concluído e alterações enviadas para o Github."
