import { IGallaryData } from "../../types/gallarytypes";
import GallerySkeleton from "../LoadingShimmers/GallerySkeleton";

interface Props {
  finalGalleryData: IGallaryData[];
  isFetching: boolean;
  hasNextPage: boolean | undefined;
  lastElementRef: (node: HTMLDivElement) => void;
}

const GalleryList = ({
  finalGalleryData,
  isFetching,
  hasNextPage,
  lastElementRef,
}: Props) => (
  <div className="mt-10">
    <div className="grid xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
      {isFetching && !finalGalleryData
        ? Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <GallerySkeleton />
              </div>
            ))
        : finalGalleryData?.map((item, index) => (
            <div
              key={index}
              className="max-h-60 lg:h-64 rounded-xl overflow-hidden"
              ref={
                finalGalleryData.length === index + 1 ? lastElementRef : null
              }
            >
              <img
                src={item.img_url}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
    </div>
    {isFetching && <p>Loading more items...</p>}
    {!hasNextPage && <p>No more items to load</p>}
  </div>
);

export default GalleryList;
