## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/chileoro0000/desafio-tenpo.git
   cd desafio-tenpo


2. Instalar dependencias:

   ```bash
   npm install

3. Levantar la pagina en modo dev:

   ```bash
   npm run dev

4. Levantar la pagina en modo produccion:

   ```bash
   npm run build
   npm run preview


## Tecnologías

- React - Vite
- styled-components
- framer-motion
- react-icons
- Tailwind
- Node.js

## Herramientas y origen del contenido

- La mayoría de los textos fueron extraídos directamente desde el sitio oficial de **Tenpo.cl**. Parte del contenido fue inventado para fines exclusivamente demostrativos y **no representa necesariamente información real de una fintech.**

- Las imagenes de tarjetas fueron tomadas del sitio web de tenpo.cl y le agregue un efecto visual de reflejo para llamar la atencion en ellas.

- Aunque no tenía mucha experiencia previa con **Framer Motion**, su curva de aprendizaje resultó amigable. Me apoyé en ejemplos prácticos de páginas con enfoque en UX/UI y en la documentación oficial. La integración con React fue fluida y permitió agregar animaciones sutiles de forma efectiva.

- Elegí trabajar con **React** ya que tengo más experiencia previa tanto en React como en React Native. Su estructura de componentes facilita el mantenimiento y escalabilidad del proyecto.
  
- Para los estilos utilicé **Tailwind CSS**, ya que permite una implementación rápida y ordenada sin necesidad de crear múltiples archivos CSS. Su enfoque utilitario encajó bien con la necesidad de personalizar rápido según diseño, tambien ocupo https://uiverse.io/, para inspirarme con algunas cosas.
  
- Aunque no soy particularmente fan de **react-icons**, decidí usar esta librería por su facilidad de integración y porque ya conocía su documentación. Para este proyecto, era suficiente contar con una librería ligera que resolviera la incorporación de íconos rápido.

---

## Decisiones de diseño y estructura del Home

- El diseño está inspirado tanto en los ejemplos del instructivo como en el sitio real de Tenpo. Se mantuvieron colores institucionales como el **verde fluorescente** (`#03FF94`) y un **fondo oscuro** que resalta los elementos visuales.

- Las tarjetas (productos) cuentan con una animación de entrada y un **efecto interactivo al hacer clic**, lo cual permite desplegar información adicional en un modal. Si el usuario no hace clic, igual puede ver una versión reducida de los beneficios más abajo en otra sección, pero si es necesario igual se podrian expandir.

- Se añadieron íconos representativos para comunicar visualmente las ventajas de Tenpesos.

- Aunque no se exigía un mínimo o máximo de secciones en el desafío, decidí incluir también una **sección relacionada con inversiones**, alineada con los servicios reales de la plataforma Tenpo.

---

## Decisiones específicas sobre la sección de beneficios

- Se priorizó la visualización de las **tres tarjetas principales** al inicio, acompañadas de efectos de aparición animados para dar dinamismo sin sobrecargar.

- El orden de las tarjetas no sigue una jerarquía, ya que todas son presentadas con igual peso visual y relevancia, igual me gusto que la prepago este en medio, siento que necesita llamar mas la atencion para usuarios nuevos.

- Las promociones y beneficios de Tenpesos se representaron en un diseño tipo **card expandible**, con animaciones sutiles que destacan la información clave sin generar distracción.

- La idea fue **equilibrar el movimiento y la claridad visual**: evitar una experiencia demasiado recargada y centrar las animaciones en los elementos más relevantes como productos principales (tarjetas).
