import { Label, Radio } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequiredUtility } from '../../types/uiltiliyProvidersTypes';
import { RootState } from '../../store/store';
import { updateRequiredUtility } from '../../store/features/propertyUtilitiesSlice';

const RequiredUtilityForm = ({ service, options }: { service: string | undefined; options: any }) => {
    const dispatch = useDispatch();
    const [haveAccount, setHaveAccount] = useState<Boolean | null>(true);

    const localUtility = useSelector((state: RootState) => {
        const utilities = state.propertyUtilities.utilities;
        return utilities ? utilities[service as keyof typeof utilities] : undefined;
    }) as RequiredUtility | undefined;

    const [utility, setLocalUtility] = useState<RequiredUtility | undefined>(localUtility);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLocalUtility((prev) => (prev ? { ...prev, [name]: value } : undefined));
    };

    useEffect(() => {
        if (utility) {
            dispatch(updateRequiredUtility(utility));
        }
    }, [utility, dispatch]);

    useEffect(() => {
        if (!utility || !utility?.service_provider || utility.service_provider === "") {
            setHaveAccount(false);
        } else {
            setHaveAccount(true);
        }
    }, [utility]);

    if (haveAccount === true) {
        return (
            <form className="border border-primary px-4 pt-4 pb-6">
                <div className="flex flex-row justify-between">
                    <h5 className="text-2xl text-gray-800">{utility?.service_name}</h5>
                </div>
                <hr className="my-3 border-primary" />
                <label htmlFor="service_provider" className="block text-sm font-medium text-gray-700">
                    Service Provider
                </label>
                <select
                    id="service_provider"
                    name="service_provider"
                    value={utility?.service_provider || ""}
                    onChange={handleChange}
                    className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-1 w-full rounded bg-[#F7F8FF]"
                >
                    {options?.service_providers?.map((provider: any, index: any) => (
                        <option key={index} value={provider.name}>
                            {provider.name}
                        </option>
                    ))}
                </select>
                <label htmlFor="account_no" className="mt-3 block text-sm font-medium text-gray-700">
                    Account Number
                </label>
                <input
                    type="text"
                    id="account_no"
                    name="account_no"
                    value={utility?.account_no || ""}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
                />
                <label htmlFor="paid_by" className="mt-3 block text-sm font-medium text-gray-700">
                    Paid By
                </label>
                <select
                    id="paid_by"
                    name="paid_by"
                    value={utility?.paid_by || ""}
                    onChange={handleChange}
                    className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-1 w-full rounded bg-[#F7F8FF]"
                >
                    <option value="Owner">Owner</option>
                    <option value="Company">Company</option>
                </select>
                <label htmlFor="web_login" className="mt-3 block text-sm font-medium text-gray-700">
                    Web Login
                </label>
                <input
                    type="text"
                    id="web_login"
                    name="web_login"
                    value={utility?.web_login || ""}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
                />
                <label htmlFor="web_pass" className="mt-3 block text-sm font-medium text-gray-700">
                    Web Password
                </label>
                <input
                    type="password"
                    id="web_pass"
                    name="web_pass"
                    value={utility?.web_pass || ""}
                    onChange={handleChange}
                    className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
                />
            </form>
        );
    }

    return (
        <div className="border border-primary px-4 pt-4 pb-6">
            <h6 className="text-2xl text-gray-800">{utility?.service_name}</h6>
            <hr className="my-3 border-primary" />
            <p>Do you already have an account?</p>
            <div className="radio flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-2">
                    <Radio
                        id="yes"
                        name="account"
                        value="Yes"
                        className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                        onChange={() => setHaveAccount(true)}
                    />
                    <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                        id="no"
                        name="account"
                        value="No"
                        className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                        onChange={() => setHaveAccount(false)}
                    />
                    <Label htmlFor="no">No - please organize this for me</Label>
                </div>
            </div>
        </div>
    );
};

export default RequiredUtilityForm;
