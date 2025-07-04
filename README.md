
## API de Meal Plans y Recetas

### Rutas disponibles

#### 1. Semilla de la base de datos
**GET** `/api/seed/`
> Restaura y llena la base de datos con datos de ejemplo.

#### 2. Recetas
**GET** `/api/recipes/`
> Obtiene todas las recetas. Puedes filtrar por categoría usando el query param `?category=NombreCategoria`.

**GET** `/api/recipes/:id`
> Obtiene una receta por su ID.

**POST** `/api/recipes/`
> Crea una nueva receta. Debes enviar un JSON con los campos: `name`, `category`, `instructions`, `ingredients`, `prep_time`.

#### 3. Planes de comida
**GET** `/api/meal-plans/`
> Obtiene todos los planes de comida.

**POST** `/api/meal-plans/`
> Crea un nuevo plan de comida. Debes enviar un JSON con los campos: `name`, `date`, `recipe_ids`, `notes`.

**DELETE** `/api/meal-plans/:id`
> Elimina un plan de comida por su ID.

---
**Nota:** Todas las rutas están bajo el prefijo `/api`. Consulta el código para detalles adicionales de validación y respuesta.
