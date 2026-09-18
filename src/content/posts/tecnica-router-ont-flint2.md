---
title: "Guía técnica: cómo convertí el router en el punto de control de Internet en casa"
description: "La evolución real de mi red: del router de la operadora a una ONT independiente y un Flint 2 como único punto de salida, incluyendo la clonación de la MAC."
published: 2026-09-18
category: "Guía técnica"
readingTime: "12 min"
draft: false
---

> **Nivel: intermedio**  
> Esta guía describe la solución que terminé utilizando en mi propia red. No pretende ser una configuración universal ni significa que todas las familias necesiten llegar a este nivel.

En el artículo sobre el router expliqué una idea bastante sencilla: si varios dispositivos utilizan la misma conexión para salir a Internet, el router puede convertirse en un buen lugar para aplicar una parte de nuestras medidas de protección.

La teoría era sencilla. Conseguir que **todos los caminos hacia Internet pasaran realmente por ese router** fue algo más complicado.

Mi configuración actual no nació de una vez. Fui modificándola a medida que encontraba caminos que permitían evitar las restricciones que había establecido. Y algunos eran sorprendentemente sencillos.

## 1. El punto de partida: el router de la operadora

Mi primera opción fue aprovechar el router que ya tenía instalado por la operadora.

Había además una razón práctica importante: **la fibra óptica llegaba directamente a ese equipo**. No tenía una ONT independiente que separase la terminación de fibra del router.

Por tanto, no podía retirar simplemente el equipo de la operadora y conectar otro router en su lugar.

![Punto de partida de mi red doméstica con el router de la operadora](/images/router1.png)

*El punto de partida: el equipo de la operadora concentraba la conexión de fibra, el WiFi y las conexiones Ethernet de la vivienda.*

Mi primera idea fue mantener ese router para recibir la fibra, desactivar su WiFi y conectar detrás el GL.iNet Flint 2, donde aplicaría las restricciones.

Sobre el papel parecía una solución bastante razonable. El problema es que el router antiguo seguía formando parte de la red y, con él, seguían existiendo caminos para acceder a Internet sin pasar por las reglas del GL.iNet.

## 2. El problema no era solo el WiFi

Una de las primeras medidas que tomé fue desactivar el WiFi del router de la operadora. De esta forma, los dispositivos debían utilizar la red inalámbrica del Flint 2 y pasar por las reglas que había configurado.

Pero observé algo muy sencillo: **el router de la operadora tenía un botón físico que permitía volver a activar el WiFi**.

Mi hijo descubrió que podía pulsarlo y recuperar la red inalámbrica anterior. Al conectarse a ella, el tráfico volvía a salir directamente por el router de la operadora y las restricciones configuradas en el GL.iNet dejaban de intervenir.

No había hecho nada especialmente técnico. No había modificado configuraciones ni vulnerado ninguna contraseña. Simplemente había encontrado otro camino.

Y había otro todavía más sencillo: **las tomas de red de la casa**.

## 3. Las tomas Ethernet también evitaban el punto de control

En mi casa tengo tomas Ethernet en distintas habitaciones. Son muy cómodas, pero en aquella primera configuración seguían conectadas al router de la operadora.

Eso significaba que bastaba con conectar un ordenador por cable a una de esas tomas para obtener acceso a Internet sin pasar por el Flint 2.

![Primer montaje con el GL.iNet conectado al router de la operadora y caminos alternativos por WiFi y Ethernet](/images/router2.png)

*Mi primera configuración con el GL.iNet detrás del router de la operadora. Aunque el Flint 2 aplicaba las restricciones a los dispositivos conectados a él, el router antiguo seguía ofreciendo caminos alternativos: su WiFi podía reactivarse físicamente y las tomas Ethernet de la vivienda seguían conectadas directamente a él.*

Esta fue una de las lecciones más útiles del proyecto:

> **No basta con proteger el camino que esperamos que utilicen. También debemos comprobar qué otros caminos siguen disponibles.**

En realidad tenía varias carreteras hacia Internet y estaba colocando los controles solamente en una de ellas.

## 4. Cambiar el planteamiento: un único punto de salida

Llegados a este punto decidí cambiar la arquitectura.

Mi objetivo pasó a ser muy concreto:

> **WiFi o cable, las conexiones de casa debían pasar por el router donde yo aplicaba las reglas.**

Para conseguirlo necesitaba retirar el router de la operadora del recorrido. Pero primero tenía que resolver un problema: la fibra llegaba directamente a ese equipo.

Ahí entra la ONT.

## 5. Separar la fibra del router

Una **ONT** es, simplificando mucho, el dispositivo que termina la conexión de fibra óptica y la convierte en una conexión Ethernet que podemos entregar a nuestro router.

Conseguí una ONT independiente y separé las dos funciones que antes realizaba el equipo de la operadora.

La nueva arquitectura quedó así:

![Situación final con ONT independiente y GL.iNet Flint 2 como router principal](/images/router3.png)

*La instalación final: la fibra termina en una ONT independiente y el GL.iNet Flint 2 se convierte en el router principal. Tanto el WiFi como las tomas Ethernet de la vivienda quedan detrás del mismo punto de control.*

Este cambio era mucho más importante que simplemente sustituir un router por otro.

Ahora **el Flint 2 se convertía realmente en el punto central de la red**.

Ya no existía el WiFi del router anterior que pudiera volver a activarse y las tomas Ethernet de la vivienda también quedaban detrás del Flint 2.

Había eliminado los dos caminos alternativos que había encontrado.

## 6. La ONT también necesita su configuración

Conectar físicamente una ONT a la fibra no significa necesariamente que vaya a funcionar sin más.

En mi caso necesité configurar en ella el parámetro de autenticación de la ONT que utilizaba mi conexión de MásMóvil.

Ese dato lo obtuve de la configuración del router original y lo introduje en la ONT independiente para que pudiera registrarse correctamente en la red.

No publico esa contraseña porque es un dato propio de mi línea. Además, este procedimiento puede variar según la operadora y el equipo utilizado.

Una vez configurada correctamente la ONT, la fibra quedaba terminada en ese pequeño equipo y podía entregar la conexión mediante Ethernet al Flint 2.

Pero todavía faltaba un detalle.

## 7. El operador no asignaba una dirección IP al nuevo router

Con la ONT funcionando y el Flint 2 conectado, la conexión todavía no quedó operativa inmediatamente.

El nuevo router no recibía una dirección IP de la operadora.

En mi instalación, la solución fue hacer que el Flint 2 presentara en su puerto WAN **la misma dirección MAC que utilizaba el router anterior**.

La dirección MAC es un identificador de una interfaz de red. Sin entrar más de lo necesario, podemos imaginarla como una especie de matrícula del puerto de red.

El Flint 2 permite utilizar una dirección diferente de la que trae de fábrica mediante la función **MAC Clone**.

En mi caso el recorrido en la interfaz fue:

**Network → Ethernet Port → WAN → MAC Mode → Clone**

Introduje la dirección MAC del router antiguo y apliqué el cambio.

Después de hacerlo, **la operadora comenzó a asignar una dirección IP al Flint 2 y la conexión a Internet empezó a funcionar con normalidad**.

> **Importante:** no comparto datos como la contraseña de la ONT o la dirección MAC de mis equipos. Si necesitas realizar una configuración similar, debes obtener y utilizar exclusivamente los datos de tu propia conexión.

## 8. Comprobar la arquitectura, no solo que Internet funciona

Una vez realizados los cambios, no me limité a comprobar que podía abrir una página web.

Quería verificar que la arquitectura hacía realmente lo que pretendía.

Ya no debía existir un router anterior proporcionando una segunda red WiFi o una conexión Ethernet alternativa. Tanto los dispositivos inalámbricos como las tomas de red de la vivienda debían quedar detrás del Flint 2.

Ese era realmente el objetivo de toda esta modificación.

## 9. Qué conseguí con este cambio

El resultado no fue simplemente tener un router diferente.

Conseguí algo que para el proyecto era mucho más importante: **un único punto desde el que podía gestionar buena parte de la salida a Internet de la casa**.

Eso me permitía posteriormente identificar dispositivos, establecer horarios, aplicar filtrado y añadir nuevas reglas sin que bastara con conectarse a otra WiFi o utilizar otra toma Ethernet para evitarlas.

Dicho de otra manera:

> **Antes tenía varias carreteras hacia Internet y controlaba una. Después hice que las carreteras que necesitábamos pasaran por el mismo punto de control.**

## 10. ¿Necesitas hacer lo mismo en tu casa?

Probablemente no.

Y esto me parece importante dejarlo claro.

Si el router de tu operadora ofrece los controles que necesitas, puedes proteger su administración y no existen caminos alternativos sencillos, cambiar toda la arquitectura puede aportar más complejidad que beneficio.

Mi configuración responde a una situación concreta: quería un nivel de control mayor y había comprobado que mantener el router anterior delante del nuevo dejaba rutas demasiado fáciles para evitar mis restricciones.

Por eso esta es una **guía técnica para profundizar**, no el punto de partida que recomendaría a todas las familias.

Antes de cambiar nada yo comprobaría primero:

1. Qué controles ofrece el router que ya tenemos.
2. Si podemos proteger correctamente su configuración.
3. Qué dispositivos necesitan realmente esas restricciones.
4. Si existen otras redes o conexiones por cable que permitan evitarlas.
5. Y solo entonces, si necesitamos más control, plantearía una arquitectura como esta.

## 11. Lo que todavía no estaba resuelto

Llegados a este punto había conseguido que la conexión doméstica pasara por el router donde aplicaba mis reglas.

Pero eso no significaba que el problema estuviera terminado.

Más adelante descubrí que una VPN instalada en el navegador podía crear otro camino lógico a través de esa misma conexión y evitar parte del filtrado.

Ya no se trataba de pulsar un botón o cambiar un cable. El dispositivo seguía pasando físicamente por mi router, pero parte del tráfico podía viajar de una forma que hacía inútiles algunas de las restricciones que había configurado.

Ese fue el siguiente problema que tuve que resolver.

---

### Idea clave de esta guía

**Centralizar el control no consiste únicamente en instalar un router con más funciones. Hay que comprobar que no dejamos caminos alternativos que permitan salir a Internet sin pasar por él.**

---

### Siguiente paso técnico

**Cómo configuré el filtrado de contenidos y qué ocurrió cuando apareció una VPN.**

Ahí veremos qué restricciones apliqué sobre esta arquitectura, cómo comprobé que funcionaban y por qué posteriormente tuve que reforzarla.
