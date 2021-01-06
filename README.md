# UDD Crisp Channels

Integración de canales Crisp en sitios UDD.

Consulta la disponibilidad de agentes de chat según los canales definidos en www.udd.cl y muestra o esconde el chat de forma acorde.

## Instalación

El método recomendado de instalación es usando npm o yarn, p.ej: `npm install https://github.com/bloom-ux/udd-crisp-channels.git`

## Utilización

Incluir el archivo `udd-crisp-channels.js` en el `<head>` de cada documento HTML donde podría mostrarse el chat, p. ej:

```html
<script src="/node_modules/@bloom-ux/udd-crisp-channels/udd-crisp-channels.js" async></script>
```

**Se recomienda** el uso de atributo `async` ya que permite una mejor performance y UX. Alternativamente, se puede utilizar `defer` (bueno en términos de performance pero ligeramente menos óptimo en términos de UX).
