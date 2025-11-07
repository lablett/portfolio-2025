import { cvFile } from '@constants/fileConfig'

/**
 * Downloads a file from the given URL
 * @param {string} url - The URL or path to the file to download
 * @param {string} filename - The name to save the file as
 */
export const downloadFile = (url, filename) => {
  try {
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (error) {
    console.error('Error downloading file:', error)
  }
}

/**
 * Downloads the user's CV
 */
export const downloadCV = () => {
  downloadFile(cvFile.path, cvFile.filename)
}
