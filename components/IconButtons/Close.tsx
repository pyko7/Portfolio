type Props = {
  handleClick: () => void
}

const CloseButton = ({ handleClick }: Props) => (
  <button aria-label="close menu" onClick={handleClick}>
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="absolute top-5 right-5 w-9 h-9 text-main-font-color"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
)

export default CloseButton
