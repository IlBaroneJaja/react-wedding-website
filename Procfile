web: cd /app/client && \
echo "=== Current Working Directory (Before) ===" && \
pwd && \
echo "=== Changing to client directory ===" && \
echo "=== Installing client dependencies ===" && \
npm install && \
echo "=== Running client build ===" && \
npm run build && \
cd /app/server && \
echo "=== Current Working Directory (After) ===" && \
pwd && \
echo "=== Installing server dependencies ===" && \
npm install && \
echo "=== Starting server ===" && \
npm start
