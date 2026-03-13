import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// =================
// GIVEN
// =================

Given('que estoy en la página de inicio', () => {
    gestionTareas.abrirWeb();
})

Given('existe una tarea activa llamada {string}', (nombreTarea) => {
    gestionTareas.crear(nombreTarea);
})

Given('existe una tarea completada llamada {string}', (nombreTarea) => {
    gestionTareas.crear(nombreTarea);
    gestionTareas.marcar(nombreTarea);
})

Given('marco las tareas {string} y {string} como completadas', (nombreTarea1, nombreTarea2) => {
    [nombreTarea1, nombreTarea2].forEach(t => gestionTareas.marcar(t));
})

// =================
// WHEN
// =================

When('creo una tarea llamada {string}', (nombreTarea) => {
    gestionTareas.crear(nombreTarea);
})

When('cambio el nombre de la tarea {string} por {string}', (nombreAntiguo, nombreNuevo) => {
    gestionTareas.editar(nombreAntiguo, nombreNuevo);
})

When('borro la tarea {string}', (nombreTarea) => {
    gestionTareas.borrar(nombreTarea);
})

When('marco la tarea {string} como completada', (nombreTarea) => {
    gestionTareas.marcar(nombreTarea);
})

When('desmarco la tarea {string} como completada', (nombreTarea) => {
    gestionTareas.marcar(nombreTarea);
})

When('hago clic en el filtro {string}', (filtro) => {
    gestionTareas.filtrar(filtro);
})

// =================
// THEN
// =================

Then('debería verse {string} en la lista', (nombreTarea) => {
    gestionTareas.esNombre(nombreTarea);
})

Then('la tarea {string} no debería existir', (nombreTarea) => {
    gestionTareas.esInexistente(nombreTarea);
})

Then('la tarea {string} debería mostrarse como activa', (nombreTarea) => {
    gestionTareas.esActiva(nombreTarea);
})

Then('la tarea {string} debería mostrarse como completada', (nombreTarea) => {
    gestionTareas.esCompletada(nombreTarea);
})

Then('deberían mostrarse solo las tareas completadas {string} y {string}', (nombreTarea1, nombreTarea2) => {
    gestionTareas.esCompletada(nombreTarea1);
    gestionTareas.esCompletada(nombreTarea2);
})

Then('deberían mostrarse solo las tareas activas {string} y {string}', (nombreTarea1, nombreTarea2) => {
    gestionTareas.esActiva(nombreTarea1);
    gestionTareas.esActiva(nombreTarea2);
})

Then('deberían mostrarse las 4 tareas creadas, cada una con su estado', () => {
    ['Tarea 1', 'Tarea 2'].forEach(t => gestionTareas.esCompletada(t));
    ['Tarea 3', 'Tarea 4'].forEach(t => gestionTareas.esActiva(t));
})