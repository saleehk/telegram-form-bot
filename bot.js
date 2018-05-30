'use strict'

const Telegram = require('telegram-node-bot');
const TelegramBaseController = Telegram.TelegramBaseController;
const TextCommand = Telegram.TextCommand;
const tg = new Telegram.Telegram('TOKEN');

class PingController extends TelegramBaseController {
    /**
     * @param {Scope} $
     */
    pingHandler($) {
        const form = {
            name: {
                q: 'Send me your name',
                error: 'sorry, wrong input',
                validator: (message, callback) => {

                    if (message.text) {
                        callback(true, message.text) //you must pass the result also
                        return
                    }

                    callback(false)
                }
            },
            age: {
                q: 'Send me your age',
                error: 'sorry, wrong input',
                validator: (message, callback) => {

                    if (message.text) {
                        callback(true, message.text) //you must pass the result also
                        return
                    }

                    callback(false)
                }
            },
            email: {
                q: 'Send me your Email',
                error: 'sorry, wrong input',
                validator: (message, callback) => {

                    if (message.text) {
                        callback(true, message.text) //you must pass the result also
                        return
                    }

                    callback(false)
                }
            }
        }

        $.runForm(form, (result) => {
             $.sendMessage(` ${result.name},${result.age} ,${result.email}  `)
            console.log(result)
        })
        // $.sendMessage('pong')
    }

    get routes() {
        return {
            'pingCommand': 'pingHandler'
        }
    }
}

tg.router
    .when(
        new TextCommand('/start', 'pingCommand'),
        new PingController()
    );
