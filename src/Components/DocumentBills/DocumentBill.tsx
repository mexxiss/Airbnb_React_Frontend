import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useFetchUserDocuments } from "../../hooks/react-queries/documentsdetails/useFetchUserDocuments";
import { setPaymentDetails } from "../../store/features/paymentDetailsSlice";
import { RootState } from "../../store/store";
import Loader from "../Loader/Loader";
import ErrorHandleMessage from "../ErrorHandleComponent/ErrorHandleMessage";
import { setDocuments } from "../../store/features/userDocumentsSlice";
import { formatDate, handleDownload } from "../../utils/common";
import { useUpdateBamkdetails } from "../../hooks/react-queries/bankdetails";
import { uploadFile } from "../../services/apiServices";
import { useUploadFile } from "../../hooks/react-queries/uploads/useUploads";
import { useUpdateDocument } from "../../hooks/react-queries/documentsdetails";

const DocumentBill = () => {
  const [docid, setDocId] = useState<string | null>(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, isLoading, error, isError } = useFetchUserDocuments(id || "");
  const uploadDocMutation = useUploadFile();
  const updateUserMutation = useUpdateDocument();

  const docData = useMemo(() => data, [data]);
  const memoizedDispatchBank = useCallback(() => {
    if (docData) {
      dispatch(setDocuments(docData as any));
    }
  }, [docData, dispatch]);

  useEffect(() => {
    memoizedDispatchBank();
  }, [memoizedDispatchBank]);

  const userDocData = useSelector(
    (state: RootState) => state.userDocuments.docs
  );

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string | null
  ) => {
    try {
      const file = event.target.files ? event.target.files[0] : null;
      uploadDocMutation.mutate(
        { file, folder: "documents" },
        {
          onSuccess: (uploadResponse) => {
            // Use the returned image URL to update the document
            const documentUrl = uploadResponse?.imageUrl;

            if (documentUrl) {
              updateUserMutation.mutate(
                {
                  id,
                  uploads: { document: documentUrl },
                },
                {
                  onSuccess: (uploadResponse) => {
                    const updatedDocList = docData?.docs.map((doc: any) =>
                      doc._id === id ? { ...doc, ...uploadResponse } : doc
                    );

                    dispatch(setDocuments({ docs: updatedDocList }));
                  },
                }
              );
            } else {
              console.error("File upload did not return a valid URL");
            }
          },
          onError: (error) => {
            console.error("File upload failed:", error);
          },
        }
      );
      setDocId(id);
    } catch (error) {
      console.log({ error });
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error instanceof Error) {
    return <ErrorHandleMessage msg={error?.message} />;
  }

  return (
    <div className="mt-10">
      <h6 className="text-lg sm:text-xl md:text-2xl text-primary uppercase tracking-wide">
        Documents
      </h6>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 4xl:grid-cols-4 gap-5 mt-3">
        {!userDocData?.length
          ? "Loading...."
          : userDocData?.map((doc) => {
              const fileName = decodeURIComponent(
                doc?.document?.split("/").pop() || "document.pdf"
              );

              return (
                <div
                  className="border border-primary rounded-xl flex flex-col justify-between pb-3"
                  key={doc?._id}
                >
                  <div>
                    <div className="border-b border-primary text-primary text-xl py-2 px-3">
                      {doc?.title || ""}
                    </div>
                    <div className="mt-4 flex flex-col gap-3 px-3">
                      <div>
                        <p className="text-lg text-gray-600">Expiry Date</p>
                        <p className="text-primary">
                          {formatDate(doc.expiry_date || "", "YYYY/MM/DD")}
                        </p>
                      </div>
                      <div>
                        <p className="text-lg text-gray-600">Note</p>
                        <p className="text-primary">{doc.note || "-"}</p>
                      </div>
                      {fileName && (
                        <div>
                          <p className="text-lg text-gray-600">Document</p>
                          <p className="text-primary line-clamp-1">
                            {fileName || "-"}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-3 mt-6 grid grid-cols-2 gap-3 ">
                    <label
                      htmlFor={`fileDoc-${doc?._id}`}
                      className="h-9 rounded-md uppercase text-sm bg-primary text-white flex items-center justify-center"
                    >
                      {uploadDocMutation.isPending && doc._id === docid
                        ? "Uploading..."
                        : "Uploads"}
                      <input
                        type="file"
                        name="file"
                        accept="application/pdf, image/*"
                        onChange={(e) => handleFileChange(e, doc?._id || "")}
                        id={`fileDoc-${doc?._id}`}
                        className="hidden"
                      />
                    </label>
                    {doc?.document && (
                      <button
                        className="h-9 rounded-md uppercase text-sm border border-primary text-primary"
                        onClick={() => handleDownload(doc?.document || "")}
                      >
                        Download
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

        {/* <div className="border border-primary rounded-xl flex flex-col justify-between pb-3">
          <div>
            <div className="border-b border-primary text-primary text-xl py-2 px-3">
              Passport
            </div>
            <div className="mt-4 flex flex-col gap-3 px-3">
              <div>
                <p className="text-lg text-gray-600">Expiry Date</p>
                <p className="text-primary">-</p>
              </div>
              <div>
                <p className="text-lg text-gray-600">Note</p>
                <p className="text-primary">-</p>
              </div>
              <div>
                <p className="text-lg text-gray-600">Document</p>
                <p className="text-primary">qwertyui.png</p>
              </div>
            </div>
          </div>
          <div className="px-3 mt-6 grid grid-cols-2 gap-3 ">
            <button className="h-9 rounded-md uppercase text-sm bg-primary text-white">
              Upload
            </button>
            <button className="h-9 rounded-md uppercase text-sm border border-primary text-primary">
              Download
            </button>
          </div>
        </div>
        <div className="border border-primary rounded-xl flex flex-col justify-between pb-3">
          <div>
            <div className="border-b border-primary text-primary text-xl py-2 px-3">
              Title Deed
            </div>
            <div className="mt-4 flex flex-col gap-3 px-3"></div>
          </div>
          <div className="px-3 mt-6 grid grid-cols-2 gap-3 ">
            <button className="h-9 rounded-md uppercase text-sm bg-primary text-white">
              Upload
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DocumentBill;
