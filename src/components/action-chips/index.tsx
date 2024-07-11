import { Action } from "../../enums/action"

const ActionChip = ({
    action,
}: {
    action: Action
}) => {
    const actionColor = {
        [Action.buy]: 'text-green-500 border-green-500',
        [Action.sell]: 'text-red-500 border-red-500',
        [Action.hold]: 'text-yellow-500 border-yellow-500'
    }[action];
  return (
    <div className={`rounded-full px-6 items-center flex border-2 ${actionColor} `}>
        {action}
    </div>
  )
}

export default ActionChip