import config from '../config'
import Cosmic from 'cosmicjs'
export default {
  getPage(slug) {
    const data = new Promise(resolve => {
      Cosmic.getObject(config.cosmic, { slug }, (err, res) => {
        resolve(res)
      })
    })
    return data
  }
}