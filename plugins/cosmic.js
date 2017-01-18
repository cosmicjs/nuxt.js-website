import config from '~/config'
import Cosmic from 'cosmicjs'

export default {
  getPage (slug) {
    const data = new Promise((resolve, reject) => {
      Cosmic.getObject(config.cosmic, { slug }, (err, res) => {
        if (err) return reject(err)
        resolve(res)
      })
    })
    return data
  }
}
