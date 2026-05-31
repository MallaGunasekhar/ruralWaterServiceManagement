import * as mdl from './auth.model.js'
export const registerCustomers = async (req, res, next) => {
    try {
        await mdl.registerCustomerService(req.body);
        return res.status(201).json({
            success: true,
            message: "Customer registered"
        });
    }
    catch (error) {
        next(error);
    }

};
export const loginCustomer = async (req, res, next) => {
    try {
        const { phone } = req.body;
        const customer =
            await findCustomerByPhone(phone);
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: "Customer not found"
            });
        }
        return res.status(200).json({
            success: true,
            data: customer
        });
    }
    catch (error) {
        next(error);
    }
};