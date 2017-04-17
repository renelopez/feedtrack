import * as types from './ajaxActionTypes';

export function beginAjaxCall() {
    return { type: types.BEGIN_AJAX_CALL};
}