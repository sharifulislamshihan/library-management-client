import { FaMoneyCheckAlt, FaShieldAlt, FaTruck } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const Facilities = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-5 md:mx-7 lg:mx-10 my-16 shadow-xl px-14 rounded-xl text-center md:text-left py-7">
            <div className="flex flex-col md:flex-row gap-2 my-5">
                <FaTruck className="text-5xl md:text-8xl my-auto text-blue-500 mx-auto "></FaTruck>

                <div className="mx-10 ">
                    <h3 className="text-3xl font-heading font-semibold mb-5 text-blue-500">Quick Delivery</h3>
                    <p className="text-lg font-body font-medium text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-2 my-5">
                <FaShieldAlt className="text-5xl md:text-8xl my-auto text-blue-500 mx-auto" />

                <div className="mx-10">
                    <h3 className="text-3xl font-heading font-semibold mb-5 text-blue-500">Secured Payment</h3>
                    <p className="text-lg font-body font-medium text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum.</p>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-2 my-5">
                <FaMoneyCheckAlt className="text-5xl md:text-8xl my-auto text-blue-500 mx-auto" />

                <div className="mx-10">
                    <h3 className="text-3xl font-heading font-semibold mb-5 text-blue-500">Best Deal</h3>
                    <p className="text-lg font-body font-medium text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum.</p>
                </div>
            </div>


            <div className="flex flex-col md:flex-row gap-2 my-5">
                <FaMoneyBillTransfer className="text-5xl md:text-8xl my-auto text-blue-500 mx-auto" />

                <div className="mx-10">
                    <h3 className="text-3xl font-heading font-semibold mb-5 text-blue-500">Easy Payment</h3>
                    <p className="text-lg font-body font-medium text-blue-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, cum.</p>
                </div>
            </div>
        </div>
    );
};

export default Facilities;