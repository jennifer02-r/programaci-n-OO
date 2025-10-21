# Clase padre: Biblioteca
class Biblioteca:
    def __init__(self, nombre, ubicación):
        self.nombre = nombre
        self.ubicación = ubicación

    def descripción(self):
        return f"{self.nombre} - {self.ubicación}"

# Clase hija: Libro
class Libro(Biblioteca):
    def __init__(self, titulo, autor, genero,año):
        self.titulo = titulo
        self.autor = autor
        self.genero=genero
        self.año= año


    def descripción(self):
        return f"{self.titulo} - {self.autor} - {self.genero} - {self.año}"

# Crear objetos
mi_Biblioteca = Biblioteca ("Biblioteca central","centro de la ciudad ")
mi_libro = Libro("Las Olas del Mar", "Omar Smith", "Drama", "2019")


# Utilizar métodos y atributos
print(mi_Biblioteca.descripción())
print(mi_libro.descripción())
