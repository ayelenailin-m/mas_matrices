# Lista para almacenar los datos de los alumnos
alumnos = []

def agregar_o_modificar_alumno():
    nombre = input("Nombre del alumno: ").strip().capitalize()

    # Buscar si el alumno ya existe
    for alumno in alumnos:
        if alumno[0] == nombre:
            print(f"{nombre} ya está registrado.")
            return modificar_notas(alumno)

    # Si no existe, agregar nuevo
    materias = []
    while True:
        materia = input("Materia (o ENTER para terminar): ").strip().capitalize()
        if materia == "":
            break
        nota = int(input(f"Nota en {materia}: "))
        materias.append([materia, nota])

    alumnos.append([nombre, materias])
    print(f"{nombre} agregado correctamente.")

def modificar_notas(alumno):
    print(f"Notas actuales de {alumno[0]}: {alumno[1]}")
    materia = input("Materia a modificar o agregar: ").strip().capitalize()
    nota = int(input(f"Nueva nota para {materia}: "))

    for m in alumno[1]:
        if m[0] == materia:
            m[1] = nota
            print("Nota modificada.")
            return

    alumno[1].append([materia, nota])
    print("Materia y nota agregadas.")

def mostrar_alumnos():
    print("\nLista de alumnos y notas:")
    for alumno in alumnos:
        print(f"{alumno[0]}: {alumno[1]}")

while True:
    opcion = input("\n1. Agregar/Modificar Alumno\n2. Mostrar Notas\n3. Salir\n> ")
    if opcion == "1":
        agregar_o_modificar_alumno()
    elif opcion == "2":
        mostrar_alumnos()
    elif opcion == "3":
        break
    else:
        print("Opción inválida.")
