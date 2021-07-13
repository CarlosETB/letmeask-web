import { ReactNode } from 'react'
import cx from 'classnames'

import './styles.scss'

type LayoutProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
  isHighlighted?: boolean;
  isAnswered?: boolean;
}

export const Question:React.FC<LayoutProps> = (props) => {
  const { 
    author, 
    content, 
    children,
    isAnswered = false, 
    isHighlighted = false
  } = props

  return (
    
    <div 
      className={cx(
        'question', 
        { answered: isAnswered },
        { highlighted: isHighlighted && !isAnswered }
      )}
    >
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>

        <div>
          {children}
        </div>
      </footer>
    </div>
  )
}