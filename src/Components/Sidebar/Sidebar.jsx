import React from 'react'
import { IoMdArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { FiTrash2 } from 'react-icons/fi'
import { SidebarContext } from '../../contexts/SidebarContext'

export default function Sidebar() {
  const [isOpen, handleClose] = useContext(SidebarContext);
  return (
    <div>Sidebar</div>
  )
}
