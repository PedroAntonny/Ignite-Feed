import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import { EditProfileModal } from '../EditProfileModal/EditProfileModal'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'

interface ProfileData {
  name: string
  role: string
  avatarUrl: string
}

export function Sidebar() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [profileData, setProfileData] = useState<ProfileData>({
    name: 'Pedro Antonio',
    role: 'Web Developer',
    avatarUrl: 'https://github.com/phalves23.png',
  })

  function handleEditProfile() {
    setIsEditModalOpen(true)
  }

  function handleCloseModal() {
    setIsEditModalOpen(false)
  }

  function handleSaveProfile(data: ProfileData) {
    setProfileData(data)
    setIsEditModalOpen(false)
  }

  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <div className={styles.profile}>
          <Avatar src={profileData.avatarUrl} />

          <strong>{profileData.name}</strong>
          <span>{profileData.role}</span>
        </div>

        <footer>
          <button onClick={handleEditProfile} className={styles.editButton}>
            <PencilLine size={20} />
            Editar seu perfil
          </button>
        </footer>
      </aside>

      <EditProfileModal
        isOpen={isEditModalOpen}
        onClose={handleCloseModal}
        profileData={profileData}
        onSave={handleSaveProfile}
      />
    </>
  )
}
