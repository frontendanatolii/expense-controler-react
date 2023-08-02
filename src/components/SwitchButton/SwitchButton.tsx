interface Props {
  setExpenseWindowIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

export const SwitchButton: React.FC<Props> = ({ setExpenseWindowIsOpen }) => {
  const onClick = () => {
    setExpenseWindowIsOpen(true);
  }

  return (
    <div>
      <button onClick={onClick}>Add new expense</button>
    </div>
  )
}