
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
    title: 'polybot will help you find the hippest repos on GitHub',
    color: '#2FA44F',
    text: '`/polybot repos` returns hip repos \n`/polybot javascript` returns hip JavaScript repos',
    mrkdwn_in: ['text']
  },
  {
    title: 'Configuring polybot',
    color: '#E3E4E6',
    text: '`/polybot help` ... you\'re lookin at it! \n',
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
