import db from "../../../config/db.config.js";


export const findCustomerByPhone = async (phone) => {
    const qry_to_exec=`SELECT * FROM customers WHERE phone = ?`
    const [rows] = await db.execute(
        qry_to_exec,
        [phone]
    );
    return rows[0];
};

export const createCustomer = async (customer) => {

    const { name,  phone,  area,  house_number,landmark} = customer;

    const [result] = await db.execute(
        `
        INSERT INTO customers
        ( name,  phone,area,house_number,landmark )
        VALUES
        ( ?, ?,?,?,?) `,
        [ name, phone, area, house_number,landmark]
    );

    return result;
};