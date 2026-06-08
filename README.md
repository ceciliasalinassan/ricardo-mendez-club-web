# Club Deportivo Ricardo Méndez V31

Corrección:
- Carga de imágenes reforzada.
- Las imágenes se comprimen automáticamente.
- Si Supabase está conectado, se suben al bucket `club-assets`.
- Si Supabase falla o no está conectado, quedan guardadas localmente como respaldo.
- Se agregan mensajes de éxito al cargar fixture, historia y presidentes.
- Se mantiene admin sin clave.

IMPORTANTE:
En Admin → Supabase:
1. Project URL: https://xzcbdyabzgwfoylipgco.supabase.co
2. Publishable Key: solo la key pública.
Nunca usar Secret Key.
