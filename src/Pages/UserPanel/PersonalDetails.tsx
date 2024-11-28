import { KeyboardArrowRightOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import Input from "../../Components/CommonField/Input"
import { Form, FormikProvider, useFormik } from "formik"

const PersonalDetails = () => {
    const initialValues = {//+
        name: "",//+
    };//+

    const formik = useFormik({//+
        initialValues,//+
        onSubmit: (values) => {//+
            console.log(values);

            // Handle form submission//+
        },//+
    });
    return (
        <div>
            {/* Breadcrumb */}
            <div>
                <ul className="text-sm text-gray-500 flex items-center gap-1">
                    <li>
                        <Link to="/user-panel/settings" className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                            Settings
                        </Link>
                    </li>
                    <li>
                        <KeyboardArrowRightOutlined className="!text-xl" />
                    </li>
                    <li>
                        <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">Personal Details</span>
                    </li>
                </ul>
            </div>
            <div className="mt-5 md:mt-8">
                <h4 className="text-3xl lg:text-4xl xl:text-5xl text-gray-600">Personal Details</h4>
                <hr className="my-5 border-primary" />
                <div className="py-6 px-5 border border-primary bg-primary bg-opacity-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <h6 className="text-xl sm:text-2xl md:text-3xl text-primary">Personal Details</h6>
                            <p className="mt-1 text-gray-600 text-sm sm:text-base">Please fill in your details</p>
                        </div>
                        <div>
                            <button className="border border-primary text-primary bg-white px-3 sm:px-8 py-1 sm:py-2 uppercase tracking-wide text-sm sm:text-base">Edit</button>
                        </div>
                    </div>
                    {/* Personal Details Form */}
                    <div className="mt-6">
                        <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <Input name="firstName" type="text" label="First Name" value="Surinder Saini" disabled labelClass="" />
                                    <Input name="lastName" type="text" label="Last Name" value="Harbans" disabled labelClass="" />
                                    <Input name="email" type="email" label="Email" value="mexxstate@gmail.com" disabled labelClass="" />
                                    <Input name="address" type="text" label="Adress" value="-" disabled labelClass="" />
                                    <Input name="number" type="text" label="Phone Number" value="-" disabled labelClass="" />
                                    <Input name="SecEmail" type="email" label="Secondary Email" value="" disabled labelClass="" />
                                    <Input name="SecNumber" type="text" label="Secondary Phone Number" value="-" disabled labelClass="" />
                                </div>
                                <div className="mt-6">
                                    <button className="btn1 !rounded-none h-10 !px-8 tracking-wider">Save</button>
                                </div>
                            </Form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails
