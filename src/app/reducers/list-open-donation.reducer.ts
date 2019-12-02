import {Detail} from './../list-open-donation/list-open-donation.model'
import {Action} from '@ngrx/store'

export const UPDATE_DETAIL = 'UPDATE_DETAIL'

export function updateDetail(state : Detail, action){
    switch (action.type){
        case UPDATE_DETAIL :
        return state = action.payload
        default : 
        return state
    }
}