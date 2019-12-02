import {Detail} from './list-open-donation/list-open-donation.model'
import { Blockchain } from './blockchain/blockchain.model';

export interface AppState {
    readonly detailDonasi : Detail, 
    readonly blockchain : Blockchain[]
}