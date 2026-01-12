type PrimaryButtonProps = {
  // You can add props here if needed in the future
  text: string;
  className?: string;
  onClick?: () => void;
};

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <button
      onClick={props?.onClick}
      type="button"
      className={`py-[9px] px-4 rounded-lg bg-[#726d69] text-white text-xs font-semibold hover:bg-[#54514f] ${
        props?.className || ""
      }`}
    >
      {props.text}
    </button>
  );
}
