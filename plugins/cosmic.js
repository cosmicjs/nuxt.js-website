import config from '~/config'
import _ from 'lodash'
import Cosmic from 'cosmicjs'
// Fix for CosmicJS Version 4 of lodash
if (!_.indexBy) { _.indexBy = _.keyBy }

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
