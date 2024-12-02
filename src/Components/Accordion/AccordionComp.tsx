import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

interface AccordionItem {
  que: string;
  ans: string;
}
interface AccordionCompProps {
  data: AccordionItem[];
}
const AccordionComp = ({ data }: AccordionCompProps) => {
  return (
    <>
      <Accordion className="border-none">
        {data.map((item, index) => (
          <AccordionPanel key={index}>
            <div className="mb-4 border-none">
              <AccordionTitle className="border-none bg-transparent hover:bg-transparent text-gray-700 font-semibold  focus:ring-0 p-0">
                {item.que}
              </AccordionTitle>
              <AccordionContent className="p-0 border-none pt-1 text-gray-700 text-sm">
                {item.ans}
              </AccordionContent>
            </div>
          </AccordionPanel>
        ))}
      </Accordion>
    </>
  );
};

export default AccordionComp;
