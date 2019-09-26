-----------------------------------------------------
### Pregunta 1:  ---
-----------------------------------------------------

Teniendo en cuenta que tenemos una aplicación web privada que necesita de un usuario
y contraseña para poder trabajar con ella. Un día un cliente nos pide que le creemos
un sistema de Single Sign On para que sus usuarios puedan darse de alta en nuestra
aplicación con su cuenta corporativa. Pongamos que se te asigna a ti la tarea y además
queremos usar SAML para este propósito.

Describe brevemente cómo resolverías este caso y que datos crees que sería necesario
pedir al departamente técnico de este hipotetico cliente.
---------
# Respuesta
---------
Lo que tendremos que hacer es que nuestro sistema implemente el protoco SAML, integrandose
con la cuenta corporativa, seguramente un LDAP o producto que también que también pueda responser al protocolo SAML.
Cuando un usuario intente autenticarse en uestro sistema, generaremos una petición SAML hacía su cuenta corporativa y   
ésta generará una 

Si nuestro sistema implementa el protocolo SAML, el futuro, otros sistemas del cliente u otros clientes,
podrían realizar SSO siempre y cuando implemente el protocolo SAML.

Habría que pedir al cliente:
1. Que proveedor de identidad corporativa usa para la autorización 
2. Si su sistema es capaz de utilizar SAML para autorizar al usuario
3. La url donde nuestro sistema devolverá la petición SAML de autenticación
4. Que certificado de autorización vamos a usar para el cifrado de datos
5. Que campos (email, nombre de usuario,...) vamos a utilizar para la autenticación a través de SAML 
6. Podemos solicitar metadatos sobre los grupos corporativos si lo hay, para especificar diferentes permisos en nuestra
aplicación.
7. Cómo vamos a implementar el SSOut (deslogado): llamada a url, eliminación tokens, sessions,...


-----------------------------------------------------
### Pregunta 2:  ---
-----------------------------------------------------

Teniendo una aplicación de gestión de datos un día se nos plantea que tenemos
que crear una página pública, llamemosla public.domain.com, dónde mostrar parte
de esos datos, los cuales son privados y pertenecen a una empresa, algunos de
ellos son sensibles por lo que deben ser tratados con cuidado. Para complicarnos
un poco la vida nos piden que además las personas puedan darse de alta en esta
página pública validando sus credenciales contra nuestra app de gestión y con
ello se les permite a los usuarios con cuenta (cuenta con permisos muy restringidos)
realizar un par de acciones que resultan en la modificación / añadido de algunos
datos.

Ten en cuenta que nuestra app de gestión tiene un sistema de login de usuarios
para usar la api. La página pública es serverless, estática y está alojada en
otro dominio diferente. Adicionalmente hemos de tener en cuenta que nuestra api
no está preparada para trabajar con otros dominios.

Plantea una solución a este problema y comenta brevemente que cambios crees que
deberíamos hacer en nuestra aplicación de gestión, si crees que debemos hacer
alguno.

---------
# Respuesta
---------
Se podría hacer de dos maneras, aunque nuestra aplicación no tiene ninguno de estos dos sistemas, lo más rápido de implementar para una página stateless y los requisitios que se piden es JWT.

1. Si nuestra página de gestión implementa el protocolo OAuth2 para la autenticación, podríamos usar dos flows de este protocolo, opciones válidas para páginas con JavaScript, como podría ser nuestro caso:
+ PCKE: Proof Key for Code
+ Implicit Grant

Para ver si los usuarios tiene los permisos necesarios para utilizar las apis, se puede comprobar a través de los "scopes" de OAuth2, en la propia petición de autorización.

2. Con JWT
Es un sistema de autorización, que sirve justo para lo que se pide, accesso y autorización de ciertos recursos, no todos y restringidos, a través de una API, y sobre diferentes dominios.

+ Creación de usuarios a través de API
+ Api para la generación de JWT tras la autenticación
+ Validar las peticiones API para ver que el JWT que llega tiene los permisos para el recurso solicitado (update/registro,...)





 
