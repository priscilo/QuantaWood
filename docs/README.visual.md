

```md
# 🌍 QUANTAWOOD – Guía Visual de Componentes

Documentación unificada para componentes visuales clave, con enfoque en accesibilidad, defensividad y compatibilidad multicultural.

---

## 🧩 Button

Botón accesible y temático, adaptable por idioma y cultura.

### 🎯 Propósito
Renderiza un botón estilizado con variantes visuales y soporte multicultural.

### ⚙️ Props

| Prop       | Tipo     | Descripción                                           |
| ---------- | -------- | ----------------------------------------------------- |
| `variant`  | string   | Estilo del botón (`primary`, `ghost`, `danger`, etc.) |
| `lang`     | string   | Idioma (`es`, `en`, `pt`, etc.) para adaptar estilos  |
| `onClick`  | function | Acción al hacer clic                                  |
| `children` | node     | Contenido visual del botón                            |

### 🌐 Compatibilidad multicultural

```jsx
<Button variant="primary" lang="es">Aceptar</Button>
<Button variant="ghost" lang="en">Cancel</Button>
```

### 🎨 Estilos aplicados

- Usa `--color-accent` desde `theme.scss` según `[data-lang]`.
- Clases sugeridas: `.btn-primary`, `.btn-ghost`, `.btn-disabled`.

### 🧪 Accesibilidad

- Navegación por teclado.
- Validado con `axe-core`.

---

## 🧩 Card

Tarjeta visual con título, imagen y contenido adaptable por idioma.

### 🎯 Propósito
Presenta información estructurada con estilo temático y soporte multicultural.

### ⚙️ Props

| Prop       | Tipo   | Descripción                             |
| ---------- | ------ | --------------------------------------- |
| `title`    | string | Título de la tarjeta                    |
| `image`    | string | URL o asset visual                      |
| `lang`     | string | Idioma para adaptar estilos y contenido |
| `children` | node   | Contenido adicional                     |

### 🌐 Compatibilidad multicultural

```jsx
<Card title={t('welcome')} image="/logo.svg" lang="pt">
  {t('introText')}
</Card>
```

### 🎨 Estilos aplicados

- Estilos adaptados por `[data-lang]`.
- Clases sugeridas: `.card-accent`, `.card-bordered`.

### 🧪 Accesibilidad

- Imágenes con `alt`.
- Contraste validado.

---

## 🧩 Navbar

Barra de navegación adaptable por idioma y activa por ruta.

### 🎯 Propósito
Renderiza navegación principal con enlaces temáticos y soporte multicultural.

### ⚙️ Props

| Prop     | Tipo   | Descripción                             |
| -------- | ------ | --------------------------------------- |
| `links`  | array  | Lista de enlaces con `label` y `href`   |
| `active` | string | Ruta activa                             |
| `lang`   | string | Idioma para adaptar estilos y contenido |

### 🌐 Compatibilidad multicultural

```jsx
<Navbar
  links={[{ label: t('home'), href: '/' }, { label: t('about'), href: '/about' }]}
  active="/about"
  lang="en"
/>
```

### 🎨 Estilos aplicados

- Estilos de enlace activo (`.nav-active`) y por idioma.
- Tokens visuales desde `theme.scss`.

### 🧪 Accesibilidad

- Navegación por teclado.
- Roles semánticos (`nav`, `ul`, `li`).

---

## 🧩 LandingIntro

Sección introductoria con encabezado temático y contenido visual.

### 🎯 Propósito
Presenta el mensaje principal de bienvenida con estilo adaptado por cultura.

### ⚙️ Props

| Prop       | Tipo   | Descripción                             |
| ---------- | ------ | --------------------------------------- |
| `headline` | string | Texto principal                         |
| `lang`     | string | Idioma para adaptar estilos y contenido |
| `image`    | string | Imagen decorativa opcional              |

### 🌐 Compatibilidad multicultural

```jsx
<LandingIntro headline={t('welcomeHeadline')} lang="es" image="/hero.svg" />
```

### 🎨 Estilos aplicados

- Encabezado con `--color-accent` según idioma.
- Clases sugeridas: `.intro-headline`, `.intro-image`.

### 🧪 Accesibilidad

- Texto legible y escalable.
- Imágenes con `alt`.

---

## 🧩 ErrorBoundary

Contenedor defensivo para capturar errores y mostrar fallback visual.

### 🎯 Propósito
Evita caídas de la app mostrando contenido alternativo según idioma.

### ⚙️ Props

| Prop       | Tipo   | Descripción                                 |
| ---------- | ------ | ------------------------------------------- |
| `fallback` | node   | Componente visual mostrado en caso de error |
| `lang`     | string | Idioma para adaptar estilos del fallback    |
| `children` | node   | Componentes protegidos                      |

### 🌐 Compatibilidad multicultural

```jsx
<ErrorBoundary fallback={<p>{t('errorMessage')}</p>} lang="pt">
  <MainApp />
</ErrorBoundary>
```

### 🎨 Estilos aplicados

- Fallback estilizado con tokens visuales.
- Clases sugeridas: `.error-fallback`, `.error-boundary`.

### 🧪 Accesibilidad

- Mensajes claros y localizados.
- Compatible con lectores de pantalla.
```

---Aquí tienes los primeros ejemplos visuales generados para los componentes clave de QUANTAWOOD, cada uno estilizado según idioma y cultura:

---



