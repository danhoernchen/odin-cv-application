const STYLES = {
  primaryButton:
    "text-white bg-blue-400 box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none",
  secondaryButton:
    "text-body bg-gray-50 box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none",
  inputContainer: "w-full mx-auto p-3 border border-gray-400",
  inputGroup: "relative z-0 w-full mb-5 group",
  inputLabel:
    "absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
  inputItem:
    "block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer",
  textAreaLabel: "block mb-2.5 text-sm font-medium text-heading",
  textAreaItem:
    "bg-blue-50 border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body",
  outputContainer: "w-full h-fit mx-auto p-3 border border-gray-400",
  table: "w-full text-sm text-left rtl:text-right text-body",
  tableHead:
    "text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default",
  tableColHeader: "px-6 py-3 font-medium",
  tableRow: "bg-neutral-primary border-b border-default",
  tableRowHeader: "px-6 py-4 font-medium text-heading whitespace-nowrap",
};

export default STYLES;
