/**
 * Created by pawel on 05.05.16.
 */
import {CONSTANTS} from './constants';

let Utils = {
    getTemplatePath(name){
        return `${CONSTANTS.ADMIN_COMPONENTS}/${name}/${name}.html`
    }
}

export { Utils };