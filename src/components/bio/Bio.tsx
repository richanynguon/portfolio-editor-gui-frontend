import React, { useContext } from 'react'

import { ProfileContext } from '../../modules/profile/profile.context'

export default function Bio() {
  const { profile } = useContext(ProfileContext)
  return (
    <div>
      bio
    </div>
  )
}
