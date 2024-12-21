import { Label, Radio } from 'flowbite-react';
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import OtherUtilityForm from './OtherUtilityForm';
import RequiredUtilityForm from './RequiredUtilityForm';

const UtilityForm = ({ utility, options }: { utility: any, options: any }) => {
    console.log("Options", options?.service_providers);
    const [haveAccount, setHaveAccount] = useState<Boolean | null>(true);
    const [uploadBill, setUploadBill] = useState<Boolean | null>(null);

    useEffect(() => {
        if (!utility.service_provider || utility.service_provider === "") {
            setHaveAccount(false);
        }
    }, []);

    if (utility.field_name === "other") {
        // Needs to Implement Functionality of Upload Bill based on Conditions
        // Service Provider must be set/chosen to enable the radio buttons for upload bill
        // If chosen yes, then person can select file to upload, otherwise no

        return (
            <OtherUtilityForm temp_id={utility.temp_id} options={options} handleDelete={() => (utility.id)} />
        )
    }

    return (
        <RequiredUtilityForm service={utility.field_name} options={options} />
    )
}

export default UtilityForm;