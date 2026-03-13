Feature: Test con POM + Cucumber de la Web TodoMVC

    Background:
        Given que estoy en la página de inicio

    Scenario: Crear una tarea
        When creo una tarea llamada "Tarea 1"
        Then debería verse "Tarea 1" en la lista

    Scenario: Marcar una tarea como completada
        Given existe una tarea activa llamada "Tarea 1"
        When marco la tarea "Tarea 1" como completada
        Then la tarea "Tarea 1" debería mostrarse como completada
    
    Scenario: Desmarcar una tarea como completada
        Given existe una tarea completada llamada "Tarea 1"
        When desmarco la tarea "Tarea 1" como completada
        Then la tarea "Tarea 1" debería mostrarse como activa

    Scenario: Editar una tarea existente
        Given existe una tarea activa llamada "Tarea 1"
        When cambio el nombre de la tarea "Tarea 1" por "La tarea ha sido modificada"
        Then debería verse "La tarea ha sido modificada" en la lista

    Scenario: Borrar una tarea existente
        Given existe una tarea activa llamada "Tarea 1"
        When borro la tarea "Tarea 1"
        Then la tarea "Tarea 1" no debería existir

    Scenario: Filtrar tareas por estado
        Given existe una tarea activa llamada "Tarea 1"
        And existe una tarea activa llamada "Tarea 2"
        And existe una tarea activa llamada "Tarea 3"
        And existe una tarea activa llamada "Tarea 4"
        And marco las tareas "Tarea 1" y "Tarea 2" como completadas
        When hago clic en el filtro "Completed"
        Then deberían mostrarse solo las tareas completadas "Tarea 1" y "Tarea 2"
        When hago clic en el filtro "Active"
        Then deberían mostrarse solo las tareas activas "Tarea 3" y "Tarea 4"
        When hago clic en el filtro "All"
        Then deberían mostrarse las 4 tareas creadas, cada una con su estado