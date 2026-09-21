---
title: "Cómo configuré el control parental en mi GL.iNet: horarios, filtros y AdGuard Home"
description: "Mi configuración real de control parental en un GL.iNet Flint 2: perfiles por dispositivo, horarios, filtros de contenido y una capa adicional de filtrado DNS con AdGuard Home."
published: 2026-09-21
category: "Guía técnica"
readingTime: "10 min"
draft: false
type: technical
relatedArticle: 4
level: intermedio
---

En el artículo sobre horarios, dispositivos y servicios contaba que, antes de empezar a tocar opciones, intenté responder a tres preguntas: **quién, cuándo y para qué**. Una vez tuve claro qué límites quería aplicar, llegó la parte técnica: convertir esas decisiones en reglas dentro del router.

En mi caso utilizo un **GL.iNet Flint 2 con firmware 4.9.1**. Esta guía no pretende decir que sea el único router válido ni que esta sea la configuración perfecta. Es simplemente la configuración que fui construyendo en casa y que me permite centralizar buena parte de los controles.

El objetivo era bastante sencillo: identificar los dispositivos que quería controlar, establecer horarios, limitar determinados servicios y contenidos y añadir una capa de filtrado DNS para toda la red. Para conseguirlo terminé combinando varias funciones del router.

## 1. Empezar por los perfiles de Control Parental

El punto de partida está en **Control de Flujo → Control Parental**. Aquí puedo crear perfiles y asignar uno o varios dispositivos a cada uno.

Cada perfil reúne las tres piezas que buscaba: **dispositivo, horario y filtro de contenido**. Esto me permite tener reglas distintas para la televisión, un ordenador u otros dispositivos sin aplicar las mismas restricciones a toda la casa.

![Perfiles de Control Parental configurados en el panel de administración de GL.iNet](/images/03-perfiles-control-parental-glinet.webp)

*Los perfiles permiten agrupar dispositivos y aplicar a cada uno sus propios horarios y filtros.*

Lo primero, por tanto, es identificar correctamente los dispositivos. Si en la lista aparecen nombres poco reconocibles, merece la pena dedicar unos minutos a saber qué es cada cosa antes de empezar a crear reglas.

## 2. Seleccionar el dispositivo y establecer el horario

Al crear una regla, el primer paso es seleccionar a qué dispositivo o dispositivos queremos aplicarla. Después podemos definir la llamada **hora de dormir**.

El nombre puede resultar algo limitado, porque en la práctica lo importante es decidir durante qué franja queremos restringir la conexión. En mi configuración utilizo esta función, por ejemplo, para impedir que determinados dispositivos tengan Internet durante la noche.

La ventaja es que la regla está en el router. No necesito configurar un horario diferente en cada juego, navegador o aplicación. Si después cambian las necesidades, puedo modificarlo desde un único sitio.

Esto no significa que el router decida las normas de casa. Es justo al contrario: **primero decidimos la norma y después utilizamos el router para ayudarnos a aplicarla**.

## 3. Filtrar servicios y contenidos

El siguiente paso del asistente permite establecer un **Filtro de Contenido**. Aquí GL.iNet ofrece categorías generales como contenido sexual, software malicioso o juego de azar, pero también permite bajar a servicios y aplicaciones concretas.

![Configuración de una regla de Control Parental con categorías y aplicaciones concretas](/images/06-regla-control-parental-glinet.webp)

*Además de categorías generales, podemos entrar en grupos como Juegos y seleccionar servicios concretos.*

Por ejemplo, dentro de la categoría de juegos aparecen plataformas y servicios individuales que podemos seleccionar. Esto permite hacer algo bastante más útil que simplemente cortar Internet: un dispositivo puede conservar la conexión para determinados usos y tener restringidos otros.

En mi caso intento no convertir esto en una colección interminable de reglas. Que el router permita seleccionar decenas de categorías y aplicaciones no significa que tengamos que bloquearlas todas. Cuanto más complejo sea el sistema, más difícil será mantenerlo y también entender qué está ocurriendo cuando algo deja de funcionar.

## 4. El Filtro de contenido del GL.iNet

Además de las reglas asociadas a los perfiles, el GL.iNet dispone de **Control de Flujo → Filtro de contenido**. En mi configuración tengo activado el filtrado de **adultos, juego de azar y software malicioso**.

![Filtro de contenido de GL.iNet con varias categorías de bloqueo activadas](/images/01-filtro-contenido-glinet.webp)

*En mi caso utilizo el filtro para adultos, juego de azar y software malicioso.*

Desde **Editar aplicación** se puede entrar en categorías más amplias como Educación, Reunión, Trabajo, páginas web, Juegos, Social/Vídeo/Entretenimiento o Compras, y seleccionar servicios concretos.

![Categorías disponibles en el filtro de contenido de GL.iNet](/images/02-categorias-filtro-glinet.webp)

*GL.iNet permite afinar el bloqueo por categorías y aplicaciones, aunque no es necesario activarlo todo.*

Esta parte permite afinar bastante la configuración, pero sigo aplicando la misma idea: **bloquear lo que tiene sentido bloquear, no activar opciones simplemente porque existen**.

En la propia pantalla del router se muestra también el número de bloqueos realizados. Es un dato útil para comprobar que el filtro está actuando, aunque no debe interpretarse automáticamente como el número de intentos deliberados de acceder a contenido inapropiado.

## 5. Añadir AdGuard Home como capa de filtrado DNS

Además de los controles anteriores, tengo activado **AdGuard Home**, que GL.iNet permite ejecutar directamente en el router.

![AdGuard Home activado desde el panel de administración de GL.iNet](/images/04-adguard-home-glinet.webp)

*AdGuard Home añade una capa de filtrado DNS gestionada desde el propio router.*

Aquí la protección funciona de otra manera. Los dispositivos realizan continuamente consultas DNS para averiguar a qué dirección deben conectarse cuando utilizan un dominio. AdGuard puede comparar esas consultas con listas de bloqueo e impedir la resolución de los dominios incluidos en ellas.

La ventaja para mí es clara: esta capa se gestiona desde el router y no necesito instalar un programa de filtrado DNS diferente en cada dispositivo.

En mi configuración tengo activadas dos listas: **AdGuard DNS filter** y **HaGeZi**. En las capturas que acompañan esta guía aparecen más de 181.000 reglas en la primera y más de 16.000 en la segunda.

![Listas de bloqueo DNS configuradas en AdGuard Home](/images/08-adguard-listas-dns.webp)

*Utilizo AdGuard DNS filter y HaGeZi como listas de bloqueo. Añadir más listas no significa necesariamente conseguir una protección mejor.*

Aquí tampoco aplicaría la filosofía de *cuantas más listas, mejor*. Añadir listas indiscriminadamente puede aumentar los falsos positivos y terminar bloqueando servicios que sí queremos utilizar. Prefiero saber qué listas tengo activadas y poder diagnosticar después un bloqueo.

## 6. Comprobar qué está bloqueando AdGuard

Una de las funciones que más útiles me parecen de AdGuard Home es el **Registro de consultas**.

Desde ahí puedo filtrar las peticiones bloqueadas y comprobar qué dominio se intentó resolver y qué lista produjo el bloqueo. Esto resulta especialmente útil cuando una página, una aplicación o un dispositivo deja de funcionar como esperaba.

![Registro de consultas bloqueadas en AdGuard Home](/images/09-adguard-registro-consultas.webp)

*El registro permite comprobar qué dominio se ha bloqueado y qué lista ha provocado el bloqueo.*

Antes de empezar a cambiar reglas al azar, puedo mirar el registro y comprobar si AdGuard está bloqueando algún dominio necesario.

En una de mis capturas, por ejemplo, aparecen consultas bloqueadas por HaGeZi. Eso permite verificar que la lista está actuando, pero no significa necesariamente que alguien haya intentado entrar conscientemente en esas páginas: muchas consultas se producen en segundo plano por aplicaciones, servicios, publicidad, seguimiento o telemetría.

## 7. Entender las estadísticas sin alarmarnos

El panel de AdGuard Home permite ver cuántas consultas DNS ha procesado y cuántas han sido bloqueadas. En la captura que hice durante la configuración aparecían **28.565 consultas DNS y 4.386 bloqueadas por filtros**, aproximadamente un 15 %.

![Panel de estadísticas de AdGuard Home con consultas DNS y bloqueos](/images/07-adguard-panel.webp)

*Las estadísticas ayudan a comprobar que el filtrado está funcionando, pero un bloqueo no equivale necesariamente a un intento de acceder a contenido peligroso.*

Ese porcentaje puede llamar bastante la atención, pero hay que interpretarlo correctamente. **4.386 bloqueos no significan 4.386 intentos de acceder a páginas peligrosas o inapropiadas.** Una parte importante puede corresponder a publicidad, rastreadores, telemetría y peticiones automáticas realizadas por los propios dispositivos y aplicaciones.

Para mí estas estadísticas sirven sobre todo para comprobar que el sistema está funcionando y detectar comportamientos que merece la pena investigar, no para convertir cada bloqueo en una alerta.

## 8. Control parental y AdGuard no hacen lo mismo

Esta distinción me parece importante. El **Control Parental del GL.iNet** me permite decidir qué dispositivos están sujetos a determinadas reglas, en qué horarios y qué servicios o categorías quiero limitar. **AdGuard Home**, en cambio, añade una capa de filtrado DNS basada en dominios y listas de bloqueo.

Se complementan, pero uno no sustituye al otro.

Además, en mi configuración actual el registro de AdGuard muestra las consultas como procedentes de **localhost (127.0.0.1)**. Eso significa que ese registro no me sirve, tal como está configurado ahora, para atribuir cada consulta a un dispositivo concreto. Lo utilizo como herramienta de filtrado y diagnóstico, no como un sistema para saber exactamente qué dispositivo originó cada petición.

## 9. ¿Y AstroWarp?

En mi configuración hay todavía otra pieza: **AstroWarp**. Lo utilizo para que determinados dispositivos salgan a Internet a través de un túnel y poder controlar mejor el camino que siguen para conectarse.

![Topología de un dispositivo utilizando AstroWarp en GL.iNet](/images/05-astrowarp-topologia-glinet.webp)

*AstroWarp añade otra capa a la configuración, pero su función es diferente a los horarios y filtros que hemos visto hasta aquí.*

Aquí ya entramos en otro problema diferente. No se trata únicamente de decidir horarios o bloquear categorías, sino de evitar que un dispositivo pueda utilizar una ruta alternativa que deje fuera parte de los controles que acabamos de configurar.

Por eso prefiero no mezclarlo todo en esta guía. La configuración de AstroWarp, la obligación de navegar a través del túnel y las formas de evitar que el dispositivo utilice otro camino merecen una explicación propia.

## La configuración final: varias capas sencillas

Después de todas estas opciones, mi configuración puede parecer más complicada de lo que realmente intento que sea. La idea de fondo sigue siendo bastante sencilla: **Control Parental** para decidir dispositivos, horarios y servicios; **Filtro de contenido del GL.iNet** para restringir determinadas categorías y aplicaciones; y **AdGuard Home** para añadir filtrado DNS mediante listas de bloqueo.

Y, en determinados dispositivos, una capa adicional que veremos más adelante.

No confío en que ninguna de ellas sea perfecta. De hecho, parte de este proyecto nació precisamente al descubrir que siempre pueden aparecer caminos que no habíamos previsto. Pero juntas permiten reducir bastante la exposición sin tener que instalar y mantener una solución diferente en cada dispositivo.

Y hay una última parte que considero imprescindible: **probar las reglas después de configurarlas**. Intentar acceder a algo que debería estar bloqueado, comprobar qué ocurre fuera del horario permitido y revisar los registros cuando algo no funciona.

Configurar una regla es fácil.

Saber si realmente está haciendo lo que creemos es otra historia. 😉
