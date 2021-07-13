import React, { ButtonHTMLAttributes } from "react"
import './styles.scss'

type LayoutProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export const Button: React.FC<LayoutProps> = (props) => {
  const { isOutlined = false } = props
  
  return (
    <button 
      className={`button ${isOutlined ? 'outlined': ''}`} 
      {...props} 
    />
  )
}
