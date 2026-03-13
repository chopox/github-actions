import { gestionTareas } from "../PageObjects/IndexPage";

export class Actions {

    abrirWeb() {
            cy.visit(this.web);
        }

        crear(nombre) {
            cy.get(this.crearTarea)
            .type(nombre + '{enter}');
        }

        marcar(nombre) {
            cy.contains(this.nombreTarea, nombre)
            .parents('li')
            .find(this.checkTarea)
            .click();
        }

        editar(nombreAntiguo, nombreNuevo) {
            cy.contains(this.nombreTarea, nombreAntiguo)
            .dblclick({ force: true });

            cy.get(this.editarTarea)
            .filter((index, el) => el.value === nombreAntiguo) 
            .clear()
            .type(nombreNuevo + '{enter}');
        }

        borrar(nombre) {
            cy.contains(this.nombreTarea, nombre)
            .parents('li')
            .find('.destroy')
            .click({ force: true });
        }

        filtrar(filtro) {
            cy.get(this.contenedorFiltros)
            .contains('a', filtro)
            .click();
        }

        esNombre(nombre) {
            cy.contains(this.nombreTarea, nombre)
            .should('be.visible');
        }

        esActiva(nombre) {
            cy.contains(this.nombreTarea, nombre)
            .should('be.visible')
            .parents('li')
            .should('not.have.class', 'completed');
        }

        esCompletada(nombre) {
            cy.contains(this.nombreTarea, nombre)
            .should('be.visible')
            .parents('li')
            .should('have.class', 'completed');
        }

        esInexistente(nombre) {
            cy.contains(this.nombreTarea, nombre)
            .should('not.exist');
        }

}

export const todoActions = new Actions();