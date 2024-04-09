import { CONFIG as config, cl } from './config.js';
import { countNewLines } from './utils.js';

/**
 * Ecoute focus sur la div nouvelle note
 * Pour agrandir la div
 */
document.querySelector("#new_note").addEventListener("focus", () => {
    const $div = document.querySelector(".new-note");
    const c = $div.classList;
    if (!c.contains("active")) {
        c.add("active");
    }
});

/**
 * Ecoute clic sur btn fermer div nouvelle note
 */
document.querySelector(".new-note__btn-close").addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(".new-note").classList.remove("active");
})

/**
 * Saise d'une nouvelle note
 */
document.querySelector("#new_note").addEventListener("keyup", _handleNewLine);

function _handleNewLine (e) {
    const $this = e.target;
    const $div = document.querySelector(".new-note");
    let height = $this.clientHeight;

    if (e.key == 'Enter') {
        // Augmente la taille de la div et du textarea
        height += config.constants.NEW_NOTE_INPUT_HEIGHT;
        $div.style.height = $this.style.height = `${height}px`;
        config.global.num_new_line++;

    } else if (config.constants.KEYS_NEW_LINE.indexOf(e.key) != -1) { 
        if (config.global.num_new_line != countNewLines($this)) {
            if (config.global.num_new_line > 0) {
                // Réduit la taille de la div et du textarea
                config.global.num_new_line--;
                height -= config.constants.NEW_NOTE_INPUT_HEIGHT;
                $div.style.height = $this.style.height = `${height}px`;
            }
            // Il n'y a plus aucun saut de ligne
            if (config.global.num_new_line == 0) {
                // Reset de la taille de la div et du textarea
                $div.style.height = `${config.constants.NEW_NOTE_INPUT_HEIGHT_MIN}px`;
                $this.style.height = `${config.constants.NEW_NOTE_INPUT_HEIGHT}px`;
            }
        }
    }
}