import { useState, FormEvent, ChangeEvent } from 'react'
import { X } from 'phosphor-react'
import { Modal } from '../Modal/Modal'
import { Avatar } from '../Avatar/Avatar'
import styles from './EditProfileModal.module.css'

interface ProfileData {
  name: string
  role: string
  avatarUrl: string
}

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  profileData: ProfileData
  onSave: (data: ProfileData) => void
}

export function EditProfileModal({
  isOpen,
  onClose,
  profileData,
  onSave,
}: EditProfileModalProps) {
  const [formData, setFormData] = useState<ProfileData>(profileData)
  const [errors, setErrors] = useState<Partial<ProfileData>>({})

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    if (errors[name as keyof ProfileData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  function validateForm(): boolean {
    const newErrors: Partial<ProfileData> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
    }

    if (!formData.role.trim()) {
      newErrors.role = 'Cargo é obrigatório'
    }

    if (!formData.avatarUrl.trim()) {
      newErrors.avatarUrl = 'URL da imagem é obrigatória'
    } else if (!isValidUrl(formData.avatarUrl)) {
      newErrors.avatarUrl = 'URL inválida'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function isValidUrl(string: string): boolean {
    try {
      new URL(string)
      return true
    } catch (_) {
      return false
    }
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault()

    if (validateForm()) {
      onSave(formData)
      onClose()
    }
  }

  function handleClose() {
    setFormData(profileData)
    setErrors({})
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.modalHeader}>
        <h2 className={styles.modalTitle}>Editar Perfil</h2>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          title="Fechar modal"
        >
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className={styles.modalContent}>
        <div className={styles.avatarPreview}>
          <Avatar src={formData.avatarUrl} />
          <span className={styles.previewLabel}>Preview do Avatar</span>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.input} ${
              errors.name ? styles.inputError : ''
            }`}
            placeholder="Digite seu nome"
          />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name}</span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="role" className={styles.label}>
            Cargo
          </label>
          <input
            id="role"
            name="role"
            type="text"
            value={formData.role}
            onChange={handleInputChange}
            className={`${styles.input} ${
              errors.role ? styles.inputError : ''
            }`}
            placeholder="Digite seu cargo"
          />
          {errors.role && (
            <span className={styles.errorMessage}>{errors.role}</span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="avatarUrl" className={styles.label}>
            URL da Imagem
          </label>
          <input
            id="avatarUrl"
            name="avatarUrl"
            type="url"
            value={formData.avatarUrl}
            onChange={handleInputChange}
            className={`${styles.input} ${
              errors.avatarUrl ? styles.inputError : ''
            }`}
            placeholder="https://exemplo.com/imagem.jpg"
          />
          {errors.avatarUrl && (
            <span className={styles.errorMessage}>{errors.avatarUrl}</span>
          )}
        </div>

        <div className={styles.modalFooter}>
          <button
            type="button"
            onClick={handleClose}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
          <button type="submit" className={styles.saveButton}>
            Salvar
          </button>
        </div>
      </form>
    </Modal>
  )
}
