import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useServicesProviders } from '../../hooks/react-queries/providersservices';
import { useQuery } from '@tanstack/react-query';
import { fetchAllPropertyUtilities } from '../../services/apiServices';
import { addUtility, deleteUtility, setUtilities} from '../../store/features/propertyUtilities';
import RequiredUtilityForm from './RequiredUtilityForm';
import OtherUtilityForm from './OtherUtilityForm';
import { KeyboardArrowRightOutlined } from '@mui/icons-material';
import { OtherUtilities, PropertyUtilities } from '../../types/uiltiliyProvidersTypes';

const Utilities: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const utilities = useSelector((state: RootState) => state.propertyUtilities.utilities);

    const { data, isLoading, error, isError } = useServicesProviders();
    const { isLoading: isUtilsLoading, isError: isUtilsError, error: utilsError, data: utilitiesData } = useQuery<PropertyUtilities>({
        queryKey: ["galleryTypesData"],
        queryFn: () => fetchAllPropertyUtilities(id || ""), // Pass id here
    });

    useEffect(() => {
        if (utilitiesData) {
            dispatch(setUtilities(utilitiesData));
        }
    }, [utilitiesData, dispatch]);
    
    if (isError && error instanceof Error)
        return <p>Error: {error.message}</p>;

    if (isLoading || isUtilsLoading) return <p>Loading...</p>;

    const handleAddNewUtility = () => {
        const newUtility: OtherUtilities = {temp_id: Date.now(), field_name: "other", service_name: "Other", service_provider: "", account_no: "", paid_by: "", web_login: "", web_pass: "", link: "", already_have_account: true};
        dispatch(addUtility(newUtility));
    };

    const handleDeleteUtility = (temp_id: number) => {
        dispatch(deleteUtility(temp_id));
    };

    const handleSaveUtilities = () => {
        console.log(utilities);
    };

    return (
        <div>
            {/* Breadcrumb */}
            <div>
                <ul className="text-sm text-gray-500 flex items-center gap-1">
                    <li>
                        <Link
                            to="#"
                            className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                        >
                            Settings
                        </Link>
                    </li>
                    <li>
                        <KeyboardArrowRightOutlined className="!text-xl" />
                    </li>
                    <li>
                        <Link
                            to="#"
                            className="hover:underline inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis"
                        >
                            Property Details
                        </Link>
                    </li>
                    <li>
                        <KeyboardArrowRightOutlined className="!text-xl" />
                    </li>
                    <li>
                        <span className="text-gray-800 inline-block max-w-[80px] sm:max-w-full overflow-hidden text-nowrap text-ellipsis">
                            Utility Details
                        </span>
                    </li>
                </ul>
            </div>

            <div className="mt-8">
                <h4 className="text-xl xs:text-2xl sm:text-3xl xl:text-4xl text-gray-600">
                    B110 - B202 Wavez Residence, Dubai Land, Dubai, UAE.
                </h4>
                <hr className="my-5 border-primary" />
                <div className="">
                    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-5">
                        <RequiredUtilityForm service={utilities?.internet?.field_name} options={data?.data[0]?.internet} />
                        <RequiredUtilityForm service={utilities?.electricity_water?.field_name} options={data?.data[0]?.electricity_water} />
                        <RequiredUtilityForm service={utilities?.gas?.field_name} options={data?.data[0]?.gas} />
                        <RequiredUtilityForm service={utilities?.chiller?.field_name} options={data?.data[0]?.chiller} />
                        {utilities?.other?.map((utility: any, index: any) => (
                            <OtherUtilityForm key={index} temp_id={utility.temp_id} options={data?.data[0]?.other} handleDelete={() => handleDeleteUtility(utility.temp_id)} />
                        ))}
                        <button
                            type="button"
                            className="btn1 mt-4"
                            onClick={handleAddNewUtility}
                        >
                            Add New Utility
                        </button>
                    </div>
                    <button type="button" className="btn1 mt-6" onClick={handleSaveUtilities}>
                        Save Utilities
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Utilities;