import { Label, Radio } from 'flowbite-react';
import { DeleteOutline } from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { OtherUtilities } from '../../types/uiltiliyProvidersTypes';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { updateOtherUtility } from '../../store/features/propertyUtilitiesSlice';
import { toDataURL, uploadFile } from '../../services/apiServices';

const OtherUtilityForm = ({ temp_id, options, handleDelete }: { temp_id: number, options: any, handleDelete: () => void }) => {
    const dispatch = useDispatch();
    const [uploadBill, setUploadBill] = useState<Boolean | null>(null);
    const [localUtility, setLocalUtility] = useState<OtherUtilities | undefined>(useSelector((state: RootState) =>
        state.propertyUtilities.utilities?.other.find(utility => utility.temp_id === temp_id)
    ));
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [filePreview, setFilePreview] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setLocalUtility((prev) => prev ? { ...prev, [name]: value } : undefined);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setSelectedFile(file);
            setFilePreview(URL.createObjectURL(file));
        }
    };

    const handleFileUpload = async () => {
        if (!selectedFile) return;

        setUploading(true);

        try {
            const data = await uploadFile(selectedFile, "bills");
            setLocalUtility((prev) => prev ? { ...prev, uploaded_docs: data.imageUrl } : prev);
            setFilePreview(null);
            setSelectedFile(null);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setUploading(false);
        }
    };

    const handleDownload = async (url: string) => {
        const a = document.createElement("a");
        a.href = await toDataURL(url);
        a.download = "Your Bill";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };

    useEffect(() => {
        dispatch(updateOtherUtility(localUtility));
    }, [localUtility, dispatch]);

    return (
        <form className="border border-primary px-4 pt-4 pb-6">
            <div className="flex flex-row justify-between">
                <h5 className="text-2xl text-gray-800">{localUtility?.service_name}</h5>
                <button
                    type="button"
                    className="text-red-500"
                    onClick={handleDelete}
                >
                    <DeleteOutline />
                </button>
            </div>

            <hr className="my-3 border-primary" />
            <label htmlFor={localUtility?.service_name} className="block text-sm font-medium text-gray-700">
                Service Provider
            </label>
            <select
                id={localUtility?.service_name}
                name="service_provider"
                value={localUtility?.service_provider}
                onChange={handleChange}
                className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-1 w-full rounded bg-[#F7F8FF]"
            >
                {options?.service_providers?.map((provider: any, index: any) => (
                    <option key={index} value={provider.name}>
                        {provider.name}
                    </option>
                ))}
            </select>
            <label htmlFor={localUtility?.service_name} className="mt-3 block text-sm font-medium text-gray-700">
                Account Number
            </label>
            <input
                type='text'
                id={localUtility?.service_name}
                name="account_no"
                value={localUtility?.account_no}
                onChange={handleChange}
                className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
            />
            <label htmlFor={localUtility?.service_name} className="mt-3 block text-sm font-medium text-gray-700">
                Paid By
            </label>
            <select
                id={localUtility?.service_name}
                name="paid_by"
                value={localUtility?.paid_by}
                onChange={handleChange}
                className="py-3 px-4 leading-4 text-[#040404] placeholder:text-[#8B8B8B] border-[#E2E2EC] mt-1 w-full rounded bg-[#F7F8FF]"
            >
                <option value="Owner">Owner</option>
                <option value="Company">Company</option>
            </select>
            <label htmlFor={localUtility?.service_name} className="mt-3 block text-sm font-medium text-gray-700">
                Web Login
            </label>
            <input
                type='text'
                id={localUtility?.service_name}
                name="web_login"
                value={localUtility?.web_login}
                onChange={handleChange}
                className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
            />
            <label htmlFor={localUtility?.service_name} className="mt-3 block text-sm font-medium text-gray-700">
                Web Password
            </label>
            <input
                type='password'
                id={localUtility?.service_name}
                name="web_pass"
                value={localUtility?.web_pass}
                onChange={handleChange}
                className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
            />
            <label htmlFor={localUtility?.service_name} className="mt-3 block text-sm font-medium text-gray-700">
                Enter a Link
            </label>
            <input
                type='text'
                id={localUtility?.service_name}
                name="link"
                value={localUtility?.link}
                onChange={handleChange}
                className="mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
            />
            {localUtility?.uploaded_docs && (
                <button
                    type="button"
                    className="mt-3 w-full py-2 bg-primary text-white rounded"
                    onClick={() => handleDownload(localUtility?.uploaded_docs as string)}
                >
                    Download Uploaded Bill
                </button>
            )}

            <p className='my-5 text-center'>OR</p>

            <p>Do you already have an account?</p>
            <div className="radio flex flex-col gap-2 mt-3">
                <div className="flex items-center gap-2">
                    <Radio
                        id="yes"
                        name="account"
                        value="Yes"
                        className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                        onChange={() => setUploadBill(true)}
                        disabled={!localUtility?.service_provider}
                    />
                    <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio
                        id="no"
                        name="account"
                        value="No"
                        className="focus:ring-offset-0 focus:shadow-none !focus:ring-0"
                        onChange={() => setUploadBill(false)}
                        disabled={!localUtility?.service_provider}
                    />
                    <Label htmlFor="no">No - please organize this for me</Label>
                </div>
            </div>

            {localUtility?.service_provider && uploadBill && (
                <div className="mt-5">
                    <label htmlFor="fileDocs" className="mt-2 w-full py-2 flex items-center justify-center border border-primary rounded cursor-pointer">
                        {selectedFile ? "Upload New Bill" : "Upload Bill"}
                    </label>
                    <input
                        type='file'
                        id="fileDocs"
                        name="bill"
                        className="hidden mt-1 px-4 py-3 leading-4 text-gray-600 placeholder:text-[#8B8B8B] border-[#c3c3c7] w-full rounded bg-[#F7F8FF]"
                        onChange={handleFileChange}
                    />
                    {filePreview && (
                        <img src={filePreview} alt="Selected file preview" className="mt-2 w-full h-32 object-cover shadow-md" />
                    )}
                    <p className='text-sm w-full text-nowrap text-ellipsis overflow-hidden mt-2'>
                        {selectedFile ? selectedFile.name : 'No file selected'}
                    </p>

                    {selectedFile && (
                        <div className='flex gap-2'>
                            <button
                                type="button"
                                className="mt-3 w-full py-2 bg-primary text-white rounded"
                                onClick={handleFileUpload}
                                disabled={uploading}
                            >
                                {uploading ? 'Uploading...' : 'Confirm and Upload'}
                            </button>
                            <button
                                type="button"
                                className="mt-3 w-full py-2 bg-[#e5e5e5] text-black rounded"
                                onClick={() => { setSelectedFile(null); setFilePreview(null) }}
                                disabled={uploading}
                            >
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            )}
        </form>
    )
}

export default OtherUtilityForm;