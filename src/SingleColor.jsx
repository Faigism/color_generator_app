import { toast } from 'react-toastify'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color

  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        toast.dismiss()
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard', { autoClose: 1500 })
      } catch (error) {
        toast.dismiss()
        toast.error('Failed to copy color to clipboard', { autoClose: 1500 })
      }
    } else {
      toast.dismiss()
      toast.error('Clipboard access not available', { autoClose: 1500 })
    }
  }

  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ background: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}
export default SingleColor
