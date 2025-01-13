# Utiliser l'image Nginx officielle comme image de base
FROM nginxinc/nginx-unprivileged

# Copier les fichiers HTML, CSS et images dans le dossier de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
