
'use strict'

const _ = require('lodash')
const config = require('../config')

const msgDefaults = {
  response_type: 'in_channel',
  username: 'polybot',
  icon_emoji: config('ICON_EMOJI')
}

let attachments = [
  {
    title: 'Here is a list of the available polygons',
    color: '#2FA44F',
    text: 'Visit http://dmd.psu.edu/polygons to see them all',
    mrkdwn_in: ['text']
  },
  {
    title: 'Requesting credentials',
    color: '#E3E4E6',
    text: '`/polybot get` {credential name} to notify DMD Faculty that you earned credntial',
    mrkdwn_in: ['text']
  }
]

const handler = (payload, res) => {
  let msg = _.defaults({
    channel: payload.channel_name,
    attachments: attachments
  }, msgDefaults)

  res.set('content-type', 'application/json')
  res.status(200).json(msg)
  return
}

module.exports = { pattern: /help/ig, handler: handler }
