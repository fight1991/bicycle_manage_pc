import { $post_business, $upload } from '@/net/netInit'
import { Message } from 'element-ui'

export const upload_token = () => {
  return $post_business({
    url: '/user-center/token/getUploadToken',
    loadingText: '请求上传...'
  })
}
// 私有上传
export const upload_private = (uploadToken, filePath, accountId) => {
  return $upload({
    url: '/service-oss/upload/uploadPrivate',
    data: {
      uploadToken,
      filePath,
      accountId
    }
  })
}
// 共享上传
export const upload_public = (uploadToken, filePath) => {
  return $upload({
    url: '/service-oss/upload/uploadPublic',
    data: {
      uploadToken,
      filePath
    }
  })
}
// 获取文件token 并上传图片得到文件服务器中的地址
export const upload_func_private = async (filePath, id) => {
  if (!id) {
    Message.error('账户id不能为空!')
    return null
  }
  let { result: token } = await upload_token()
  if (!token) return null
  let { result: res2 } = await upload_private(token, filePath, id)
  if (!res2) return null  
  return res2
}
export const upload_func_public = async (filePath) => {
  let { result: token } = await upload_token()
  if (!token) return null
  let { result: res2 } = await upload_public(token, filePath)
  if (!res2) return null
  return res2
}