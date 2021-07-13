import copyImg from 'assets/images/copy.svg'

import './styles.scss'

type RoomCodeProps = {
  code: string;
}

export const RoomCode: React.FC<RoomCodeProps> = (props) => {
  const { code } = props
  
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(code)
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>

      <span>
        {code}
      </span>
    </button>
  )
}