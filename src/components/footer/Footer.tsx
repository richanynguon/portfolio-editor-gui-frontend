import React, { useContext } from 'react'
import { ProfileContext } from '../../modules/profile/profile.context'

export default function Footer() {
  const { profile } = useContext(ProfileContext)
  return (
    <div>
      Footer
    </div>
  )
}
