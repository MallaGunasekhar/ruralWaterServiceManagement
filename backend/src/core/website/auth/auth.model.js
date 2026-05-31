import db from '../../../config/db.config.js';
import * as query from './auth.query.js'
export const registerCustomerService = async (payload) => {

    const customer =
        await query.findCustomerByPhone(payload.phone);

    if(customer){

        throw new Error(
            "Phone number already exists"
        );

    }

    return await query.createCustomer(payload);

};